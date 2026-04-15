'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WechatIcon } from '@/components/icons/WechatIcon';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

interface FixedSidebarProps {
  showContact?: boolean;
}

export default function FixedSidebar({ showContact = true }: FixedSidebarProps) {
  const { t, language } = useLanguage();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showWechatQR, setShowWechatQR] = useState(false);

  const [formData, setFormData] = useState({
    company: '',
    phone: '',
    name: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.form.success);
    setShowEmailForm(false);
    setFormData({ company: '', phone: '', name: '', message: '' });
  };

  const handleCall = () => {
    window.location.href = 'tel:15840925233';
  };

  return (
    <>
      {/* Desktop Fixed Sidebar - Hidden on mobile */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white shadow-2xl rounded-l-lg overflow-hidden">
          <div className="w-44">
            {/* Contact */}
            {showContact && (
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <MessageCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{t.sidebar.contact}</span>
              </button>
            )}

            {/* Phone */}
            <button
              onClick={handleCall}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{t.sidebar.phone}</span>
            </button>

            {/* Email */}
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{t.sidebar.email}</span>
            </button>

            {/* Wechat */}
            <button
              onClick={() => setShowWechatQR(true)}
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
            >
              <WechatIcon className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{t.sidebar.wechatQR}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around py-3 px-4">
          <button
            onClick={handleCall}
            className="flex flex-col items-center gap-1 text-gray-700"
          >
            <Phone className="w-5 h-5 text-orange-500" />
            <span className="text-xs">{t.sidebar.mobilePhone}</span>
          </button>
          <button
            onClick={() => window.location.href = '/contact'}
            className="flex flex-col items-center gap-1 text-gray-700"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs">{t.sidebar.mobileOnline}</span>
          </button>
          <button
            onClick={() => setShowWechatQR(true)}
            className="flex flex-col items-center gap-1 text-gray-700"
          >
            <WechatIcon className="w-5 h-5 text-orange-500" />
            <span className="text-xs">{t.sidebar.mobileWechat}</span>
          </button>
        </div>
      </div>

      {/* Email Form Modal */}
      <Dialog open={showEmailForm} onOpenChange={setShowEmailForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t.contact.form.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.form.company}
              </label>
              <Input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder={t.contact.form.companyPlaceholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.form.phone}
              </label>
              <Input
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={t.contact.form.phonePlaceholder}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.form.name}
              </label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t.contact.form.namePlaceholder}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.contact.form.message}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t.contact.form.messagePlaceholder}
                rows={4}
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowEmailForm(false)}
              >
                {t.contact.form.cancel}
              </Button>
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                {t.contact.form.submit}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Wechat QR Modal */}
      <Dialog open={showWechatQR} onOpenChange={setShowWechatQR}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{t.contact.wechat}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <WechatIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">{t.contact.wechatPlaceholder}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              {t.contact.wechatDesc}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
