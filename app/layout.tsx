import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "rBTC 获取指南 | Rootstock",
  description: "轻松获取 rBTC - 比特币 DeFi 的钥匙。详细教程教你如何通过 BTC、数字资产或法币获取 rBTC。",
  keywords: "Rootstock, rBTC, 比特币, DeFi, 智能合约, 加密货币, Bitcoin",
  openGraph: {
    title: "rBTC 获取指南",
    description: "轻松获取 rBTC - 比特币 DeFi 的钥匙",
    type: "website",
    locale: "zh_CN",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FF9100",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
