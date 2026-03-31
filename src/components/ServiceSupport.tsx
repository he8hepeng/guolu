"use client";

import Link from "next/link";

const serviceLinks = [
  { name: "国内市场", href: "#" },
  { name: "国际市场", href: "#" },
  { name: "产品留言咨询", href: "#" },
];

export default function ServiceSupport() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 service-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* China map illustration */}
          <div className="hidden lg:flex justify-center">
            <svg
              viewBox="0 0 400 350"
              className="w-full max-w-md h-auto"
              fill="none"
            >
              {/* Simplified China map shape */}
              <path
                d="M80 60 L120 40 L180 50 L240 30 L300 50 L340 80 L360 120 L380 160 L370 200 L350 240 L320 270 L280 290 L240 310 L180 320 L140 300 L100 270 L60 220 L40 160 L50 100 Z"
                fill="#c1392b"
                opacity="0.9"
              />
              {/* Dot markers for cities */}
              <circle cx="320" cy="180" r="6" fill="#f7931e" />
              <circle cx="280" cy="220" r="6" fill="#f7931e" />
              <circle cx="200" cy="150" r="6" fill="#f7931e" />
              <circle cx="150" cy="200" r="6" fill="#f7931e" />
              <circle cx="240" cy="280" r="6" fill="#f7931e" />
            </svg>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务支持</h2>
            <h3 className="text-xl md:text-2xl font-medium text-[#f7931e] mb-6">精诚服务，售后无忧</h3>
            <p className="text-white/80 leading-relaxed mb-8">
              7X24小时响应，8小时内技术人员到位。如产品出出现质量问题，厂家负责包退、
              包换、包责修理。保修期内提供免费的瓦房店炉排、炉排片、横梁炉排、链条炉
              排等炉排及配件维修服务，响应客户的改造、升级需求，终身保障。
            </p>

            {/* Service links */}
            <div className="space-y-4">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between py-3 border-b border-white/20 group hover:border-[#f7931e] transition-all"
                >
                  <span className="group-hover:text-[#f7931e] transition-colors">{link.name}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
