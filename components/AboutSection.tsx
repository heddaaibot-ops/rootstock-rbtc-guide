'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-purple text-rsk-cream text-2xl md:text-3xl font-bold px-6 py-3 uppercase">
            什么是 rBTC
          </h2>
        </div>

        {/* Definition */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-rsk-text-dark leading-relaxed">
            <strong>rBTC（Real Bitcoin）</strong>是 Rootstock（RSK）区块链的原生加密货币。
            它与比特币（BTC）<strong>1:1 锚定</strong>，意味着每个 rBTC 都由等量的 BTC 支持。
            rBTC 用于支付交易费、执行智能合约以及与 Rootstock 生态系统中的去中心化应用（dApps）交互。
          </p>
        </div>

        {/* Three Core Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-rsk-cream p-8">
            <h3 className="text-lg font-bold text-rsk-text-dark mb-3 uppercase">
              比特币算力保护
            </h3>
            <p className="text-rsk-text-dark">
              通过合并挖矿，由 80% 的比特币算力保护，确保网络安全
            </p>
          </div>

          <div className="bg-rsk-cream p-8">
            <h3 className="text-lg font-bold text-rsk-text-dark mb-3 uppercase">
              PowPeg 1:1 锚定
            </h3>
            <p className="text-rsk-text-dark">
              通过 PowPeg（最安全的比特币桥）与 BTC 保持 1:1 锚定
            </p>
          </div>

          <div className="bg-rsk-cream p-8">
            <h3 className="text-lg font-bold text-rsk-text-dark mb-3 uppercase">
              无需许可访问 DeFi
            </h3>
            <p className="text-rsk-text-dark">
              在 Rootstock 上访问 200+ DeFi 应用和协议
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
