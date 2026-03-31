"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideToolbar from "@/components/SideToolbar";

const tabs = [
  { id: "support", name: "技术支持", active: true },
  { id: "download", name: "资料中心", active: false },
  { id: "patent", name: "发明专利", active: false },
];

const articles = [
  {
    id: 1,
    title: "针对往复炉排优化结构",
    description: "往复炉排问题所在：炉排下部活动架驱动连接点直接连接在活动梁上，导致在往复驱动过程中连接点即受水平推拉力也受竖直推拉力，进而在受力点处钢结构产生扭转的剪切力，造成局部应力过大，加之往复行程过程频繁局部产生应力疲劳产生断裂。",
    date: "2021-08-24",
  },
  {
    id: 2,
    title: "锅炉炉排常见故障及解决方案",
    description: "锅炉炉排在运行过程中可能会遇到各种问题，本文将详细介绍常见故障的诊断方法和解决方案，帮助用户更好地维护设备。",
    date: "2021-07-15",
  },
  {
    id: 3,
    title: "生物质炉排燃烧效率提升方法",
    description: "针对生物质燃料的特点，优化炉排设计参数，提高燃烧效率，降低排放，实现绿色环保生产。",
    date: "2021-06-20",
  },
  {
    id: 4,
    title: "横梁炉排维护保养指南",
    description: "定期维护保养是延长横梁炉排使用寿命的关键，本指南详细介绍了日常维护要点和年度检修项目。",
    date: "2021-05-10",
  },
];

// 专利数据 - 第一页
const patentsPage1 = [
  { id: 1, name: "一种链条锅炉逆向螺旋式布煤装置(发明)", code: "ZL201110446241.5", type: "专利登记簿副本" },
  { id: 2, name: "一种铸件落砂用六角筛", code: "ZL202021301698.8", type: "专利登记簿副本" },
  { id: 3, name: "一种新型铸件毛坯分离设备", code: "ZL202223036057.6", type: "专利登记簿副本" },
  { id: 4, name: "一种数控切割机床", code: "ZL202222194880.3", type: "专利登记簿副本" },
  { id: 5, name: "一种不易结焦的炉排炉烟道", code: "ZL202122142763.8", type: "专利登记簿副本" },
  { id: 6, name: "一种列间交错步进式链条炉排(发明)", code: "ZL202111615510.6", type: "专利登记簿副本" },
  { id: 7, name: "一种行间交错步进式链条炉排(发明)", code: "ZL202111618821.8", type: "专利登记簿副本" },
  { id: 8, name: "一种串水冷却轴", code: "ZL202323059881.8", type: "实用新型专利证书" },
  { id: 9, name: "一种防反烧双向螺旋送料器", code: "ZL202220863470.0", type: "实用新型专利证书" },
  { id: 10, name: "一种新型垃圾焚烧炉排(发明)", code: "201911363886.5", type: "发明专利证书" },
  { id: 11, name: "一种节省空间的垃圾热解炉", code: "ZL202120817930.1", type: "实用新型专利证书" },
  { id: 12, name: "一种混煤分层一体机", code: "ZL202120817092.8", type: "实用新型专利证书" },
  { id: 13, name: "一种防反烧生物质颗粒料斗", code: "ZL202022809098.9", type: "实用新型专利证书" },
  { id: 14, name: "一种机械铸造加工中打孔用固定机构", code: "ZL202021761955.6", type: "实用新型专利证书" },
  { id: 15, name: "一种环保离心铸造装置", code: "ZL202021525980.4", type: "实用新型专利证书" },
  { id: 16, name: "一种渐缩式进风风室(发明)", code: "ZL201210108522.4", type: "发明专利证书" },
  { id: 17, name: "新型往复炉排(发明)", code: "ZL201210054101.8", type: "发明专利证书" },
  { id: 18, name: "新型垃圾焚烧炉", code: "ZL201520556846.3", type: "实用新型专利证书" },
];

// 专利数据 - 第二页
const patentsPage2 = [
  { id: 19, name: "新型炉排片", code: "ZL201521124365.1", type: "实用新型专利证书" },
  { id: 20, name: "多阀门式进风炉排", code: "", type: "实用新型专利" },
  { id: 21, name: "反烧生物质颗粒煤斗", code: "", type: "实用新型专利证书" },
  { id: 22, name: "新型往复炉排", code: "", type: "发明专利" },
  { id: 23, name: "发明专利证书", code: "", type: "发明专利证书" },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("support");
  const [patentPage, setPatentPage] = useState(1);

  const currentPatents = patentPage === 1 ? patentsPage1 : patentsPage2;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner */}
      <section className="pt-24 relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/90 to-[#0d47a1]/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">质量管理体系认证</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#f7931e] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-[#f7931e]">首页</Link>
              <span className="mx-2">/</span>
              <span>技术支持</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeTab === "support" && (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href="#"
                  className="block bg-white border border-gray-200 p-6 hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#f7931e] transition-colors mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                    <div className="ml-6 text-right flex-shrink-0">
                      <div className="text-sm text-gray-400">{article.date.split("-")[0]}</div>
                      <div className="text-2xl font-bold text-gray-300">
                        {article.date.split("-")[1]}-{article.date.split("-")[2]}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <button className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#f7931e]">
                  &lt;
                </button>
                <button className="px-3 py-1 bg-[#1a237e] text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#f7931e]">
                  &gt;
                </button>
                <span className="ml-4 text-sm text-gray-500">
                  前往 <input type="text" className="w-12 border border-gray-300 px-2 py-1 text-center" /> 页
                </span>
              </div>
            </div>
          )}

          {activeTab === "download" && (
            <div className="bg-white border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">资料中心</h3>
              <p className="text-gray-600">产品手册、技术文档等资料下载</p>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {["产品目录手册", "技术规格说明", "安装维护指南"].map((item, i) => (
                  <div key={i} className="border border-gray-200 p-6 hover:border-[#f7931e] transition-colors">
                    <div className="w-12 h-12 bg-[#f7931e]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-[#f7931e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">{item}</h4>
                    <button className="mt-4 text-sm text-[#f7931e] hover:underline">下载</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "patent" && (
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">发明专利</h3>

              {/* Patents Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPatents.map((patent) => (
                  <div
                    key={patent.id}
                    className="border border-gray-200 bg-white hover:shadow-lg transition-all overflow-hidden group"
                  >
                    {/* Patent Certificate Image */}
                    <div className="aspect-[3/4] bg-gradient-to-b from-orange-50 to-orange-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="text-blue-800 font-bold text-sm">国家知识产权局</div>
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                        </div>

                        {/* Certificate Type */}
                        <div className="text-center mb-4">
                          <h4 className="text-xl font-bold text-gray-800">{patent.type}</h4>
                        </div>

                        {/* Patent Info */}
                        <div className="text-center text-sm text-gray-600 space-y-1 mb-4">
                          {patent.code && (
                            <p className="font-mono text-xs">专利号: {patent.code}</p>
                          )}
                        </div>

                        {/* Decorative seal */}
                        <div className="absolute bottom-6 right-6">
                          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* CNIPA watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                          <span className="text-6xl font-bold text-gray-900 transform -rotate-45">CNIPA</span>
                        </div>
                      </div>
                    </div>

                    {/* Patent Name */}
                    <div className="p-4 text-center bg-white">
                      <p className="text-sm text-gray-800 font-medium line-clamp-2">
                        {patent.name}
                        {patent.code && <span className="text-gray-500 block text-xs mt-1">{patent.code}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPatentPage(1)}
                  className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#f7931e] disabled:opacity-50"
                  disabled={patentPage === 1}
                >
                  &lt;
                </button>
                <button
                  onClick={() => setPatentPage(1)}
                  className={`px-3 py-1 ${patentPage === 1 ? 'bg-[#1a237e] text-white' : 'border border-gray-300 text-gray-500 hover:border-[#f7931e]'}`}
                >
                  1
                </button>
                <button
                  onClick={() => setPatentPage(2)}
                  className={`px-3 py-1 ${patentPage === 2 ? 'bg-[#1a237e] text-white' : 'border border-gray-300 text-gray-500 hover:border-[#f7931e]'}`}
                >
                  2
                </button>
                <button
                  onClick={() => setPatentPage(2)}
                  className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#f7931e] disabled:opacity-50"
                  disabled={patentPage === 2}
                >
                  &gt;
                </button>
                <span className="ml-4 text-sm text-gray-500">
                  前往 <input
                    type="text"
                    className="w-12 border border-gray-300 px-2 py-1 text-center"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = parseInt((e.target as HTMLInputElement).value);
                        if (val === 1 || val === 2) setPatentPage(val);
                      }
                    }}
                  /> 页
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <SideToolbar />
    </main>
  );
}
