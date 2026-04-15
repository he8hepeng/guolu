'use client';

import Link from 'next/link';
import { CopyButton } from './CopyButton';
import { useLanguage } from '@/i18n/LanguageProvider';

const tags = {
  zh: [
    '炉排厂家',
    '垃圾焚烧炉',
    '故障分析',
    '链带炉排',
    '永宁炉排',
    '横梁炉排',
    '垃圾焚烧炉分层煤斗',
    '医疗废物焚烧炉',
    '生物质炉排',
    '炉排小鳞片',
    '炉排双螺旋给料器',
    '输送机',
    '生物质往复炉排',
    '往复炉排',
    '鳞片炉排',
    '链条炉排',
    '生物质鳞片炉排',
    '炉排出口',
    '大块炉排',
  ],
  en: [
    'Grate Manufacturer',
    'Waste Incinerator',
    'Troubleshooting',
    'Chain Grate',
    'Crossbeam Grate',
    'Biomass Grate',
    'Reciprocating Grate',
    'Industrial Boiler',
    'Boiler Auxiliary',
    'Steam Boiler',
    'Heating System',
    'Power Generation',
    'Environmental',
    'Chain Belt Grate',
    'Combustion System',
  ],
};

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Tags Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-sm font-medium text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {(language === 'zh' ? tags.zh : tags.en).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full hover:bg-gray-700 hover:text-gray-300 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">阳</span>
              </div>
              <span className="font-bold text-lg text-white">
                {t.footer.companyName}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh' 
                ? '专业生产各类锅炉辅机设备，经过30余年的发展，已成为国内领先的炉排制造商。'
                : 'Professional manufacturing of various boiler auxiliary equipment. After 30+ years of development, we have become a leading grate manufacturer in China.'
              }
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{language === 'zh' ? '大连市甘井子区姚家工业区111号' : 'No.111, Yaojia Industrial Zone, Ganjingzi District, Dalian'}</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>158-4092-5233</span>
                <CopyButton text="15840905233" />
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sungrate.com</span>
                <CopyButton text="info@sungrate.com" />
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-500 transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-orange-500 transition-colors">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {language === 'zh' ? '服务热线' : 'Service Hotline'}
            </h4>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-500 mb-2">158-4092-5233</p>
              <p className="text-sm text-gray-400">
                {language === 'zh' ? '周一至周五 8:00-17:00' : 'Mon-Fri 8:00-17:00'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 pb-24 lg:pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>{t.footer.copyright}</p>
              <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                辽ICP备2026006486号-1
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors">
                {language === 'zh' ? '使用条款' : 'Terms of Use'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
