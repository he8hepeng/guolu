"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "大连阳光锅炉辅机厂定制无...",
    description: "大连阳光锅炉辅机厂定制无锡20吨小鳞片炉排发货无锡20吨小鳞片炉排发货1台",
    image: "https://ext.same-assets.com/1241134631/150151896.jpeg",
  },
  {
    id: 2,
    title: "大连阳光炉排厂客户定制广...",
    description: "广东8吨链带发货",
    image: "https://ext.same-assets.com/1241134631/887519797.jpeg",
  },
  {
    id: 3,
    title: "横梁炉排按容量、燃料、结...",
    description: "大连阳光炉排厂（大连阳光锅炉辅机）的横梁炉排，按容量、燃料、结构分...",
    image: "https://ext.same-assets.com/1241134631/2755669732.jpeg",
  },
  {
    id: 4,
    title: "无锡杰能锅炉定制4吨链带炉...",
    description: "大连阳光炉排厂瓦房店链带式炉排炉排可为1-160t/h的锅炉配套，选用燃料范...",
    image: "https://ext.same-assets.com/1241134631/4033081181.jpeg",
  },
  {
    id: 5,
    title: "大连阳光锅炉辅机河南15吨...",
    description: "大连阳光锅炉辅机河南15吨大块炉排发货大连阳关锅炉辅机有限公司是国内...",
    image: "https://ext.same-assets.com/1241134631/2099748783.jpeg",
  },
  {
    id: 6,
    title: "25吨大块炉排改横梁炉排发货",
    description: "大块炉排（大鳞片/大块链条炉排）改横梁炉排，核心是解决大块炉排的结...",
    image: "https://ext.same-assets.com/1241134631/2843298359.jpeg",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">聚焦大连阳光炉排厂</h2>
          <p className="text-gray-500 text-sm">Latest News & Events</p>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="news-card group block bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#f7931e] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#f7931e] mb-3" />
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                <div className="mt-4 text-sm text-gray-600 hover:text-[#f7931e] transition-colors">
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
