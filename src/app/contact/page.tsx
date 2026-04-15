'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FixedSidebar from '@/components/FixedSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WechatIcon } from '@/components/icons/WechatIcon';
import { CopyButton } from '@/components/CopyButton';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <div className="pt-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t.contact.title}
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t.contact.companyName}
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.address}</h3>
                    <p className="text-gray-600">{language === 'zh' ? '大连市甘井子区姚家工业区111号（总部）' : 'No.111, Yaojia Industrial Zone, Ganjingzi District, Dalian (HQ)'}</p>
                    <p className="text-gray-600">{language === 'zh' ? '大连市瓦房店开发区（分部）' : 'Wafangdian Development Zone, Dalian (Branch)'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.phone}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">+86 158-4092-5233</p>
                      <CopyButton text="+86 15840905233" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600">info@sungrate.com</p>
                      <CopyButton text="info@sungrate.com" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.contact.businessHours}</h3>
                    <p className="text-gray-600">{t.contact.businessHoursLine}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() => window.location.href = 'tel:15840905233'}
                  className="bg-orange-500 hover:bg-orange-600 gap-2 text-white"
                >
                  <Phone className="w-4 h-4" />
                  {language === 'zh' ? '电话联系' : 'Call Us'}
                </Button>
                <Button
                  onClick={() => setShowEmailForm(true)}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {t.contact.submitEmail}
                </Button>
                <Button
                  onClick={() => setShowWechatQR(true)}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 gap-2"
                >
                  <WechatIcon className="w-4 h-4" />
                  {t.contact.wechat}
                </Button>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'zh' ? '在线留言' : 'Online Message'}
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); setShowEmailForm(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'zh' ? '公司名称' : 'Company Name'}
                  </label>
                  <Input placeholder={language === 'zh' ? '请输入公司名称（选填）' : 'Enter company name (Optional)'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'zh' ? '联系人姓名 *' : 'Contact Name *'}
                  </label>
                  <Input placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'zh' ? '联系电话 *' : 'Phone Number *'}
                  </label>
                  <Input placeholder={language === 'zh' ? '请输入联系电话' : 'Enter phone number'} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'zh' ? '留言内容 *' : 'Message *'}
                  </label>
                  <Textarea placeholder={language === 'zh' ? '请输入留言内容' : 'Enter your message'} rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  {language === 'zh' ? '提交留言' : 'Submit Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">{language === 'zh' ? '地图位置' : 'Map Location'}</p>
              <p className="text-gray-600">
                {language === 'zh' ? '大连市甘井子区姚家工业区111号' : 'No.111, Yaojia Industrial Zone, Ganjingzi District, Dalian'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FixedSidebar />

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
              <WechatIcon className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 text-center mb-4">
              {language === 'zh' ? '微信服务号' : 'WeChat Official Account'}
            </p>
            <h4 className="font-semibold text-gray-900">
              {t.contact.companyName}
            </h4>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
