import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import ProjectShowcase from '@/components/ProjectShowcase';
import Footer from '@/components/Footer';
import FixedSidebar from '@/components/FixedSidebar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <About />
        <ProjectShowcase />
      </main>
      <Footer />
      <FixedSidebar />
    </div>
  );
}
