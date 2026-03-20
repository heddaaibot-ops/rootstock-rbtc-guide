'use client';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rsk-cream border-b-4 border-rsk-orange">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-rsk-orange">
              Rootstock
            </div>
            <div className="hidden md:block text-lg font-semibold text-rsk-text-dark">
              rBTC 获取指南
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-rsk-text-dark hover:text-rsk-orange font-medium transition-colors"
            >
              什么是 rBTC
            </button>
            <button
              onClick={() => scrollToSection('get-rbtc')}
              className="text-rsk-text-dark hover:text-rsk-orange font-medium transition-colors"
            >
              获取方式
            </button>
            <button
              onClick={() => scrollToSection('wallet')}
              className="text-rsk-text-dark hover:text-rsk-orange font-medium transition-colors"
            >
              钱包设置
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-rsk-text-dark hover:text-rsk-orange font-medium transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('get-rbtc')}
            className="bg-rsk-orange hover:bg-[#FFA726] text-white font-bold px-6 py-2 transition-colors"
          >
            开始获取
          </button>
        </div>
      </div>
    </header>
  );
}
