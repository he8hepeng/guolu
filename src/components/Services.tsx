"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "炉排改造",
    description: "专业的炉排改造服务，提升锅炉燃烧效率，降低能耗成本",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    id: 2,
    title: "成套锅炉设备供应与...",
    description: "提供完整的锅炉设备解决方案，从设计到安装一站式服务",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
  },
  {
    id: 3,
    title: "锅炉辅机维修",
    description: "专业的锅炉辅机维修保养服务，延长设备使用寿命",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 4,
    title: "锅炉工程总包",
    description: "从设计、采购到施工的全流程锅炉工程总包服务",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="solutions" className="relative">
      {/* Service image background */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${services[activeService].image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Service title overlay */}
        <div className="absolute top-8 left-8 md:left-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {services[activeService].title}
          </h2>
          <div className="w-16 h-1 bg-[#f7931e]" />
        </div>

        {/* More button */}
        <div className="absolute top-8 right-8 md:right-16">
          <button className="text-white flex items-center space-x-2 hover:text-[#f7931e] transition-colors">
            <span>MORE +</span>
          </button>
        </div>
      </div>

      {/* Service tabs */}
      <div className="relative -mt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-2xl">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`py-6 px-4 text-center transition-all ${
                  index === activeService
                    ? "bg-[#f7931e] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-sm md:text-base font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
