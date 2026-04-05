"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export default function SideToolbar() {
  const [showQR, setShowQR] = useState(false);
  const t = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col bg-[#f7931e] shadow-lg">
        {/* Contact */}
        <a
          href="/contact"
          className="flex flex-col items-center justify-center w-12 h-14 text-white hover:bg-[#e5851a] transition-colors border-b border-white/20"
          title="联系我们"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
          </svg>
          <span className="text-xs mt-1 writing-vertical">{t.sidebar.contact}</span>
        </a>

        {/* Phone 1 */}
        <a
          href="tel:15840905233"
          className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#e5851a] transition-colors border-b border-white/20"
          title="电话咨询"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>

        {/* Phone 2 */}
        <a
          href="tel:15840905233"
          className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#e5851a] transition-colors border-b border-white/20"
          title="电话咨询"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>

        {/* Email */}
        {/* <a
          href="mailto:sales@cnlky.com"
          className="flex items-center justify-center w-12 h-12 text-white hover:bg-[#e5851a] transition-colors border-b border-white/20"
          title="邮件咨询"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a> */}

        {/* QR Code */}
        <div
          className="relative flex items-center justify-center w-12 h-12 text-white hover:bg-[#e5851a] transition-colors cursor-pointer"
          onMouseEnter={() => setShowQR(true)}
          onMouseLeave={() => setShowQR(false)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13 2h-2v4h2v2h-4v-2h2v-4h-2v-2h4v2zm0-6h2v4h-4v-2h2v-2z"/>
          </svg>

          {/* QR popup */}
          {showQR && (
            <div className="absolute right-full mr-3 bg-white p-4 rounded-lg shadow-xl fixed-popup">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码"
                width={200}
                height={200}
                className="rounded"
              />
              <p className="text-sm text-gray-600 text-center mt-3 font-medium">{t.sidebar.scan}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
