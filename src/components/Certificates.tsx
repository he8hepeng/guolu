"use client";

import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "质量管理体系认证证书",
    image: "https://ext.same-assets.com/1241134631/3974859253.jpeg",
  },
  {
    id: 2,
    title: "ISO Management System Certificate",
    image: "https://ext.same-assets.com/1241134631/1522735153.jpeg",
  },
  {
    id: 3,
    title: "安全生产标准化证书",
    image: "https://ext.same-assets.com/1241134631/4089253433.jpeg",
  },
  {
    id: 4,
    title: "全国工业产品生产许可证",
    image: "https://ext.same-assets.com/1241134631/39876575.jpeg",
  },
];

export default function Certificates() {
  return (
    <section id="technology" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-item bg-white border border-gray-200 p-4 shadow-md hover:shadow-xl transition-all w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
