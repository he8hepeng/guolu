"use client";

import Image from "next/image";
import Link from "next/link";

const productCategories = [
  { name: "往复炉排", href: "/products" },
  { name: "往复炉排配件", href: "/products" },
  { name: "鳞片炉排", href: "/products" },
  { name: "鳞片炉排配件", href: "/products" },
  { name: "横梁炉排", href: "/products" },
  { name: "横梁炉排配件", href: "/products" },
  { name: "链带炉排", href: "/products" },
  { name: "链带炉排配件", href: "/products" },
  { name: "除渣机&上煤机", href: "/products" },
];

const featuredProduct = {
  date: "09/15",
  title: "160t/h 往复炉排",
  description: "往复炉排可为1-160t/h的锅炉配套，选用燃料范围更广适用于垃圾、生物质等。炉排整个燃烧面由活动炉排片和固定炉排片组成，两者间隔叠压成阶梯状，在减速机（或液压装置）的带动下使活动炉排片在固定炉排片上做往...",
  image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
};

export default function Products() {
  return (
    <section id="products" className="product-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f7931e] mb-4">产品中心</h2>
          <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto">
            以客户需求和瓦房店炉排、活芯炉排、燃煤炉排、横梁炉排等产品发展理念为驱动力，量身定制选配
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Product categories */}
          <div className="grid grid-cols-3 gap-3">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 text-white text-sm text-center hover:bg-[#f7931e] transition-all"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Featured product */}
          <div className="bg-white/5 backdrop-blur-sm p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="text-[#f7931e] text-sm mb-2">{featuredProduct.date}</div>
                <h3 className="text-2xl font-bold text-[#f7931e] mb-4">{featuredProduct.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {featuredProduct.description}
                </p>
                <button className="px-6 py-2 border border-[#f7931e] text-[#f7931e] text-sm hover:bg-[#f7931e] hover:text-white transition-all">
                  产品详细
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
