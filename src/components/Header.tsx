"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocaleStore, useTranslation } from "@/lib/i18n";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleLocale } = useLocaleStore();
  const t = useTranslation();

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.solutions, href: "/#solutions" },
    { name: t.nav.support, href: "/support" },
    { name: t.nav.news, href: "/#news" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-transparent">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-[#f7931e] text-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>{t.phone}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1241134631/3012068827.png"
              alt="大连阳光 DLSTECH"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white text-sm font-medium hover:text-[#f7931e] transition-colors relative group"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#f7931e] transition-all group-hover:w-full" />
              </Link>
            ))}
            {/* Language toggle button */}
            <button
              type="button"
              onClick={toggleLocale}
              className="px-4 py-2 text-white text-sm font-medium hover:text-[#f7931e] transition-colors relative group"
            >
              <span>{t.nav.lang}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#f7931e] transition-all group-hover:w-full" />
            </button>
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-5 py-2 border border-[#f7931e] text-[#f7931e] text-sm font-medium hover:bg-[#f7931e] hover:text-white transition-all">
              {t.buttons.productFilter}
            </button>
            <button className="px-5 py-2 bg-[#f7931e] text-white text-sm font-medium hover:bg-[#e5851a] transition-all">
              {t.buttons.inquiry}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-sm">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-white text-sm font-medium hover:text-[#f7931e] hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleLocale();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 text-white text-sm font-medium hover:text-[#f7931e] hover:bg-white/10 transition-colors text-left"
              >
                {t.nav.lang}
              </button>
              <div className="flex space-x-3 px-4 pt-4">
                <button className="flex-1 px-4 py-2 border border-[#f7931e] text-[#f7931e] text-sm font-medium">
                  {t.buttons.productFilter}
                </button>
                <button className="flex-1 px-4 py-2 bg-[#f7931e] text-white text-sm font-medium">
                  {t.buttons.inquiry}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
