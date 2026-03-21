
'use client';

import { useState } from 'react';
import { wallets, networkConfig } from '@/data/wallets';

export default function WalletSection() {
  const [showSetup, setShowSetup] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section id="wallet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-green text-rsk-cream text-2xl md:text-3xl font-bold px-6 py-3 uppercase">
            钱包设置
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-rsk-text-dark mb-6 uppercase">支持的钱包</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {wallets.map((wallet) => (
              <a key={wallet.name} href={wallet.url} target="_blank" rel="noopener noreferrer" className="bg-rsk-cream p-4 text-center hover:bg-white transition-colors">
                <div className="font-bold">{wallet.name}</div>
                {wallet.recommended && <span className="text-xs bg-rsk-orange text-rsk-cream px-2 py-1 uppercase">推荐</span>}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-rsk-cream p-8">
          <button onClick={() => setShowSetup(!showSetup)} className="w-full bg-rsk-orange text-rsk-cream font-bold py-3 px-6 text-lg mb-4 uppercase">
            {showSetup ? '隐藏' : '显示'} MetaMask 设置教程 ↓
          </button>

          {showSetup && (
            <div className="mt-6 space-y-6">
              <div className="bg-white p-6">
                <h4 className="font-bold text-lg mb-4">网络参数（点击复制）</h4>
                <div className="space-y-3">
                  {Object.entries(networkConfig).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-gray-50 p-3">
                      <span className="font-semibold">{key}:</span>
                      <button onClick={() => copyToClipboard(value, key)} className="text-rsk-orange hover:underline font-mono">
                        {value} {copiedField === key && <span className="text-rsk-green font-bold ml-2">已复制</span>}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6">
                <p className="text-rsk-text-dark">
                  <strong>截图占位符：</strong>这里将添加 MetaMask 设置步骤的详细截图
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
