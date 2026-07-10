@AGENTS.md

## Theme tokens (IMPORTANT gotcha)

The site uses a **bright white + rose/crimson** theme. The Tailwind color token *names* no
longer match their hues — the palette was remapped centrally in `src/app/globals.css`:

- `navy-*`  → neutral near-black **ink** (text), NOT blue. e.g. `text-navy-950` = `#16131a`.
- `gold-*`  → **muted steel-blue accent** (`#4a7fb0` family). e.g. `bg-gold-600`, `text-gold-700`.
- `cream-*` → **white / faint light neutrals**. `cream-50` = `#ffffff`.

So for accent color use the `gold-*` classes; for dark text use `navy-*`; for light surfaces use
`cream-*`/`white`. Surfaces are white/light everywhere; the single bold color band is the CTABand
(`bg-gold-600`). To change the accent hue, edit the `--color-gold-*` values in `globals.css` only.
