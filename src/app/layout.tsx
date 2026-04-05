import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大连阳光锅炉辅机有限公司-生物质往复炉排,链条,横梁炉排,炉排厂家,阳光锅炉,大连阳光锅炉,锅炉配件,锅炉辅机,锅炉",
  description: "阳光锅炉,大连阳光锅炉,锅炉配件,锅炉辅机,锅炉设备,大连阳光锅炉辅机有限公司,横梁炉排链带炉排生物质炉排产品可满足0.5t/h~220t/h蒸汽锅炉、0.7MW~84MW热水锅炉配套的需要，还提供热风炉、焚烧炉配用产品系列。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
