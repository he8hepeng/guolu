import { create } from 'zustand';

export type Locale = 'zh' | 'en';

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: 'zh',
  setLocale: (locale) => set({ locale }),
  toggleLocale: () => set((state) => ({ locale: state.locale === 'zh' ? 'en' : 'zh' })),
}));

export const translations = {
  zh: {
    // Header
    phone: '15840905233',
    nav: {
      home: '网站首页',
      about: '企业概况',
      products: '产品中心',
      solutions: '解决方案',
      support: '技术专利',
      news: '新闻动态',
      contact: '联系我们',
      lang: 'EN',
    },
    buttons: {
      productFilter: '产品筛选',
      inquiry: '留言咨询',
      learnMore: 'Learn More +',
      more: 'MORE +',
      viewDetails: '产品详细',
      readMore: 'Read More',
      aboutUs: '了解我们',
      submit: '提交留言',
    },
    // Hero
    hero: {
      title: '专业锅炉配件制造商',
      subtitle: '27年行业经验，值得信赖',
    },
    // Services
    services: {
      title: '炉排改造',
      items: ['炉排改造', '成套锅炉设备供应与...', '锅炉辅机维修', '锅炉工程总包'],
    },
    // Products
    products: {
      title: '产品中心',
      subtitle: '以客户需求和瓦房店炉排、活芯炉排、燃煤炉排、横梁炉排等产品发展理念为驱动力，量身定制选配',
      categories: [
        '往复炉排', '往复炉排配件', '鳞片炉排',
        '鳞片炉排配件', '横梁炉排', '横梁炉排配件',
        '链带炉排', '链带炉排配件', '除渣机&上煤机',
      ],
      featured: {
        date: '09/15',
        title: '160t/h 往复炉排',
        description: '往复炉排可为1-160t/h的锅炉配套，选用燃料范围更广适用于垃圾、生物质等。炉排整个燃烧面由活动炉排片和固定炉排片组成，两者间隔叠压成阶梯状，在减速机（或液压装置）的带动下使活动炉排片在固定炉排片上做往...',
      },
    },
    // News
    news: {
      title: '聚焦大连阳光炉排厂',
      subtitle: 'Latest News & Events',
    },
    // About
    about: {
      year: '1998',
      title: '大连阳光锅炉辅机有限公司',
      description: '1998年成立，经过30余年的发展，现有员工800多人，占地面积100多万平方米，厂房面积60万平方米，年产各类炉排5万余吨。公司拥有先进的生产设备和完善的质量管理体系，产品远销国内外二十多个国家和地区。',
      stats: {
        years: '年行业经验',
        clients: '合作客户',
        sales: '产品销量',
        cases: '服务案例',
      },
    },
    // Service Support
    serviceSupport: {
      title: '服务支持',
      subtitle: '精诚服务，售后无忧',
      description: '7X24小时响应，8小时内技术人员到位。如产品出出现质量问题，厂家负责包退、包换、包责修理。保修期内提供免费的瓦房店炉排、炉排片、横梁炉排、链条炉 排等炉排及配件维修服务，响应客户的改造、升级需求，终身保障。',
      items: ['国内市场', '国际市场', '产品留言咨询'],
    },
    // Footer
    footer: {
      productTitle: '大连阳光炉排产品分类',
      contactTitle: '业务详情咨询',
      scanToAdd: '扫码添加微信',
      copyright: '版权所有 © 2025 大连阳光锅炉辅机有限公司',
      techSupport: '技术支持: Marie',
      hotline: '服务热线：15840905233',
      address: '地址：大连市甘井子区姚家工业区111号',
      tags: '页面Tags：',
    },
    // Contact Page
    contact: {
      title: '联系我们',
      tabs: {
        contact: '联系方式',
        message: '留言咨询',
      },
      breadcrumb: {
        home: '首页',
        contact: '联系我们',
      },
      company: '大连阳光锅炉辅机有限公司',
      addresses: [
        '大连市甘井子区姚家工业区111号（总部）',
        '大连市瓦房店开发区（分部）',
      ],
      phones: [
        '+86 15840905233（销售一部）',
        '+86 15840905233（销售二部）',
      ],
      customerService: '客服联系',
      wechat: {
        title: '微信服务号',
        weekly: '每周一期内容',
        info: '随时查看产品信息，行业知识',
        company: '大连阳光锅炉辅机有限公司',
      },
      form: {
        title: '留言咨询',
        name: '您的姓名 *',
        namePlaceholder: '请输入您的姓名',
        phone: '联系电话 *',
        phonePlaceholder: '请输入您的电话',
        email: '电子邮箱',
        emailPlaceholder: '请输入您的邮箱',
        message: '留言内容 *',
        messagePlaceholder: '请输入您的留言内容',
        submit: '提交留言',
      },
    },
    // Sidebar
    sidebar: {
      contact: '联系',
      scan: '扫码咨询',
    },
  },
  en: {
    // Header
    phone: '15840905233',
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      solutions: 'Solutions',
      support: 'Tech & Patents',
      news: 'News',
      contact: 'Contact',
      lang: '中文',
    },
    buttons: {
      productFilter: 'Product Filter',
      inquiry: 'Inquiry',
      learnMore: 'Learn More +',
      more: 'MORE +',
      viewDetails: 'View Details',
      readMore: 'Read More',
      aboutUs: 'About Us',
      submit: 'Submit',
    },
    // Hero
    hero: {
      title: 'Professional Boiler Parts Manufacturer',
      subtitle: '27 Years of Industry Experience, Trustworthy',
    },
    // Services
    services: {
      title: 'Grate Modification',
      items: ['Grate Modification', 'Complete Boiler Equipment...', 'Boiler Auxiliary Repair', 'Boiler Engineering EPC'],
    },
    // Products
    products: {
      title: 'Products',
      subtitle: 'Driven by customer needs and product development concepts of Wafangdian grates, living core grates, coal-fired grates, beam grates, etc., customized selection',
      categories: [
        'Reciprocating Grate', 'Reciprocating Parts', 'Scale Grate',
        'Scale Grate Parts', 'Beam Grate', 'Beam Grate Parts',
        'Chain Grate', 'Chain Grate Parts', 'Slag Remover & Coal Feeder',
      ],
      featured: {
        date: '09/15',
        title: '160t/h Reciprocating Grate',
        description: 'Reciprocating grates can be matched with 1-160t/h boilers, with a wider range of fuel selection suitable for waste, biomass, etc. The entire combustion surface of the grate is composed of movable grate pieces and fixed grate pieces...',
      },
    },
    // News
    news: {
      title: 'Focus on Dalian Sunshine Grate Factory',
      subtitle: 'Latest News & Events',
    },
    // About
    about: {
      year: '1998',
      title: 'Dalian Sunshine Boiler Auxiliary Co., Ltd.',
      description: 'Founded in 1998, after more than 30 years of development, we now have more than 800 employees, covering an area of more than 1 million square meters, with a factory area of 600,000 square meters, producing more than 50,000 tons of various grates annually. The company has advanced production equipment and a complete quality management system, with products exported to more than 20 countries and regions.',
      stats: {
        years: 'Years Experience',
        clients: 'Clients',
        sales: 'Products Sold',
        cases: 'Service Cases',
      },
    },
    // Service Support
    serviceSupport: {
      title: 'Service Support',
      subtitle: 'Sincere Service, Worry-free After-sales',
      description: '7x24 hour response, technicians on-site within 8 hours. If product quality issues occur, the manufacturer is responsible for returns, exchanges, and repairs. Free grate and accessory maintenance services during warranty period, responding to customer modification and upgrade needs, lifetime guarantee.',
      items: ['Domestic Market', 'International Market', 'Product Inquiry'],
    },
    // Footer
    footer: {
      productTitle: 'Dalian Sunshine Grate Product Categories',
      contactTitle: 'Business Consultation',
      scanToAdd: 'Scan to Add WeChat',
      copyright: 'Copyright © 2025 Dalian Sunshine Boiler Auxiliary Co., Ltd.',
      techSupport: 'Technical Support: kuwang',
      hotline: 'Hotline: 15840905233',
      address: 'Address: No.111 Yaojia Industrial Zone, Ganjingzi District, Dalian',
      tags: 'Page Tags:',
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      tabs: {
        contact: 'Contact Info',
        message: 'Leave a Message',
      },
      breadcrumb: {
        home: 'Home',
        contact: 'Contact Us',
      },
      company: 'Dalian Sunshine Boiler Auxiliary Co., Ltd.',
      addresses: [
        'No.111 Yaojia Industrial Zone, Ganjingzi District, Dalian (Headquarters)',
        'Wafangdian Development Zone, Dalian (Branch)',
      ],
      phones: [
        '+86 15840905233 (Sales Dept. 1)',
        '+86 15840905233 (Sales Dept. 2)',
      ],
      customerService: 'Customer Service',
      wechat: {
        title: 'WeChat Service Account',
        weekly: 'Weekly Updates',
        info: 'Check product info and industry knowledge anytime',
        company: 'Dalian Sunshine Boiler Auxiliary Co., Ltd.',
      },
      form: {
        title: 'Leave a Message',
        name: 'Your Name *',
        namePlaceholder: 'Enter your name',
        phone: 'Phone Number *',
        phonePlaceholder: 'Enter your phone number',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        message: 'Message *',
        messagePlaceholder: 'Enter your message',
        submit: 'Submit',
      },
    },
    // Sidebar
    sidebar: {
      contact: 'Contact',
      scan: 'Scan to Consult',
    },
  },
};

export function useTranslation() {
  const { locale } = useLocaleStore();
  return translations[locale];
}
