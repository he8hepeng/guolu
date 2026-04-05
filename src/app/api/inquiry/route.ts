import { NextResponse } from "next/server";
import { isValidEmail, sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, product, inquiry } = body;

    if (!inquiry || typeof inquiry !== "string") {
      return NextResponse.json({ error: "询价内容不能为空。" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "请输入有效的邮箱地址。" }, { status: 400 });
    }

    await sendEmail({
      subject: `产品询价：${product || "未指定产品"}`,
      text: `姓名：${name || "未填写"}\n电话：${phone || "未填写"}\n公司：${company || "未填写"}\n产品：${product || "未填写"}\n邮箱：${email}\n\n询价内容：\n${inquiry}`,
      html: `
        <p>姓名：${name || "未填写"}</p>
        <p>电话：${phone || "未填写"}</p>
        <p>公司：${company || "未填写"}</p>
        <p>产品：${product || "未填写"}</p>
        <p>邮箱：${email}</p>
        <p>询价内容：</p>
        <p>${inquiry.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("inquiry API error:", error);
    const message = error instanceof Error ? error.message : "未知错误";
    const responseMessage = process.env.NODE_ENV === "production"
      ? "邮件发送失败，请稍后再试。"
      : `邮件发送失败：${message}`;
    return NextResponse.json({ error: responseMessage }, { status: 500 });
  }
}
