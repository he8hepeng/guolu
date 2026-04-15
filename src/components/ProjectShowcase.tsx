'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/i18n/LanguageProvider';

interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  details: string;
  detailsEn: string;
  specs: string[];
  specsEn: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '垃圾焚烧发电项目',
    titleEn: 'Waste Incineration Power Project',
    description: '大型垃圾焚烧发电厂炉排系统解决方案',
    descriptionEn: 'Large-scale waste incineration power plant grate system solution',
    image: 'https://images.unsplash.com/photo-1625812237523-2988f5c8e8d9?w=600&q=80',
    details: '采用自主研发的高效往复炉排，适用于城市生活垃圾焚烧处理，燃烧效率高达85%以上，余热回收利用率显著提升。系统配备智能燃烧控制系统，实现自动化运行。',
    detailsEn: 'Using self-developed high-efficiency reciprocating grates, suitable for municipal solid waste incineration treatment, combustion efficiency up to 85%+, significant improvement in waste heat recovery rate. System equipped with intelligent combustion control system for automated operation.',
    specs: ['处理能力: 500-1000吨/天', '燃烧效率: ≥85%', '使用寿命: ≥80000小时'],
    specsEn: ['Processing capacity: 500-1000 tons/day', 'Combustion efficiency: ≥85%', 'Service life: ≥80000 hours'],
  },
  {
    id: 2,
    title: '生物质能源项目',
    titleEn: 'Biomass Energy Project',
    description: '生物质发电锅炉辅机系统',
    descriptionEn: 'Biomass power generation boiler auxiliary system',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    details: '专门针对农林废弃物设计的生物质炉排系统，适用于稻壳、秸秆、木屑等生物质燃料。独特的防结焦设计确保长期稳定运行。',
    detailsEn: 'Specially designed biomass grate system for agricultural and forestry waste, suitable for rice husk, straw, wood chips and other biomass fuels. Unique anti-coking design ensures long-term stable operation.',
    specs: ['燃料适应性: 多种生物质', '防结焦设计', '自动化程度: 高'],
    specsEn: ['Fuel adaptability: Multiple biomass', 'Anti-coking design', 'Automation level: High'],
  },
  {
    id: 3,
    title: '工业蒸汽锅炉项目',
    titleEn: 'Industrial Steam Boiler Project',
    description: '工业生产用蒸汽锅炉辅机配套',
    descriptionEn: 'Steam boiler auxiliary for industrial production',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    details: '为各类工业企业提供蒸汽锅炉配套炉排系统，广泛应用于纺织、化工、食品、制药等行业。产品具有结构紧凑、热效率高、运行稳定等特点。',
    detailsEn: 'Providing steam boiler auxiliary grate systems for various industrial enterprises, widely used in textile, chemical, food, pharmaceutical and other industries. Products feature compact structure, high thermal efficiency, stable operation.',
    specs: ['蒸汽产量: 1-100吨/小时', '热效率: ≥80%', '自动化控制'],
    specsEn: ['Steam output: 1-100 tons/hour', 'Thermal efficiency: ≥80%', 'Automated control'],
  },
  {
    id: 4,
    title: '供热供暖项目',
    titleEn: 'District Heating Project',
    description: '城市集中供热锅炉辅机系统',
    descriptionEn: 'Urban district heating boiler auxiliary system',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    details: '城市集中供热项目专用炉排系统，具备出色的调节性能和稳定性，有效保障冬季供暖需求。产品遍布全国多个省市自治区。',
    detailsEn: 'Special grate system for urban district heating projects, with excellent regulation performance and stability, effectively ensuring winter heating needs. Products are distributed across multiple provinces and cities nationwide.',
    specs: ['供暖面积: 可达数百万平米', '调节范围: 25%-110%', '环保达标'],
    specsEn: ['Heating area: Up to millions of sqm', 'Regulation range: 25%-110%', 'Environmental compliance'],
  },
  {
    id: 5,
    title: '危废处理项目',
    titleEn: 'Hazardous Waste Treatment Project',
    description: '危险废物焚烧处理系统',
    descriptionEn: 'Hazardous waste incineration treatment system',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
    details: '专业处理医疗废物、化工危险废物等，采用特殊材料和结构设计，确保危险废物安全、高效、无害化处理。',
    detailsEn: 'Professional treatment of medical waste, chemical hazardous waste, etc., using special materials and structural design to ensure safe, efficient, and harmless treatment of hazardous waste.',
    specs: ['处理温度: ≥1100℃', '符合国家标准', '全程监控'],
    specsEn: ['Treatment temperature: ≥1100℃', 'Compliant with national standards', 'Full-process monitoring'],
  },
  {
    id: 6,
    title: '海外出口项目',
    titleEn: 'Overseas Export Project',
    description: '出口东南亚、中东等地区锅炉项目',
    descriptionEn: 'Boiler projects exported to Southeast Asia, Middle East and other regions',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80',
    details: '公司产品远销海外20多个国家和地区，包括越南、印尼、泰国、沙特阿拉伯、阿联酋等，提供全方位技术支持和服务。',
    detailsEn: 'Company products are exported to over 20 countries and regions worldwide, including Vietnam, Indonesia, Thailand, Saudi Arabia, UAE, etc., providing full-range technical support and services.',
    specs: ['出口国家: 20+', '国际认证', '本地化服务'],
    specsEn: ['Export countries: 20+', 'International certifications', 'Localized service'],
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${language === 'zh' ? project.title : project.titleEn}-${language === 'zh' ? project.description : project.descriptionEn}-大连阳光锅炉辅机有限公司-生物质往复炉排,链条,横梁炉排,炉排厂家`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  tabIndex={0}
                  aria-label={`${language === 'zh' ? project.title : project.titleEn}-${language === 'zh' ? project.description : project.descriptionEn}-大连阳光锅炉辅机有限公司-生物质往复炉排,链条,横梁炉排,炉排厂家`}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {language === 'zh' ? project.title : project.titleEn}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {language === 'zh' ? project.description : project.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {t.projects.needMore}
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            {t.projects.needMoreDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.projects.phone}
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.projects.email}
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedProject && (language === 'zh' ? selectedProject.title : selectedProject.titleEn)}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={language === 'zh' ? selectedProject.title : selectedProject.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === 'zh' ? '项目详情' : 'Project Details'}
                </h4>
                <p className="text-gray-600">
                  {language === 'zh' ? selectedProject.details : selectedProject.detailsEn}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === 'zh' ? '技术参数' : 'Technical Specifications'}
                </h4>
                <ul className="space-y-2">
                  {(language === 'zh' ? selectedProject.specs : selectedProject.specsEn).map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  {language === 'zh' ? '立即咨询' : 'Contact Now'}
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
