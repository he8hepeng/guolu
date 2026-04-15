import type { Metadata, Viewport } from 'next';
import { Inspector } from 'react-dev-inspector';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ea580c',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://www.sungrate.com'),
  title: {
    default: '大连阳光锅炉辅机有限公司 - 专业炉排制造商',
    template: '%s | 大连阳光锅炉辅机有限公司',
  },
  description:
    '大连阳光锅炉辅机有限公司专业生产各类锅炉辅机设备，涵盖往复炉排、鳞片炉排、横梁炉排、链带炉排等，产品远销国内外二十多个国家和地区。30余年行业经验，年产各类炉排5万余吨。',
  keywords: [
    '炉排',
    '锅炉辅机',
    '往复炉排',
    '鳞片炉排',
    '横梁炉排',
    '链带炉排',
    '垃圾焚烧炉',
    '生物质炉排',
    '大连阳光',
    '炉排厂家',
    '锅炉配件',
    '链条炉排',
    '生物质能源',
    '工业锅炉',
  ],
  authors: [{ name: '大连阳光锅炉辅机有限公司', url: 'https://www.sungrate.com' }],
  creator: '大连阳光锅炉辅机有限公司',
  publisher: '大连阳光锅炉辅机有限公司',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.sungrate.com',
    languages: {
      'zh-CN': 'https://www.sungrate.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.sungrate.com',
    siteName: '大连阳光锅炉辅机有限公司',
    title: '大连阳光锅炉辅机有限公司 - 专业炉排制造商',
    description: '专业生产各类锅炉辅机设备，涵盖往复炉排、鳞片炉排、横梁炉排、链带炉排等，年产5万余吨，产品远销国内外。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '大连阳光锅炉辅机有限公司',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '大连阳光锅炉辅机有限公司 - 专业炉排制造商',
    description: '专业生产各类锅炉辅机设备，涵盖往复炉排、鳞片炉排、横梁炉排、链带炉排等。',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: '工业制造',
  other: {
    'msapplication-TileColor': '#ea580c',
    'msapplication-tap-highlight': 'no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '大连阳光锅炉辅机有限公司',
              alternateName: '阳光炉排',
              url: 'https://www.sungrate.com',
              logo: 'https://www.sungrate.com/logo.png',
              description: '专业生产各类锅炉辅机设备，涵盖往复炉排、鳞片炉排、横梁炉排、链带炉排等',
              foundingDate: '1998',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '姚家工业区',
                addressLocality: '甘井子区',
                addressRegion: '大连市',
                postalCode: '116000',
                addressCountry: 'CN',
              },
              telephone: '+86-158-4092-5233',
              email: 'info@sungrate.com',
              sameAs: [
                'https://www.sungrate.com',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {isDev && <Inspector />}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
