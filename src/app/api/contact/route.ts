import { NextResponse } from "next/server";
import { isValidEmail, sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "留言内容不能为空。" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "请输入有效的邮箱地址。" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_EMAIL ?? user;

    if (!host || !user || !pass || !targetEmail) {
      return NextResponse.json(
        { error: "SMTP 配置不完整，请检查 SMTP_HOST、SMTP_USER、SMTP_PASS 和 CONTACT_EMAIL。" },
        { status: 500 }
      );
    }

    await sendEmail({
      subject: `网站留言：${name || email}`,
      text: `姓名：${name || "未填写"}\n电话：${phone || "未填写"}\n邮箱：${email}\n\n留言：\n${message}`,
      html: `<p>姓名：${name || "未填写"}</p><p>电话：${phone || "未填写"}</p><p>邮箱：${email}</p><p>留言：</p><p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact API error:", error);
    const message = error instanceof Error ? error.message : "未知错误";
    const responseMessage = process.env.NODE_ENV === "production"
      ? "邮件发送失败，请稍后再试。"
      : `邮件发送失败：${message}`;
    return NextResponse.json({ error: responseMessage }, { status: 500 });
  }
}
