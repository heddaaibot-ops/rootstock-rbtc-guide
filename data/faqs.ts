export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: '什么是 rBTC？',
    answer: 'rBTC（Real Bitcoin）是 Rootstock（RSK）区块链的原生加密货币。它与比特币（BTC）1:1 锚定，意味着每个 rBTC 都由等量的 BTC 支持。rBTC 用于支付交易费、执行智能合约以及与 Rootstock 生态系统中的去中心化应用（dApps）交互。',
  },
  {
    question: '哪些钱包支持 rBTC？',
    answer: '多个流行钱包支持 rBTC，包括 MetaMask、Ledger、Trezor 和 MyCrypto 等。这些钱包允许您无缝存储、发送和接收 rBTC。要将 rBTC 添加到钱包中，您可能需要手动添加 Rootstock 网络或将 rBTC 作为自定义代币导入。',
  },
  {
    question: 'rBTC 如何保证安全？',
    answer: 'rBTC 通过与比特币的双向锚定机制保护，并由 BTC 1:1 支持。Rootstock 网络通过使用合并挖矿来利用比特币强大的工作量证明安全性，矿工同时保护比特币和 Rootstock。这使 rBTC 成为 DeFi 领域最安全的资产之一，因为它受益于保护比特币网络的巨大算力。',
  },
  {
    question: '双向锚定机制如何工作？',
    answer: '双向锚定机制允许用户将 BTC 转换为 rBTC，反之亦然，保持 1:1 锚定。当您在锚定中锁定 BTC 时，会在 Rootstock 网络上铸造等量的 rBTC。这一机制由比特币的工作量证明保护，确保每个 rBTC 都完全由比特币支持。该过程是去中心化的，由联邦节点系统管理锚定。',
  },
  {
    question: '将 BTC 转换为 rBTC 涉及哪些费用？',
    answer: '将 BTC 转换为 rBTC 涉及比特币和 Rootstock 网络的交易费。这些费用通常包括比特币网络交易费和 Rootstock 端的最低网络费。某些转换方法（如使用 FastBTC）可能还包括少量服务费。请务必检查您使用的具体平台或服务以获取最准确的费用信息。',
  },
  {
    question: 'rBTC 交易速度有多快？',
    answer: '由于 Rootstock 的出块时间比比特币快，Rootstock 网络上的 rBTC 交易通常在 30 秒到 1 分钟内确认。这使 rBTC 非常适合在交易速度至关重要的 DeFi 应用中使用。但是，实际确认时间可能因网络拥堵和支付的费用而异。',
  },
  {
    question: '在哪里可以使用 rBTC？',
    answer: 'rBTC 可在 Rootstock 生态系统内的广泛 DeFi 平台和 dApps 中使用。这包括在 Sovryn、Money on Chain 和 Tropykus 等平台上进行借贷、质押和交易。此外，您可以使用 rBTC 支付交易费并与智能合约交互。',
  },
];
