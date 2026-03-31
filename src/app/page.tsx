import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import News from "@/components/News";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import ServiceSupport from "@/components/ServiceSupport";
import Footer from "@/components/Footer";
import SideToolbar from "@/components/SideToolbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <News />
      <About />
      <Certificates />
      <ServiceSupport />
      <Footer />
      <SideToolbar />
    </main>
  );
}
