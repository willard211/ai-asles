import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: '外贸智联 — WhatsApp AI 销售系统 | 让询盘被 AI 自动接住',
  description:
    '面向中国外贸企业的 WhatsApp AI 销售系统，解决企业出海获客难、响应慢、跟进散、转化低等问题，帮助销售沉淀客户画像与跟进建议。',
  keywords: '外贸,WhatsApp,AI销售,询盘管理,外贸CRM,智能跟进,客户画像',
  authors: [{ name: '外贸智联' }],
  openGraph: {
    title: '外贸智联 — WhatsApp AI 销售系统',
    description: '让 WhatsApp 里的海外询盘，被 AI 自动接住、识别和跟进',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
