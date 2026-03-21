export interface Platform {
  name: string;
  description: string;
  url: string;
  category: 'btc' | 'crypto' | 'fiat';
  type: string;
  region?: string;
  paymentMethods?: string[];
  featured?: boolean;
}

export const platforms: Platform[] = [
  // 用 BTC 获取
  {
    name: 'Boltz',
    description: '非托管比特币桥，可在不同比特币层（如 Rootstock 和闪电网络）之间交换',
    url: 'https://boltz.exchange/?sendAsset=LN&receiveAsset=RBTC',
    category: 'btc',
    type: '闪电网络桥',
    featured: true,
  },
  {
    name: 'PowPeg',
    description: '使用 BTC 获取 rBTC 最直接和原生的机制',
    url: 'https://powpeg.rootstock.io/',
    category: 'btc',
    type: '官方双向锚定桥',
    featured: true,
  },

  // 用数字资产获取
  {
    name: 'OKU',
    description: '在每个 EVM 链上获得所有 DEX 交换的最佳汇率',
    url: 'https://oku.trade/',
    category: 'crypto',
    type: 'DEX 聚合器',
  },
  {
    name: 'Symbiosis',
    description: '跨链 AMM DEX，汇集来自不同网络的流动性：L1 和 L2、EVM 和非 EVM',
    url: 'https://symbiosis.finance/',
    category: 'crypto',
    type: '跨链 DEX',
  },
  {
    name: 'Sushi Swap',
    description: '社区驱动的去中心化交易所（DEX），面向交易者和流动性提供者',
    url: 'https://www.sushi.com/rootstock/swap',
    category: 'crypto',
    type: 'DEX',
    featured: true,
  },
  {
    name: 'SmolRefuel',
    description: '快速交换您需要的东西——SmolRefuel 为您提供足够的原生代币以保持运行',
    url: 'https://smolrefuel.com/?outboundChain=30',
    category: 'crypto',
    type: 'Gas 加油站',
  },
  {
    name: 'Orbiter',
    description: '去中心化跨 Rollup 桥，作为 Layer 2 的基础设施',
    url: 'https://www.orbiter.finance/',
    category: 'crypto',
    type: '跨 Rollup 桥',
  },
  {
    name: 'Gas.Zip',
    description: '最快的一站式 gas 加油桥，支持 200+ 链。用户可以通过单个入站交易立即桥接到多个目标区块链',
    url: 'https://www.gas.zip/',
    category: 'crypto',
    type: '多链 Gas 桥',
  },
  {
    name: 'Jumper',
    description: '真正的多链交易所。汇集最好的桥接、交换、入金服务',
    url: 'https://jumper.exchange/es/',
    category: 'crypto',
    type: '多链聚合器',
  },

  // 用法币获取
  {
    name: 'Mt. Pelerin',
    description: '受瑞士监管的入金/出金平台，使用户能够通过合规支付方式（如通过卡或银行转账的 USD 和 EUR）直接将 rBTC 购买到自托管钱包中',
    url: 'https://www.mtpelerin.com/',
    category: 'fiat',
    type: '入金平台',
    region: '🇨🇭 国际（瑞士监管）',
    paymentMethods: ['银行卡', '银行转账'],
    featured: true,
  },
  {
    name: 'Onramp',
    description: '让用户使用其 KYC 的居住国货币直接将 rBTC 购买到自托管钱包中。快速 KYC，低费用，支持银行转账、卡、UPI 支付',
    url: 'https://onramp.money/main/buy/?appId=1',
    category: 'fiat',
    type: '入金平台',
    paymentMethods: ['银行转账', '银行卡', 'UPI'],
  },
  {
    name: 'Ripio',
    description: '拉丁美洲金融科技平台，使用户能够轻松购买、出售和存储加密货币。专注于金融包容性',
    url: 'https://www.ripio.com/es',
    category: 'fiat',
    type: '交易所',
    region: '🇦🇷 拉丁美洲',
  },
  {
    name: 'Lemon Cash',
    description: '拉丁美洲领先的加密平台，轻松购买 rBTC、比特币、以太坊等。用户可以每周赚取加密奖励，并使用 VISA Lemon 卡无缝消费',
    url: 'https://lemon.me/en/',
    category: 'fiat',
    type: '加密平台',
    region: '🍋 拉丁美洲',
  },
  {
    name: 'Buenbit',
    description: '拉丁美洲加密货币交易所和跨境支付平台',
    url: 'https://buenbit.com/',
    category: 'fiat',
    type: '交易所',
    region: '拉丁美洲',
  },
];

export const getBTCPlatforms = () => platforms.filter(p => p.category === 'btc');
export const getCryptoPlatforms = () => {
  const order = ['Sushi Swap', 'Jumper', 'Orbiter'];
  return platforms.filter(p => p.category === 'crypto').sort((a, b) => {
    const aIndex = order.indexOf(a.name);
    const bIndex = order.indexOf(b.name);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });
};
export const getFiatPlatforms = () => platforms.filter(p => p.category === 'fiat');
