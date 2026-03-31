"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80",
    title: "「节」尽所「能」，践行绿色低碳生产",
    subtitle: "核心专利技术，量身定制选配",
  },
  {
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
    title: "专业锅炉配件制造商",
    subtitle: "27年行业经验，值得信赖",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    title: "全方位技术服务支持",
    subtitle: "7x24小时响应，售后无忧",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-4 animate-fadeInUp"
            style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}
          >
            {slides[currentSlide].title}
          </h1>
          <div className="w-16 h-0.5 bg-[#f7931e] mx-auto mb-4" />
          <p
            className="text-lg md:text-xl text-white/90 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <Link
            href="#about"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Learn More +
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
          </div>
          <span className="mt-2 text-xs tracking-wider">SCROLL DOWN</span>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-12 right-8 flex items-center space-x-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-10 h-10 border border-white/50 text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-[#f7931e]" : "bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="w-10 h-10 border border-white/50 text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
