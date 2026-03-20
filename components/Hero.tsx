'use client';

export default function Hero() {
  const scrollToGetRBTC = () => {
    const element = document.getElementById('get-rbtc');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-rsk-cream pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-rsk-text-dark mb-6">
          轻松获取 <span className="text-rsk-orange">rBTC</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-rsk-purple mb-4">
          比特币 DeFi 的钥匙
        </p>

        {/* Description */}
        <p className="text-lg text-rsk-text-dark max-w-2xl mx-auto mb-12">
          rBTC 与比特币 1:1 锚定，由比特币算力保护。
          在 Rootstock 上使用 rBTC 参与 DeFi、执行智能合约，享受比特币级别的安全性
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToGetRBTC}
          className="bg-rsk-orange hover:bg-[#FFA726] text-rsk-cream font-bold px-12 py-4 text-xl transition-colors uppercase"
        >
          开始获取 rBTC →
        </button>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-rsk-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
