'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/products', label: t.nav.products },
    { href: '/solutions', label: t.nav.solutions },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">阳</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-gray-900">
                {t.footer.companyName.replace('有限公司', '')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <LanguageSwitcher />

            {/* Contact Button - Desktop */}
            <Link href="/contact">
              <Button className="hidden lg:flex bg-orange-500 hover:bg-orange-600 gap-2 text-white">
                <MessageCircle className="w-4 h-4" />
                {t.nav.contact}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-orange-500 font-bold text-xl">阳</span>
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-lg">
                        {t.footer.companyName.replace('有限公司', '')}
                      </h2>
                      <p className="text-orange-100 text-sm">
                        {t.footer.tagline.split('，')[0]}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <nav className="flex flex-col p-4">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                    Menu
                  </div>
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-3 py-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all font-medium group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <span className="text-sm font-bold text-gray-400 group-hover:text-orange-500">{index + 1}</span>
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                {/* Divider */}
                <div className="mx-4 border-t border-gray-100"></div>
                
                {/* Quick Contact */}
                <div className="p-4 space-y-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                    Quick Contact
                  </div>
                  <a 
                    href="tel:15840925233" 
                    className="flex items-center gap-3 px-3 py-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t.contact.phone}</p>
                      <p className="font-semibold text-gray-900">158-4092-5233</p>
                    </div>
                  </a>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 gap-2 text-white py-6 rounded-xl shadow-lg shadow-orange-200">
                      <MessageCircle className="w-5 h-5" />
                      {t.nav.contact}
                    </Button>
                  </Link>
                </div>
                
                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-center text-xs text-gray-400">
                    © 2024 Sungrate
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
