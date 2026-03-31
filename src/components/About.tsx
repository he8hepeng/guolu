"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 27, suffix: "+", label: "年行业经验" },
  { value: 100, suffix: "+", label: "合作客户" },
  { value: 15580, suffix: "+", label: "产品销量" },
  { value: 5000, suffix: "+", label: "服务案例" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#f7931e]">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="text-[#f7931e] text-6xl md:text-8xl font-bold opacity-20 mb-4">
              1998
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              大连阳光锅炉辅机有限公司
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              1998年成立，经过30余年的发展，现有员工800多人，占地面积100多万平方米，
              厂房面积60万平方米，年产各类炉排5万余吨。公司拥有先进的生产设备和完善的质量管理体系，
              产品远销国内外二十多个国家和地区。
            </p>
            <button className="px-8 py-3 bg-[#f7931e] text-white font-medium hover:bg-[#e5851a] transition-all">
              了解我们
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white shadow-lg">
                <Counter end={stat.value} suffix={stat.suffix} />
                <div className="text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
