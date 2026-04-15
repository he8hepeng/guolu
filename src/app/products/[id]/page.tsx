'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
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
import { ArrowLeft, Phone, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '往复炉排',
    category: '往复炉排',
    description: '采用优质合金钢材制作，结构坚固，运行平稳，适用于各种燃煤锅炉。独特的往复运动设计使燃料充分燃烧，热效率高。',
    specs: ['材质: 优质合金钢', '寿命: ≥80000小时', '热效率: ≥85%'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    details: '往复炉排是我公司主打产品之一，采用先进的往复运动原理，使燃料在炉排上均匀分布，充分燃烧。该产品具有以下特点：\n\n1. 结构坚固：采用优质合金钢材料，经过特殊热处理工艺，具有高强度和耐磨性。\n\n2. 运行平稳：采用精密传动机构，运行平稳可靠，噪音低。\n\n3. 热效率高：独特的炉排结构设计，使燃料充分燃烧，热效率达到85%以上。\n\n4. 使用寿命长：经过特殊材料和工艺处理，使用寿命可达80000小时以上。\n\n5. 维护方便：模块化设计，拆卸更换方便，维护成本低。',
  },
  {
    id: 2,
    name: '往复炉排配件-主动炉排片',
    category: '往复炉排配件',
    description: '高强度合金钢材质，经过特殊热处理工艺，耐磨耐腐蚀，使用寿命长。',
    specs: ['材质: Cr-Mo合金钢', '硬度: HRC45-55', '规格: 多种规格可选'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    details: '主动炉排片是往复炉排的核心部件，承担燃料推动和燃烧支撑的重要功能。采用高强度Cr-Mo合金钢材质，经过渗碳、淬火、回火等特殊热处理工艺，具有优异的耐磨性和耐腐蚀性。产品特点：\n\n1. 高强度：采用优质Cr-Mo合金钢，强度高，承载能力大。\n\n2. 耐磨耐腐蚀：经过特殊热处理，表面硬度达到HRC45-55，耐磨耐腐蚀。\n\n3. 规格齐全：可根据客户需求定制各种规格型号。\n\n4. 质量稳定：采用先进生产工艺，质量稳定可靠。',
  },
  {
    id: 3,
    name: '往复炉排配件-从动炉排片',
    category: '往复炉排配件',
    description: '与主动炉排片配套使用，保证炉排运动同步，燃烧均匀。',
    specs: ['材质: 优质合金钢', '表面处理: 渗碳处理', '寿命: ≥50000小时'],
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&q=80',
    details: '从动炉排片与主动炉排片配套使用，共同构成往复炉排的燃烧面。产品特点：\n\n1. 配合精确：与主动炉排片精密配合，保证炉排运动同步。\n\n2. 燃烧均匀：科学的通风孔设计，保证燃烧均匀。\n\n3. 表面处理：采用渗碳处理，提高表面硬度和耐磨性。\n\n4. 使用寿命：使用寿命可达50000小时以上。',
  },
  {
    id: 4,
    name: '鳞片炉排',
    category: '鳞片炉排',
    description: '鳞片式结构设计，通风均匀，燃烧效果好。广泛应用于工业锅炉和电站锅炉。',
    specs: ['材质: 耐热合金钢', '适用燃料: 各类煤种', '特点: 通风均匀'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    details: '鳞片炉排采用鳞片式结构设计，是我公司成熟产品之一。产品特点：\n\n1. 鳞片结构：采用独特的鳞片式结构，通风均匀，燃烧效果好。\n\n2. 材质优良：采用耐热合金钢材质，耐高温，耐腐蚀。\n\n3. 适用范围广：适用于各类煤种，包括烟煤、无烟煤、褐煤等。\n\n4. 应用广泛：广泛应用于工业锅炉和电站锅炉。\n\n5. 技术成熟：经过多年改进优化，技术成熟可靠。',
  },
  {
    id: 5,
    name: '鳞片炉排配件-鳞片',
    category: '鳞片炉排配件',
    description: '精密铸造的鳞片部件，尺寸精确，更换方便。',
    specs: ['材质: 球墨铸铁', '工艺: 精密铸造', '规格齐全'],
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
    details: '鳞片是鳞片炉排的关键配件，采用精密铸造工艺生产。产品特点：\n\n1. 精密铸造：采用精密铸造工艺，尺寸精确，互换性好。\n\n2. 材质：采用优质球墨铸铁，强度高，耐磨性好。\n\n3. 规格齐全：提供多种规格型号，可根据炉排尺寸定制。\n\n4. 更换方便：模块化设计，拆卸更换方便快捷。',
  },
  {
    id: 6,
    name: '横梁炉排',
    category: '横梁炉排',
    description: '横梁支撑结构，承重能力强，运行稳定可靠。适合大型工业锅炉使用。',
    specs: ['承重能力: 大型炉排', '材质: 低合金钢', '特点: 结构稳定'],
    image: 'https://images.unsplash.com/photo-1625812237523-2988f5c8e8d9?w=600&q=80',
    details: '横梁炉排采用横梁支撑结构，是我公司为大型锅炉开发的专业产品。产品特点：\n\n1. 承重能力强：采用横梁支撑结构，承重能力大，适合大型锅炉。\n\n2. 结构稳定：横梁设计增强了炉排的整体稳定性。\n\n3. 材质优良：采用低合金钢材质，强度高，韧性好。\n\n4. 运行可靠：传动系统稳定可靠，运行噪音低。\n\n5. 维护简便：横梁结构便于检查和维护。',
  },
  {
    id: 7,
    name: '横梁炉排配件-横梁',
    category: '横梁炉排配件',
    description: '高强度横梁部件，承载整列炉排，运行平稳。',
    specs: ['材质: Q345合金钢', '工艺: 焊接+热处理', '规格: 按图纸定制'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    details: '横梁是横梁炉排的核心承重部件，承担整列炉排的重量。产品特点：\n\n1. 高强度：采用Q345合金钢，强度高，承载能力强。\n\n2. 工艺先进：采用焊接和热处理工艺相结合，确保产品质量。\n\n3. 定制服务：可根据客户图纸要求定制各种规格型号。\n\n4. 质量可靠：严格的质量控制，确保每个横梁都达到标准要求。',
  },
  {
    id: 8,
    name: '链带炉排',
    category: '链带炉排',
    description: '链条传动方式，自动化程度高，运行可靠。广泛用于各类工业锅炉。',
    specs: ['传动方式: 链条传动', '自动化程度: 高', '适用: 各种燃煤锅炉'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80',
    details: '链带炉排采用链条传动方式，是我公司自动化程度最高的产品之一。产品特点：\n\n1. 链条传动：采用高强度链条传动，运行平稳可靠。\n\n2. 自动化程度高：可与锅炉控制系统联动，实现自动化运行。\n\n3. 适用范围广：适用于各种燃煤锅炉，包括链条炉排锅炉、往复炉排锅炉等。\n\n4. 运行效率高：传动效率高，能耗低。\n\n5. 维护成本低：链条使用寿命长，维护成本低。',
  },
  {
    id: 9,
    name: '链带炉排配件-链条',
    category: '链带炉排配件',
    description: '高强度链条，精密制造，耐磨耐用。',
    specs: ['材质: 优质合金钢', '强度等级: 高强度', '寿命: ≥60000小时'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=600&q=80',
    details: '链条是链带炉排的关键传动部件，采用高强度合金钢精密制造。产品特点：\n\n1. 高强度：采用优质合金钢材质，强度等级高。\n\n2. 精密制造：采用先进的制造工艺，尺寸精确。\n\n3. 耐磨耐用：表面经过特殊处理，耐磨性好。\n\n4. 使用寿命长：使用寿命可达60000小时以上。\n\n5. 规格齐全：提供多种规格型号可选。',
  },
  {
    id: 10,
    name: '除渣机',
    category: '除渣机&上煤机',
    description: '自动化除渣设备，及时清除炉渣，保持炉膛清洁，提高热效率。',
    specs: ['类型: 链式/刮板式', '处理能力: 按炉型配套', '自动化程度: 高'],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
    details: '除渣机是锅炉辅机的重要配套设备，用于清除炉膛内的炉渣。产品特点：\n\n1. 类型多样：提供链式和刮板式两种类型，可根据需求选择。\n\n2. 处理能力强：处理能力按炉型配套设计，满足各种规格需求。\n\n3. 自动化程度高：可与锅炉控制系统联动，实现自动化运行。\n\n4. 保持炉膛清洁：及时清除炉渣，保持炉膛清洁，提高热效率。\n\n5. 运行可靠：结构简单，运行稳定可靠。',
  },
  {
    id: 11,
    name: '上煤机',
    category: '除渣机&上煤机',
    description: '连续式上煤设备，燃料输送均匀，自动化程度高。',
    specs: ['类型: 皮带/链板式', '输送量: 按需求定制', '特点: 运行平稳'],
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&q=80',
    details: '上煤机是锅炉辅机的重要配套设备，用于将燃料连续均匀地输送到炉膛内。产品特点：\n\n1. 类型多样：提供皮带式和链板式两种类型。\n\n2. 输送均匀：连续式输送，燃料分布均匀。\n\n3. 输送量可调：输送量可根据需求定制。\n\n4. 运行平稳：采用优质输送部件，运行平稳可靠。\n\n5. 自动化控制：可与锅炉控制系统联动，实现自动化上煤。',
  },
];

function QuoteModal({
  open,
  onOpenChange,
  productName,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>获取报价</DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="flex flex-col items-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-2">提交成功！</p>
            <p className="text-gray-600 text-center">我们的销售团队将在24小时内与您联系</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                产品名称
              </label>
              <Input value={productName} disabled className="bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                姓名（必填）
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="请输入您的姓名"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                电话（必填）
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="请输入联系电话"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                公司名称
              </label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="请输入公司名称（选填）"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                留言
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="请输入您的需求或问题"
                rows={3}
              />
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.open('tel:15840905233')}
                className="flex-1 gap-2"
              >
                <Phone className="w-4 h-4" />
                拨打电话
              </Button>
              <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600">
                提交询价
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
            <Button onClick={() => router.push('/products')}>返回产品中心</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">首页</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-orange-500">产品中心</Link>
            <span>/</span>
            <span className="text-orange-500">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image */}
            <div>
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="text-sm text-orange-500 mb-2">{product.category}</div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Specs */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">技术规格</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-orange-500 hover:bg-orange-600 px-8"
                >
                  获取报价
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('tel:15840905233')}
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 gap-2"
                >
                  <Phone className="w-4 h-4" />
                  电话咨询
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">产品详情</h2>
            <div className="prose prose-gray max-w-none">
              {product.details.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">相关产品</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-gray-200">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{related.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 pb-12">
        <Button
          variant="outline"
          onClick={() => router.push('/products')}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          返回产品中心
        </Button>
      </div>

      <Footer />
      <FixedSidebar />

      {/* Quote Modal */}
      <QuoteModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        productName={product.name}
      />
    </div>
  );
}
