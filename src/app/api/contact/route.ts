import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  audience?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, message } = body;

  if (!firstName?.trim() || !lastName?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "First name, last name, and message are required." },
      { status: 400 },
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // No email provider is wired up yet — plug in Resend/SendGrid/etc. here with an API key
  // before relying on this route to actually deliver enquiries to the inbox.
  console.log("New contact enquiry:", body);

  return NextResponse.json({ ok: true });
}
