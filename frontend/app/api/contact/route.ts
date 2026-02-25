import nodemailer from "nodemailer";
import { getClient } from "../../../lib/api/ApolloClient";
import { GET_CONTACT_SETTINGS } from "../../../graphql/contactSettings";

const FALLBACK_RECIPIENTS = [
  "bartosz.kuklewski@best.pw.edu.pl",
];

type ContactSettingsData = {
  contactSetting?: {
    recipients?: Array<{ email?: string; name?: string }>;
  };
};

async function getRecipients(): Promise<string[]> {
  const token = process.env.BACKEND_API_TOKEN;
  if (!token) return FALLBACK_RECIPIENTS;

  try {
    const client = getClient();
    const { data } = await client.query<ContactSettingsData>({
      query: GET_CONTACT_SETTINGS,
    });
    const recipients = data?.contactSetting?.recipients;
    if (!Array.isArray(recipients) || recipients.length === 0) {
      return FALLBACK_RECIPIENTS;
    }

    const emails = recipients
      .map((r: { email?: string }) => r?.email)
      .filter((e): e is string => typeof e === "string" && e.length > 0);
    return emails.length > 0 ? emails : FALLBACK_RECIPIENTS;
  } catch {
    return FALLBACK_RECIPIENTS;
  }
}

export async function POST(request: Request) {
  const { name, surname, companyName, email, tel } = await request.json();

  const host = process.env.SMTP_HOST;
  if (!host) {
    console.error("SMTP_HOST is not configured");
    return new Response(
      JSON.stringify({ submitted: false, error: "Mail configuration error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
  });

  const fromEmail =
    process.env.SMTP_FROM_EMAIL || "bartosz.kuklewski@best.pw.edu.pl";
  const fromName = process.env.SMTP_FROM_NAME || "Targus";

  const recipients = await getRecipients();
  const subject = `⚠️ Nowa firemka [${companyName}] w twojej okolicy ⚠️`;
  const timestamp = new Date().toLocaleString("pl-PL", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const logoUrl = process.env.SMTP_LOGO_URL;

  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nowa firemka</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 520px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    ${logoUrl ? `<tr>
                        <td style="padding: 32px 40px 24px; text-align: center; border-bottom: 1px solid #eaeaea;">
                            <img src="${logoUrl}" alt="Logo" style="max-width: 180px; height: auto;">
                        </td>
                    </tr>` : ""}
                    <tr>
                        <td style="padding: 32px 40px;">
                            <h1 style="margin: 0 0 24px; font-size: 22px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
                              Otrzymano nową wiadomość z formularza kontaktowego.  
                            </h1>
                            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #4a4a4a;">
                                Nowa firemka: ${companyName}
                            </p>
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                                <tr>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;"><b>Imię:</b></td>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;"><b>Nazwisko:</b></td>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;">${surname}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;"><b>Numer telefonu:</b></td>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;">${tel}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;"><b>Email:</b></td>
                                    <td style="padding: 8px 0; font-size: 15px; color: #4a4a4a;"><a href="mailto:${email}">${email}</a></td>
                                </tr>
                            </table>
                            <p style="margin: 24px 0 0; font-size: 13px; line-height: 1.5; color: #888;">
                                Data i godzina: ${timestamp}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 24px 40px; background-color: #f9f9f9; border-top: 1px solid #eaeaea;">
                            <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #888; text-align: center;">
                                Ta wiadomość została wysłana automatycznie przez formularz kontaktowy.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: recipients,
      subject,
      text: "Nowa firemka",
      html,
    });
    return new Response(JSON.stringify({ submitted: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return new Response(
      JSON.stringify({ submitted: false, error: "Failed to send message" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
