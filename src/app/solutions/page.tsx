'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FixedSidebar from '@/components/FixedSidebar';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

const solutions = {
  zh: [
    {
      title: '垃圾焚烧发电',
      description: '针对城市生活垃圾、医疗废物、危险废物等提供专业的焚烧处理解决方案。',
      features: ['高效往复炉排', '智能燃烧控制', '余热回收系统', '环保达标排放'],
      image: 'https://images.unsplash.com/photo-1625812237523-2988f5c8e8d9?w=600&q=80',
    },
    {
      title: '生物质能源',
      description: '利用农林废弃物进行生物质发电供热，实现资源循环利用。',
      features: ['专用生物质炉排', '防结焦设计', '多种燃料适应', '高效燃烧技术'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    },
    {
      title: '工业蒸汽',
      description: '为各类工业企业提供稳定可靠的蒸汽锅炉配套解决方案。',
      features: ['多种炉排类型', '定制化设计', '智能控制系统', '节能优化'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    },
    {
      title: '集中供热',
      description: '城市集中供热系统解决方案，保障居民冬季供暖需求。',
      features: ['大型炉排系统', '稳定运行保障', '远程监控', '维护便利'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
  ],
  en: [
    {
      title: 'Waste Incineration Power Generation',
      description: 'Professional incineration solutions for municipal solid waste, medical waste, and hazardous waste.',
      features: ['High-efficiency reciprocating grate', 'Smart combustion control', 'Waste heat recovery system', 'Environmental compliance'],
      image: 'https://images.unsplash.com/photo-1625812237523-2988f5c8e8d9?w=600&q=80',
    },
    {
      title: 'Biomass Energy',
      description: 'Using agricultural and forestry waste for biomass power generation and heating, achieving resource recycling.',
      features: ['Special biomass grate', 'Anti-coking design', 'Multi-fuel adaptability', 'High-efficiency combustion'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    },
    {
      title: 'Industrial Steam',
      description: 'Providing stable and reliable steam boiler auxiliary solutions for various industrial enterprises.',
      features: ['Multiple grate types', 'Customized design', 'Intelligent control system', 'Energy saving'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    },
    {
      title: 'District Heating',
      description: 'Urban district heating system solutions to ensure residential winter heating needs.',
      features: ['Large grate systems', 'Stable operation', 'Remote monitoring', 'Easy maintenance'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
  ],
};

export default function SolutionsPage() {
  const { t, language } = useLanguage();
  const currentSolutions = language === 'zh' ? solutions.zh : solutions.en;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.solutions.title}
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {currentSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={solution.image}
                    alt={`${solution.title}-${solution.description}-大连阳光锅炉辅机有限公司-生物质往复炉排,链条,横梁炉排,炉排厂家`}
                    className="w-full h-full object-cover"
                    tabIndex={0}
                    aria-label={`${solution.title}-${solution.description}-大连阳光锅炉辅机有限公司-生物质往复炉排,链条,横梁炉排,炉排厂家`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {t.solutions.learnMore}
                    </Button>
                    <Button 
                      className="flex-1 bg-orange-500 hover:bg-orange-600"
                      onClick={() => window.location.href = '/products'}
                    >
                      {language === 'zh' ? '查看产品' : 'View Products'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FixedSidebar />
    </div>
  );
}
