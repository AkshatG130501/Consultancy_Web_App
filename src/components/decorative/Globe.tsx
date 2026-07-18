"use client";

import { useEffect, useRef, useState } from "react";
import {
  geoOrthographic,
  geoPath,
  geoGraticule10,
  geoContains,
  geoCentroid,
  geoDistance,
  type GeoPermissibleObjects,
} from "d3-geo";
import { feature, merge, mesh } from "topojson-client";
import type { Feature, Geometry, MultiPolygon, MultiLineString } from "geojson";
import { cn } from "@/lib/utils";
import {
  REGIONS,
  REGION_COLORS,
  GLOBE_COLORS,
  KEY_COUNTRIES,
  regionOf,
  type GlobeRegion,
} from "@/lib/data/globe-regions";

type CountryFeature = Feature<Geometry, { name: string }>;

type GlobeData = {
  countries: CountryFeature[];
  highlighted: CountryFeature[];
  borders: MultiLineString;
  regionOutlines: { region: GlobeRegion; geo: MultiPolygon }[];
};

const INITIAL_ROTATION: [number, number] = [-40, -12];
const FOCUS_LON = 45; // center longitude of Asia / Africa / Middle East
const SLOW_SPEED = 0.5; // deg/frame while the focus regions face the viewer
const FAST_SPEED = 1.3; // deg/frame across the far (Pacific/Americas) side
const DRAG_SENSITIVITY = 0.3;

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<GlobeData | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Load + prepare the topology once.
  useEffect(() => {
    let cancelled = false;
    fetch("/data/countries-50m.json")
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled) return;
        const geometries: { properties: { name: string } }[] =
          topo.objects.countries.geometries;
        const fc = feature(topo, topo.objects.countries) as unknown as {
          features: CountryFeature[];
        };
        const countries = fc.features;
        const highlighted = countries.filter((f) =>
          regionOf(f.properties.name),
        );
        const borders = mesh(
          topo,
          topo.objects.countries,
          (a, b) => a !== b,
        ) as MultiLineString;
        const regionOutlines = REGIONS.map((region) => ({
          region,
          geo: merge(
            topo,
            geometries.filter(
              (g) => regionOf(g.properties.name) === region,
            ) as unknown as Parameters<typeof merge>[1],
          ) as MultiPolygon,
        }));
        setData({ countries, highlighted, borders, regionOutlines });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let size = canvas.offsetWidth;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const projection = geoOrthographic().precision(0.5);
    const path = geoPath(projection, ctx);
    const graticule = geoGraticule10();

    const rotation: [number, number] = [...INITIAL_ROTATION];
    let dragging = false;

    const resize = () => {
      size = canvas.offsetWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.scale((size / 2) * 0.95).translate([size / 2, size / 2]);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      projection.rotate(rotation);
      ctx.clearRect(0, 0, size, size);

      // Ocean sphere
      ctx.beginPath();
      path({ type: "Sphere" } as GeoPermissibleObjects);
      ctx.fillStyle = GLOBE_COLORS.ocean;
      ctx.fill();

      // Graticule
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = GLOBE_COLORS.graticule;
      ctx.lineWidth = 0.4;
      ctx.stroke();

      // Country fills
      for (const f of data.countries) {
        const region = regionOf(f.properties.name);
        ctx.beginPath();
        path(f as unknown as GeoPermissibleObjects);
        ctx.fillStyle = region
          ? REGION_COLORS[region].fill
          : GLOBE_COLORS.otherLand;
        ctx.fill();
      }

      // Internal country borders
      ctx.beginPath();
      path(data.borders as unknown as GeoPermissibleObjects);
      ctx.strokeStyle = GLOBE_COLORS.border;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Highlighted region boundaries
      for (const { region, geo } of data.regionOutlines) {
        ctx.beginPath();
        path(geo as unknown as GeoPermissibleObjects);
        ctx.strokeStyle = REGION_COLORS[region].boundary;
        ctx.lineWidth = 1.75;
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // Sphere outline
      ctx.beginPath();
      path({ type: "Sphere" } as GeoPermissibleObjects);
      ctx.strokeStyle = GLOBE_COLORS.sphereStroke;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Position the always-on country labels
      const center: [number, number] = [-rotation[0], -rotation[1]];
      for (const name of KEY_COUNTRIES) {
        const el = labelRefs.current[name];
        const f = data.highlighted.find((c) => c.properties.name === name);
        if (!el || !f) continue;
        const centroid = geoCentroid(f as unknown as GeoPermissibleObjects);
        const visible = geoDistance(centroid, center) < Math.PI / 2 - 0.05;
        const p = projection(centroid);
        if (visible && p) {
          el.style.left = `${(p[0] / size) * 100}%`;
          el.style.top = `${(p[1] / size) * 100}%`;
          el.style.opacity = "1";
        } else {
          el.style.opacity = "0";
        }
      }
    };

    let frameId: number;
    const tick = () => {
      if (!dragging && !reduced) {
        // Speed depends on how far the currently-facing longitude is from the
        // focus regions: slow when they're in view, fast across the far side.
        const facing = -rotation[0];
        const diff = ((facing - FOCUS_LON + 540) % 360) - 180; // [-180, 180]
        const delta = (Math.abs(diff) * Math.PI) / 180;
        const factor = (1 - Math.cos(delta)) / 2; // 0 at focus → 1 at antipode
        rotation[0] += SLOW_SPEED + (FAST_SPEED - SLOW_SPEED) * factor;
      }
      draw();
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    // --- interaction ---
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onPointerUp = (e: PointerEvent) => {
      dragging = false;
      canvas.style.cursor = "grab";
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
    };
    const onPointerMove = (e: PointerEvent) => {
      if (dragging) {
        rotation[0] += (e.clientX - lastX) * DRAG_SENSITIVITY;
        rotation[1] = Math.max(
          -90,
          Math.min(90, rotation[1] - (e.clientY - lastY) * DRAG_SENSITIVITY),
        );
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }
      // Hover hit-test
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const coords = projection.invert?.([x, y]);
      let found: string | null = null;
      if (coords) {
        for (const f of data.highlighted) {
          if (geoContains(f as unknown as GeoPermissibleObjects, coords)) {
            found = f.properties.name;
            break;
          }
        }
      }
      setHovered(found);
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${(x / size) * 100}%`;
        tooltipRef.current.style.top = `${(y / size) * 100}%`;
      }
    };
    const onPointerLeave = () => {
      if (!dragging) setHovered(null);
    };

    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [data]);

  return (
    <div className={cn("mx-auto w-full max-w-md", className)}>
      <div ref={wrapRef} className="relative aspect-square w-full touch-none">
        <canvas
          ref={canvasRef}
          className="size-full contain-[layout_paint_size]"
        />

        {/* Always-on labels for key countries */}
        {[...KEY_COUNTRIES].map((name) => (
          <div
            key={name}
            ref={(el) => {
              labelRefs.current[name] = el;
            }}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200"
          >
            <span className="size-1.5 rounded-full bg-navy-900/70 outline outline-2 outline-white" />
            <span className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-navy-800 shadow-sm ring-1 ring-navy-950/10">
              {name}
            </span>
          </div>
        ))}

        {/* Hover tooltip for all other countries */}
        <div
          ref={tooltipRef}
          className={cn(
            "pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[150%] transition-opacity duration-100",
            hovered && !KEY_COUNTRIES.has(hovered)
              ? "opacity-100"
              : "opacity-0",
          )}
        >
          {hovered && (
            <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-white shadow-md">
              {hovered}
            </span>
          )}
        </div>
      </div>

      {/* Region legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {REGIONS.map((region) => (
          <span
            key={region}
            className="flex items-center gap-2 text-sm font-medium tracking-wide text-navy-700"
          >
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: REGION_COLORS[region].swatch }}
            />
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}
