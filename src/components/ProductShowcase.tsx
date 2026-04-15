'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

const products = [
  { name: '往复炉排', nameEn: 'Reciprocating Grate', category: 'main' },
  { name: '往复炉排配件', nameEn: 'Reciprocating Grate Parts', category: 'parts' },
  { name: '鳞片炉排', nameEn: 'Chain Grate', category: 'main' },
  { name: '鳞片炉排配件', nameEn: 'Chain Grate Parts', category: 'parts' },
  { name: '横梁炉排', nameEn: 'Crossbeam Grate', category: 'main' },
  { name: '横梁炉排配件', nameEn: 'Crossbeam Grate Parts', category: 'parts' },
  { name: '链带炉排', nameEn: 'Chain Belt Grate', category: 'main' },
  { name: '链带炉排配件', nameEn: 'Chain Belt Grate Parts', category: 'parts' },
  { name: '除渣机&上煤机', nameEn: 'Slag Remover & Coal Feeder', category: 'other' },
];

export default function ProductShowcase() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'zh' ? '产品中心' : 'Products'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'zh' 
              ? '专业生产各类锅炉辅机设备，产品涵盖往复炉排、鳞片炉排、横梁炉排、链带炉排等多个系列'
              : 'Professional manufacturing of various boiler auxiliary equipment, including reciprocating grates, chain grates, crossbeam grates, and more'
            }
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/products?category=${encodeURIComponent(product.name)}`}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-center group-hover:text-orange-500 transition-colors">
                  {language === 'zh' ? product.name : product.nameEn}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white gap-2"
            >
              {language === 'zh' ? '查看全部产品' : 'View All Products'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
