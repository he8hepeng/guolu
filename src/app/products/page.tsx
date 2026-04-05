"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideToolbar from "@/components/SideToolbar";

// 产品分类
const categories = [
  { id: "wangfu", name: "往复炉排" },
  { id: "wangfu-parts", name: "往复炉排配件" },
  { id: "linpian", name: "鳞片炉排" },
  { id: "linpian-parts", name: "鳞片炉排配件" },
  { id: "hengliang", name: "横梁炉排" },
  { id: "hengliang-parts", name: "横梁炉排配件" },
  { id: "liandai", name: "链带炉排" },
  { id: "liandai-parts", name: "链带炉排配件" },
  { id: "chuzha", name: "除渣机&上煤机" },
  { id: "laji", name: "垃圾焚烧炉" },
];

// 往复炉排产品
const wangfuProducts = [
  { id: 1, name: "160t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/223af2a9-442c-40e2-8511-fe57e6e7d065.jpg" },
  { id: 2, name: "100t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/2201101d-243a-44e6-b8f1-ae66f1427197.jpg" },
  { id: 3, name: "65t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/2f89ba4e-e744-4d04-8513-650f8ce128a9.jpg" },
  { id: 4, name: "60t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/e3882b4e-b878-4eea-8add-b0abe7c8463e.jpg" },
  { id: 5, name: "45t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/f1db5e09-51e5-4e99-bf82-5c9fb7eca3c9.jpg" },
  { id: 6, name: "40t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/bbc9339f-4cc4-4777-aa46-1e1fb869f2b4.jpg" },
  { id: 7, name: "35t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/7824e9a8-5cfc-4dae-89c8-9cb8f04c4d16.jpg" },
  { id: 8, name: "30t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/4e4df63b-544b-402f-b3e9-c6d68451e51d.jpg" },
  { id: 9, name: "25t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/a59d8bcf-9736-4a11-a85a-240b59977af6.jpg" },
  { id: 10, name: "20t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/d7b84c90-7eb6-46e5-b4e8-5cbc73b7c028.jpg" },
  { id: 11, name: "15t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/e70ef691-fe81-43c5-8952-25cc7a21d011.jpg" },
  { id: 12, name: "10t/h 往复炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/c6f8c034-b7e0-4f1c-a271-dc2f0fa3558d.jpg" },
];

// 鳞片炉排产品
const linpianProducts = [
  { id: 1, name: "65t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/42b18421-facf-472f-b04b-a41e09dd2c19.jpg" },
  { id: 2, name: "60t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/eec6d3b9-8a37-41ac-a00c-dca30f869f87.jpg" },
  { id: 3, name: "45t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/3e803fe1-84b4-40f3-b1ad-96e50c5f65d7.jpg" },
  { id: 4, name: "40t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/5f880da8-0875-4821-8311-07350ae8548d.jpg" },
  { id: 5, name: "35t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/d6fadc31-b003-4d66-9b80-a3f928644522.jpg" },
  { id: 6, name: "30t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/32383a59-9d74-48ed-a3d7-10b0e76a53d0.jpg" },
  { id: 7, name: "25t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/dac2d744-d9be-4898-bf45-7f16e82402b5.jpg" },
  { id: 8, name: "20t/h 鳞片炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/1e029352-6bd0-4316-9893-75535550f79d.jpg" },
];

// 横梁炉排产品
const hengliangProducts = [
  { id: 1, name: "160t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/a5558590-438f-44bd-8627-47272fd3af95.jpg" },
  { id: 2, name: "130t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/f6b06b63-3a3c-49dc-88c4-24f9a3904ca2.jpg" },
  { id: 3, name: "100t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/f826a76c-37b6-4206-b4bf-7162f397ed95.jpg" },
  { id: 4, name: "80t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/a08eba89-f35f-4be8-b591-934fdf84c923.jpg" },
  { id: 5, name: "65t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/8cbed208-4b66-4cc8-a761-01b575c20e1e.jpg" },
  { id: 6, name: "45t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/c8a13a2f-af8d-4568-9917-4abc7ea54749.jpg" },
  { id: 7, name: "40t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/1de694e2-1f33-4d18-b85c-670ef6738557.jpg" },
  { id: 8, name: "35t/h 横梁炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/c56ed8b6-810c-4ef1-adfe-ad3ccf6db341.jpg" },
];

// 链带炉排产品
const liandaiProducts = [
  { id: 1, name: "20t/h 链带炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/d7b84c90-7eb6-46e5-b4e8-5cbc73b7c028.jpg" },
  { id: 2, name: "15t/h 链带炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/e70ef691-fe81-43c5-8952-25cc7a21d011.jpg" },
  { id: 3, name: "10t/h 链带炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/c6f8c034-b7e0-4f1c-a271-dc2f0fa3558d.jpg" },
  { id: 4, name: "8t/h 链带炉排", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/4983073b-5008-434b-a67f-2b71e148ea3a.jpg" },
];

// 配件产品
const partsProducts = [
  { id: 1, name: "往复中片 T片", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/223af2a9-442c-40e2-8511-fe57e6e7d065.jpg" },
  { id: 2, name: "往复中片 S片", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/2201101d-243a-44e6-b8f1-ae66f1427197.jpg" },
  { id: 3, name: "大鳞片链节", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/42b18421-facf-472f-b04b-a41e09dd2c19.jpg" },
  { id: 4, name: "大鳞片左夹板", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/eec6d3b9-8a37-41ac-a00c-dca30f869f87.jpg" },
  { id: 5, name: "横梁链轴", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/a5558590-438f-44bd-8627-47272fd3af95.jpg" },
  { id: 6, name: "横梁链块", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/f6b06b63-3a3c-49dc-88c4-24f9a3904ca2.jpg" },
];

// 除渣机&上煤机
const chuzhaProducts = [
  { id: 1, name: "10t/h 上煤机", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/223af2a9-442c-40e2-8511-fe57e6e7d065.jpg" },
  { id: 2, name: "4t/h 上煤机", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/2201101d-243a-44e6-b8f1-ae66f1427197.jpg" },
  { id: 3, name: "45t/h 除渣机", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/a5558590-438f-44bd-8627-47272fd3af95.jpg" },
  { id: 4, name: "15-20t/h 生物质给料机", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2022072919102987123/cms/image/f6b06b63-3a3c-49dc-88c4-24f9a3904ca2.jpg" },
];

// 分类描述
const categoryDescriptions: Record<string, { title: string; desc: string; capacity: string }> = {
  wangfu: {
    title: "往复炉排",
    desc: "往复炉排可为1-160t/h的锅炉配套，选用燃料范围更广适用于垃圾、生物质等。",
    capacity: "1-160t/h",
  },
  linpian: {
    title: "鳞片炉排",
    desc: "鳞片炉排适用于蒸发量65吨/小时以下的锅炉，是中小型锅炉的理想选择。",
    capacity: "2-65t/h",
  },
  hengliang: {
    title: "横梁炉排",
    desc: "10-200t/h横梁式链条炉排是一种机械化的、结构紧凑、技术先进的层燃设备。",
    capacity: "10-200t/h",
  },
  liandai: {
    title: "链带炉排",
    desc: "链带炉排适用于1-30t/h锅炉配套，结构简单，运行可靠。",
    capacity: "1-30t/h",
  },
  chuzha: {
    title: "除渣机&上煤机",
    desc: "专业的除渣机和上煤机设备，提高锅炉运行效率。",
    capacity: "多规格",
  },
  laji: {
    title: "垃圾焚烧炉",
    desc: "专业垃圾焚烧炉排设备，环保高效。",
    capacity: "定制",
  },
};

// 产品详情弹窗组件
function ProductModal({
  product,
  onClose,
  onQuote
}: {
  product: { name: string; image: string } | null;
  onClose: () => void;
  onQuote: () => void;
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white flex items-center justify-center hover:bg-black/70 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="aspect-video bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
          <div className="space-y-3 text-gray-600 text-sm mb-6">
            <p><strong>产品特点：</strong>采用优质耐热钢材料，经过精密加工制造</p>
            <p><strong>适用范围：</strong>适用于各类锅炉配套使用</p>
            <p><strong>技术优势：</strong>运行平稳、燃烧效率高、使用寿命长</p>
            <p><strong>售后服务：</strong>提供专业安装指导和售后技术支持</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onQuote}
              className="flex-1 py-3 bg-[#f7931e] text-white font-medium hover:bg-[#e5851a] transition-colors"
            >
              获取报价
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 报价弹窗组件
function QuoteModal({
  product,
  onClose
}: {
  product: { name: string } | null;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  if (!product) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          company,
          product: product.name,
          inquiry,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data?.error || "提交失败，请稍后再试。");
        return;
      }

      setStatus("success");
      setStatusMessage("询价提交成功，我们会尽快与您联系。" );
      setName("");
      setPhone("");
      setCompany("");
      setEmail("");
      setInquiry("");
    } catch (error) {
      setStatus("error");
      setStatusMessage("网络错误，请稍后重试。");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">获取报价</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4 p-3 bg-gray-50 text-sm">
          <strong>咨询产品：</strong>{product.name}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名 *</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f7931e]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">联系电话 *</label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f7931e]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">邮箱 *</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f7931e]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">公司名称</label>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f7931e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">需求说明 *</label>
            <textarea
              rows={3}
              value={inquiry}
              onChange={(event) => setInquiry(event.target.value)}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f7931e]"
              required
            />
          </div>
          {statusMessage && (
            <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
              {statusMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-[#f7931e] text-white font-medium hover:bg-[#e5851a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "提交中..." : "提交询价"}
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500 text-center">
          或直接拨打：<a href="tel:15840905233" className="text-[#f7931e]">15840905233</a>
        </p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("wangfu");
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);
  const [quoteProduct, setQuoteProduct] = useState<{ name: string } | null>(null);

  // 根据分类获取产品列表
  const getProducts = () => {
    switch (activeCategory) {
      case "wangfu": return wangfuProducts;
      case "wangfu-parts": return partsProducts.slice(0, 2);
      case "linpian": return linpianProducts;
      case "linpian-parts": return partsProducts.slice(2, 4);
      case "hengliang": return hengliangProducts;
      case "hengliang-parts": return partsProducts.slice(4, 6);
      case "liandai": return liandaiProducts;
      case "liandai-parts": return partsProducts;
      case "chuzha": return chuzhaProducts;
      case "laji": return wangfuProducts.slice(0, 4);
      default: return wangfuProducts;
    }
  };

  const currentProducts = getProducts();
  const categoryInfo = categoryDescriptions[activeCategory.replace("-parts", "")] || categoryDescriptions.wangfu;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner */}
      <section className="pt-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {wangfuProducts.slice(0, 4).map((product, i) => (
              <div key={i} className="flex-shrink-0 w-56 h-36 bg-gray-700 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={224}
                  height={144}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-[#1a237e] text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-end text-sm">
          <Link href="/" className="hover:text-[#f7931e]">首页</Link>
          <span className="mx-2">/</span>
          <span>产品中心</span>
        </div>
      </section>

      {/* Category tabs */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-4 text-center border text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#1a237e] text-white border-[#1a237e]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#1a237e]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter info */}
      <section className="bg-[#1a237e] text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm"><strong>锅炉容量：</strong>{categoryInfo.capacity}</p>
          <p className="text-sm mt-1"><strong>使用燃料：</strong>煤、生物质、垃圾等</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 group hover:shadow-lg transition-all">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-900 mb-3 text-sm">{product.name}</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2 bg-[#1a237e] text-white text-sm hover:bg-[#0d47a1] transition-colors"
                    >
                      了解详情
                    </button>
                    <button
                      onClick={() => setQuoteProduct(product)}
                      className="w-full py-2 bg-[#1a237e] text-white text-sm hover:bg-[#0d47a1] transition-colors"
                    >
                      获取报价
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="px-3 py-1 border border-gray-300 text-gray-400">&lt;</button>
            <button className="px-3 py-1 bg-[#1a237e] text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#1a237e]">2</button>
            <button className="px-3 py-1 border border-gray-300 text-gray-500 hover:border-[#1a237e]">&gt;</button>
          </div>
        </div>
      </section>

      <Footer />
      <SideToolbar />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={() => {
          setQuoteProduct(selectedProduct);
          setSelectedProduct(null);
        }}
      />
      <QuoteModal
        product={quoteProduct}
        onClose={() => setQuoteProduct(null)}
      />
    </main>
  );
}
