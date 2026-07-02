import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abacusflow.cn"),
  title: "小算盘 AbacusFlow｜进销存业务指挥台",
  description:
    "小算盘 AbacusFlow 是面向零售经营的进销存业务指挥台，把产品、库存、采购、销售、客户、供应商和仓点放进同一条可追踪的业务流里。",
  openGraph: {
    title: "小算盘 AbacusFlow｜进销存业务指挥台",
    description:
      "产品、库存、采购、销售、客户、供应商、仓点和数据刻画，一条可追踪的业务流。",
    images: ["/static/img/showcase/web/web-dashboard-overview.png"],
    url: "https://abacusflow.cn",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
