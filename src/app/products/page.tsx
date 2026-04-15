'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FixedSidebar from '@/components/FixedSidebar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/i18n/LanguageProvider';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  specs: string[];
  specsEn: string[];
  image: string;
}

const categories = {
  zh: ['全部产品', '往复炉排', '往复炉排配件', '鳞片炉排', '鳞片炉排配件', '横梁炉排', '横梁炉排配件', '链带炉排', '链带炉排配件', '除渣机&上煤机'],
  en: ['All Products', 'Reciprocating Grate', 'Reciprocating Grate Parts', 'Chain Grate', 'Chain Grate Parts', 'Crossbeam Grate', 'Crossbeam Grate Parts', 'Chain Belt Grate', 'Chain Belt Grate Parts', 'Slag Remover & Coal Feeder'],
};

const categoryMapping: Record<string, string> = {
  '全部产品': 'all',
  'All Products': 'all',
  '往复炉排': '往复炉排',
  'Reciprocating Grate': '往复炉排',
  '往复炉排配件': '往复炉排配件',
  'Reciprocating Grate Parts': '往复炉排配件',
  '鳞片炉排': '鳞片炉排',
  'Chain Grate': '鳞片炉排',
  '鳞片炉排配件': '鳞片炉排配件',
  'Chain Grate Parts': '鳞片炉排配件',
  '横梁炉排': '横梁炉排',
  'Crossbeam Grate': '横梁炉排',
  '横梁炉排配件': '横梁炉排配件',
  'Crossbeam Grate Parts': '横梁炉排配件',
  '链带炉排': '链带炉排',
  'Chain Belt Grate': '链带炉排',
  '链带炉排配件': '链带炉排配件',
  'Chain Belt Grate Parts': '链带炉排配件',
  '除渣机&上煤机': '除渣机&上煤机',
  'Slag Remover & Coal Feeder': '除渣机&上煤机',
};

const products: Product[] = [
  {
    id: 1,
    name: '往复炉排',
    nameEn: 'Reciprocating Grate',
    category: '往复炉排',
    categoryEn: 'Reciprocating Grate',
    description: '采用优质合金钢材制作，结构坚固，运行平稳，适用于各种燃煤锅炉。独特的往复运动设计使燃料充分燃烧，热效率高。',
    descriptionEn: 'Made of high-quality alloy steel, sturdy structure, stable operation, suitable for various coal-fired boilers. Unique reciprocating motion design ensures complete fuel combustion and high thermal efficiency.',
    specs: ['材质: 优质合金钢', '寿命: ≥80000小时', '热效率: ≥85%'],
    specsEn: ['Material: High-quality alloy steel', 'Service life: ≥80000 hours', 'Thermal efficiency: ≥85%'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  },
  {
    id: 2,
    name: '往复炉排配件-主动炉排片',
    nameEn: 'Reciprocating Grate Parts - Active Grate Bars',
    category: '往复炉排配件',
    categoryEn: 'Reciprocating Grate Parts',
    description: '高强度合金钢材质，经过特殊热处理工艺，耐磨耐腐蚀，使用寿命长。',
    descriptionEn: 'High-strength alloy steel material,经过特殊热处理工艺,耐磨耐腐蚀,使用寿命长。',
    specs: ['材质: Cr-Mo合金钢', '硬度: HRC45-55', '规格: 多种规格可选'],
    specsEn: ['Material: Cr-Mo alloy steel', 'Hardness: HRC45-55', 'Specifications: Multiple options'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    id: 3,
    name: '往复炉排配件-从动炉排片',
    nameEn: 'Reciprocating Grate Parts - Driven Grate Bars',
    category: '往复炉排配件',
    categoryEn: 'Reciprocating Grate Parts',
    description: '与主动炉排片配套使用，保证炉排运动同步，燃烧均匀。',
    descriptionEn: 'Used with active grate bars to ensure synchronized grate movement and uniform combustion.',
    specs: ['材质: 优质合金钢', '表面处理: 渗碳处理', '寿命: ≥50000小时'],
    specsEn: ['Material: High-quality alloy steel', 'Surface treatment: Carburizing', 'Service life: ≥50000 hours'],
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&q=80',
  },
  {
    id: 4,
    name: '鳞片炉排',
    nameEn: 'Chain Grate',
    category: '鳞片炉排',
    categoryEn: 'Chain Grate',
    description: '鳞片式结构设计，通风均匀，燃烧效果好。广泛应用于工业锅炉和电站锅炉。',
    descriptionEn: 'Scale-type structural design, uniform ventilation, excellent combustion effect. Widely used in industrial boilers and power station boilers.',
    specs: ['材质: 耐热合金钢', '适用燃料: 各类煤种', '特点: 通风均匀'],
    specsEn: ['Material: Heat-resistant alloy steel', 'Fuel: Various coal types', 'Feature: Uniform ventilation'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 5,
    name: '鳞片炉排配件-鳞片',
    nameEn: 'Chain Grate Parts - Scale',
    category: '鳞片炉排配件',
    categoryEn: 'Chain Grate Parts',
    description: '精密铸造的鳞片部件，尺寸精确，更换方便。',
    descriptionEn: 'Precision-cast scale components, precise dimensions, easy replacement.',
    specs: ['材质: 球墨铸铁', '工艺: 精密铸造', '规格齐全'],
    specsEn: ['Material: Ductile iron', 'Process: Precision casting', 'Complete specifications'],
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
  },
  {
    id: 6,
    name: '横梁炉排',
    nameEn: 'Crossbeam Grate',
    category: '横梁炉排',
    categoryEn: 'Crossbeam Grate',
    description: '横梁支撑结构，承重能力强，运行稳定可靠。适合大型工业锅炉使用。',
    descriptionEn: 'Crossbeam support structure, strong load-bearing capacity, stable and reliable operation. Suitable for large industrial boilers.',
    specs: ['承重能力: 大型炉排', '材质: 低合金钢', '特点: 结构稳定'],
    specsEn: ['Load capacity: Large grate', 'Material: Low alloy steel', 'Feature: Stable structure'],
    image: 'https://images.unsplash.com/photo-1625812237523-2988f5c8e8d9?w=600&q=80',
  },
  {
    id: 7,
    name: '横梁炉排配件-横梁',
    nameEn: 'Crossbeam Grate Parts - Crossbeam',
    category: '横梁炉排配件',
    categoryEn: 'Crossbeam Grate Parts',
    description: '高强度横梁部件，承载整列炉排，运行平稳。',
    descriptionEn: 'High-strength crossbeam components, bearing the entire grate row, smooth operation.',
    specs: ['材质: Q345合金钢', '工艺: 焊接+热处理', '规格: 按图纸定制'],
    specsEn: ['Material: Q345 alloy steel', 'Process: Welding + Heat treatment', 'Specification: Custom per drawing'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  },
  {
    id: 8,
    name: '链带炉排',
    nameEn: 'Chain Belt Grate',
    category: '链带炉排',
    categoryEn: 'Chain Belt Grate',
    description: '链条传动方式，自动化程度高，运行可靠。广泛用于各类工业锅炉。',
    descriptionEn: 'Chain transmission method, high automation, reliable operation. Widely used in various industrial boilers.',
    specs: ['传动方式: 链条传动', '自动化程度: 高', '适用: 各种燃煤锅炉'],
    specsEn: ['Transmission: Chain drive', 'Automation: High', 'Application: Various coal-fired boilers'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80',
  },
  {
    id: 9,
    name: '链带炉排配件-链条',
    nameEn: 'Chain Belt Grate Parts - Chain',
    category: '链带炉排配件',
    categoryEn: 'Chain Belt Grate Parts',
    description: '高强度链条，精密制造，耐磨耐用。',
    descriptionEn: 'High-strength chain, precision manufacturing, wear-resistant and durable.',
    specs: ['材质: 优质合金钢', '强度等级: 高强度', '寿命: ≥60000小时'],
    specsEn: ['Material: High-quality alloy steel', 'Strength grade: High strength', 'Service life: ≥60000 hours'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80',
  },
  {
    id: 10,
    name: '除渣机',
    nameEn: 'Slag Remover',
    category: '除渣机&上煤机',
    categoryEn: 'Slag Remover & Coal Feeder',
    description: '自动化除渣设备，及时清除炉渣，保持炉膛清洁，提高热效率。',
    descriptionEn: 'Automated slag removal equipment, timely removal of slag, keeping furnace clean, improving thermal efficiency.',
    specs: ['类型: 链式/刮板式', '处理能力: 按炉型配套', '自动化程度: 高'],
    specsEn: ['Type: Chain/scraper type', 'Processing capacity: Matching boiler model', 'Automation: High'],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
  },
  {
    id: 11,
    name: '上煤机',
    nameEn: 'Coal Feeder',
    category: '除渣机&上煤机',
    categoryEn: 'Slag Remover & Coal Feeder',
    description: '连续式上煤设备，燃料输送均匀，自动化程度高。',
    descriptionEn: 'Continuous coal feeding equipment, uniform fuel delivery, high automation.',
    specs: ['类型: 皮带/链板式', '输送量: 按需求定制', '特点: 运行平稳'],
    specsEn: ['Type: Belt/chain plate type', 'Conveying capacity: Customized per requirement', 'Feature: Smooth operation'],
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&q=80',
  },
];

function ProductsContent() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || (language === 'zh' ? '全部产品' : 'All Products');
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams, language]);

  const currentCategories = language === 'zh' ? categories.zh : categories.en;
  
  const filteredProducts = activeCategory === (language === 'zh' ? '全部产品' : 'All Products') || !categoryMapping[activeCategory]
    ? products
    : products.filter(p => p.category === categoryMapping[activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.products.title}
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm sticky top-16 lg:top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {currentCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'border-gray-300 hover:border-orange-500 hover:text-orange-500'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200">
                <img
                  src={product.image}
                  alt={`${language === 'zh' ? product.name : product.nameEn}-${language === 'zh' ? product.description : product.descriptionEn}-大连阳光锅炉辅机有限公司`}
                  className="w-full h-full object-cover"
                  tabIndex={0}
                  aria-label={`${language === 'zh' ? product.name : product.nameEn}-${language === 'zh' ? product.description : product.descriptionEn}-大连阳光锅炉辅机有限公司`}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-500 mb-2">
                  {language === 'zh' ? product.category : product.categoryEn}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {language === 'zh' ? product.name : product.nameEn}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {language === 'zh' ? product.description : product.descriptionEn}
                </p>
                <ul className="space-y-1 mb-4">
                  {(language === 'zh' ? product.specs : product.specsEn).map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    {t.products.details}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.products.noProducts}</p>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-orange-500">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {t.products.learnMore}
          </h3>
          <p className="text-white/80 mb-6">
            {t.products.learnMoreDesc}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              {t.products.contactUs}
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
      <FixedSidebar />
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden">
              <Skeleton className="aspect-video" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
