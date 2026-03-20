import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import GetRBTCSection from '@/components/GetRBTCSection';
import WalletSection from '@/components/WalletSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-rsk-cream">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GetRBTCSection />
        <WalletSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
