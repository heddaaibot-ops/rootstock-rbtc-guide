export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-purple text-white text-4xl md:text-5xl font-bold px-8 py-4 uppercase">
            什么是 rBTC
          </h2>
        </div>

        {/* Definition */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>rBTC（Real Bitcoin）</strong>是 Rootstock（RSK）区块链的原生加密货币。
            它与比特币（BTC）<strong>1:1 锚定</strong>，意味着每个 rBTC 都由等量的 BTC 支持。
            rBTC 用于支付交易费、执行智能合约以及与 Rootstock 生态系统中的去中心化应用（dApps）交互。
          </p>
        </div>

        {/* Three Core Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-rsk-cream p-8 border-2 border-rsk-orange">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-rsk-text-dark mb-3">
              比特币算力保护
            </h3>
            <p className="text-gray-700">
              通过合并挖矿，由 80% 的比特币算力保护，确保网络安全
            </p>
          </div>

          <div className="bg-rsk-cream p-8 border-2 border-rsk-purple">
            <div className="text-4xl mb-4">🌉</div>
            <h3 className="text-xl font-bold text-rsk-text-dark mb-3">
              PowPeg 1:1 锚定
            </h3>
            <p className="text-gray-700">
              通过 PowPeg（最安全的比特币桥）与 BTC 保持 1:1 锚定
            </p>
          </div>

          <div className="bg-rsk-cream p-8 border-2 border-rsk-pink">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-rsk-text-dark mb-3">
              无需许可访问 DeFi
            </h3>
            <p className="text-gray-700">
              在 Rootstock 上访问 200+ DeFi 应用和协议
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-rsk-orange to-rsk-pink p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">使用场景</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">💰 DeFi 应用</h4>
              <p>在 Sovryn、Money on Chain、Tropykus 等平台上借贷、质押、交易</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⛽ 支付 Gas 费</h4>
              <p>用于支付 Rootstock 网络上的所有交易费用</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📜 智能合约</h4>
              <p>与 Rootstock 上的智能合约进行交互</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⚡ 快速交易</h4>
              <p>30秒-1分钟内确认，比比特币主网更快</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
