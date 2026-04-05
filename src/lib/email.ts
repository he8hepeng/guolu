import nodemailer from "nodemailer";

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const targetEmail = process.env.CONTACT_EMAIL ?? user;

  if (!host || !user || !pass || !targetEmail) {
    throw new Error("SMTP 配置不完整，请检查 SMTP_HOST、SMTP_USER、SMTP_PASS 和 CONTACT_EMAIL。"
    );
  }

  return { host, port, secure, auth: { user, pass }, targetEmail };
}

export async function sendEmail({
  subject,
  text,
  html,
}: {
  subject: string;
  text: string;
  html: string;
}) {
  const { host, port, secure, auth, targetEmail } = getMailConfig();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth,
    tls: { rejectUnauthorized: false },
  });

  return transporter.sendMail({
    from: `网站留言 <${auth.user}>`,
    to: targetEmail,
    subject,
    text,
    html,
  });
}
