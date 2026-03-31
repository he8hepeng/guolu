"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

const productCategories = [
  ["往复炉排", "往复炉排配件", "鳞片炉排"],
  ["鳞片炉排配件", "横梁炉排", "横梁炉排配件"],
  ["链带炉排", "链带炉排配件", "除渣机&上煤机"],
];

const tags = [
  "炉排厂家", "垃圾焚烧炉故障分析", "链带炉排", "永宁炉排", "横梁炉排",
  "垃圾焚烧炉", "分层煤斗", "医疗废物焚烧炉", "生物质炉排", "炉排",
  "小鳞片炉排", "双螺旋给料器", "输送机", "生物质往复炉排", "往复炉排",
  "鳞片炉排", "链条炉排", "生物质鳞片炉排", "炉排出口", "大块炉排",
];

export default function Footer() {
  const t = useTranslation();

  return (
    <footer id="contact" className="bg-[#181f22] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Product categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">{t.footer.productTitle}</h3>
            <div className="grid grid-cols-3 gap-3">
              {t.products.categories.map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="px-4 py-3 border border-white/20 text-sm text-center hover:bg-[#f7931e] hover:border-[#f7931e] transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* QR codes */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t.footer.contactTitle}</h3>
            <div className="flex gap-6">
              <div className="text-center">
                <Image
                  src="/wechat-qr.jpg"
                  alt="微信二维码"
                  width={120}
                  height={120}
                  className="bg-white p-2"
                />
                <p className="text-sm text-white/70 mt-2">{t.footer.scanToAdd}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-sm text-white/60">
              <p>{t.footer.copyright}</p>
              <p className="mt-1">{t.footer.techSupport}</p>
            </div>
            <div className="text-sm text-white/60 text-right">
              <p>{t.footer.hotline}</p>
              <p className="mt-1">{t.footer.address}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-sm text-white/40">
              <span className="mr-2">{t.footer.tags}</span>
              {tags.map((tag, index) => (
                <Link
                  key={index}
                  href="#"
                  className="inline-block mr-2 mb-1 hover:text-[#f7931e] transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
