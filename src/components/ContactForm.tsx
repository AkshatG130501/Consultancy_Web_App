"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const audienceOptions = [
  "I'm looking for consulting services",
  "I'm a candidate / job seeker",
  "I'm a potential partner or investor",
  "Media & press enquiry",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      audience: String(data.get("audience") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-navy-950/8 bg-cream-100 p-10 text-center">
        <CheckCircle2 className="size-10 text-gold-600" />
        <h3 className="font-serif-display text-xl font-medium text-navy-950">
          Message received
        </h3>
        <p className="max-w-sm text-sm text-navy-700/70">
          Thank you for reaching out. A member of our team will respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" required autoComplete="family-name" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="audience" className="mb-1.5 block text-sm font-medium text-navy-900">
          What best describes you?
        </label>
        <select
          id="audience"
          name="audience"
          defaultValue={audienceOptions[0]}
          className="w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        >
          {audienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you need..."
          className="w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none placeholder:text-navy-900/35 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3.5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none placeholder:text-navy-900/35 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
      />
    </div>
  );
}
