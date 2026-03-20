export interface Wallet {
  name: string;
  url: string;
  recommended?: boolean;
}

export const wallets: Wallet[] = [
  {
    name: 'MetaMask',
    url: 'https://metamask.io/download/',
    recommended: true,
  },
  {
    name: 'Ledger',
    url: 'https://www.ledger.com/',
  },
  {
    name: 'Trezor',
    url: 'https://trezor.io/',
  },
  {
    name: 'Edge',
    url: 'https://edge.app/',
  },
  {
    name: 'Enkrypt',
    url: 'https://www.enkrypt.com/',
  },
  {
    name: 'Exodus',
    url: 'https://www.exodus.com/',
  },
  {
    name: 'Gnosis Safe',
    url: 'https://safe.rootstock.io/',
  },
  {
    name: 'MyCrypto',
    url: 'https://mycrypto.com/',
  },
  {
    name: 'Rabby',
    url: 'https://rabby.io/',
  },
  {
    name: 'SafePal',
    url: 'https://www.safepal.com/en/',
  },
  {
    name: 'Temple',
    url: 'https://www.templewallet.com/',
  },
];

export const networkConfig = {
  networkName: 'Rootstock Mainnet',
  rpcUrl: 'https://public-node.rsk.co/',
  chainId: '30',
  symbol: 'RBTC',
  blockExplorer: 'https://explorer.rootstock.io/',
};
