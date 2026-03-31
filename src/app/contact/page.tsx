"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideToolbar from "@/components/SideToolbar";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "message">("contact");
  const t = useTranslation();

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      {/* Banner */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://omo-oss-image.thefastimg.com/portal-saas/demo_8b27a5b7298c4f1e8b7e58f824cd1e4f/cms/image/6859a6f2-a8f2-4469-a2ae-2370613cffd8.jpg_104xaf.jpg')"
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{t.contact.title}</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-0">
        <div className="flex">
          <button
            type="button"
            onClick={() => setActiveTab("contact")}
            className={`px-8 py-4 font-medium transition-colors ${
              activeTab === "contact"
                ? "bg-[#f7931e] text-white"
                : "bg-white text-gray-600 hover:text-[#f7931e]"
            }`}
          >
            {t.contact.tabs.contact}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("message")}
            className={`px-8 py-4 font-medium transition-colors ${
              activeTab === "message"
                ? "bg-[#f7931e] text-white"
                : "bg-white text-gray-600 hover:text-[#f7931e]"
            }`}
          >
            {t.contact.tabs.message}
          </button>
          <div className="flex-1 bg-white" />
          <div className="bg-white px-4 py-4 flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#f7931e]">{t.contact.breadcrumb.home}</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#f7931e]">{t.contact.breadcrumb.contact}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {activeTab === "contact" ? (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Illustration */}
              <div className="flex justify-center">
                <div className="relative">
                  <svg className="w-80 h-64" viewBox="0 0 400 300" fill="none">
                    {/* Computer */}
                    <rect x="80" y="60" width="180" height="120" rx="8" fill="#3b82f6" />
                    <rect x="90" y="70" width="160" height="100" fill="#1e3a5f" />
                    {/* Screen content */}
                    <rect x="100" y="80" width="60" height="8" fill="#60a5fa" />
                    <rect x="100" y="95" width="80" height="6" fill="#4b5563" />
                    <rect x="100" y="108" width="70" height="6" fill="#4b5563" />
                    <rect x="100" y="121" width="75" height="6" fill="#4b5563" />
                    <rect x="100" y="134" width="65" height="6" fill="#4b5563" />
                    {/* Chart */}
                    <rect x="185" y="80" width="55" height="70" fill="#1e293b" />
                    <rect x="195" y="110" width="8" height="30" fill="#f7931e" />
                    <rect x="208" y="100" width="8" height="40" fill="#3b82f6" />
                    <rect x="221" y="115" width="8" height="25" fill="#22c55e" />
                    {/* Monitor stand */}
                    <rect x="155" y="180" width="30" height="10" fill="#6b7280" />
                    <rect x="140" y="190" width="60" height="6" fill="#4b5563" />
                    {/* Keyboard */}
                    <rect x="100" y="210" width="140" height="30" rx="4" fill="#9ca3af" />
                    {/* Mail envelope */}
                    <g transform="translate(260, 100)">
                      <rect x="0" y="20" width="80" height="50" fill="#f7931e" rx="4" />
                      <path d="M0 24 L40 50 L80 24" stroke="#fff" strokeWidth="3" fill="none" />
                      <circle cx="60" cy="10" r="15" fill="#ef4444" />
                      <text x="60" y="15" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                    </g>
                    {/* Floating elements */}
                    <circle cx="50" cy="100" r="8" fill="#f7931e" opacity="0.6" />
                    <circle cx="350" cy="180" r="6" fill="#3b82f6" opacity="0.6" />
                    <rect x="30" y="160" width="15" height="15" fill="#22c55e" opacity="0.4" transform="rotate(45 37.5 167.5)" />
                  </svg>
                </div>
              </div>

              {/* Right - Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.company}</h2>

                <div className="space-y-4">
                  {t.contact.addresses.map((address, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#f7931e] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-gray-600">{address}</span>
                    </div>
                  ))}

                  {t.contact.phones.map((phone, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#f7931e] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="text-gray-600">{phone}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-gray-500 mb-2">{t.contact.customerService}</p>
                  <a href="tel:15840905233" className="text-4xl font-bold text-[#f7931e] hover:underline">
                    15840905233
                  </a>
                </div>

                <div className="mt-8 flex gap-6">
                  <div>
                    <Image
                      src="/wechat-qr.jpg"
                      alt="微信二维码"
                      width={120}
                      height={120}
                      className="border border-gray-200 rounded"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-gray-800">{t.contact.wechat.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{t.contact.wechat.weekly}</p>
                    <p className="text-gray-500 text-sm">{t.contact.wechat.info}</p>
                    <p className="text-gray-500 text-sm">{t.contact.wechat.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Message Form */
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.contact.form.title}</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-1">{t.contact.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f7931e]"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f7931e]"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f7931e]"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-1">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#f7931e] resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f7931e] text-white py-3 rounded font-medium hover:bg-[#e5851a] transition-colors"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <SideToolbar />
    </main>
  );
}
