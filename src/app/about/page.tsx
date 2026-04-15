'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FixedSidebar from '@/components/FixedSidebar';
import About from '@/components/About';
import { useLanguage } from '@/i18n/LanguageProvider';

const milestones = {
  zh: [
    { year: '1998', title: '公司成立', desc: '大连阳光锅炉辅机有限公司正式成立，开启专业化锅炉辅机制造之路。' },
    { year: '2005', title: '规模扩张', desc: '完成厂房扩建，形成年产2万吨炉排生产能力，成为国内主要炉排制造商之一。' },
    { year: '2010', title: '技术升级', desc: '引进先进生产设备和技术，建立完善的质量管理体系，产品性能达到国际先进水平。' },
    { year: '2020', title: '全球化布局', desc: '产品远销海外20多个国家和地区，建立全球销售与服务网络。' },
  ],
  en: [
    { year: '1998', title: 'Company Founded', desc: 'Dalian Sungrate Boiler Auxiliary Co., Ltd. was officially established, opening the path of professional boiler auxiliary manufacturing.' },
    { year: '2005', title: 'Scale Expansion', desc: 'Completed factory expansion, forming an annual production capacity of 20,000 tons of grates, becoming one of the major grate manufacturers in China.' },
    { year: '2010', title: 'Technology Upgrade', desc: 'Introduced advanced production equipment and technology, established a complete quality management system, product performance reached international advanced level.' },
    { year: '2020', title: 'Global Layout', desc: 'Products exported to over 20 countries and regions worldwide, establishing a global sales and service network.' },
  ],
};

const certifications = {
  zh: [
    'ISO9001质量管理体系认证',
    'ISO14001环境管理体系认证',
    '职业健康安全管理体系认证',
    'CE产品认证',
  ],
  en: [
    'ISO9001 Quality Management System',
    'ISO14001 Environmental Management System',
    'Occupational Health and Safety Management',
    'CE Product Certification',
  ],
};

export default function AboutPage() {
  const { t, language } = useLanguage();
  const currentMilestones = language === 'zh' ? milestones.zh : milestones.en;
  const currentCerts = language === 'zh' ? certifications.zh : certifications.en;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.aboutPage.title}
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            {t.aboutPage.subtitle}
          </p>
        </div>
      </div>

      <About />

      {/* Company History */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.aboutPage.history.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.aboutPage.history.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {currentMilestones.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-orange-500">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-orange-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.aboutPage.certifications.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.aboutPage.certifications.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {currentCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
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
