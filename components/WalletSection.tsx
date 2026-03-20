
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
          <h2 className="inline-block bg-rsk-green text-white text-4xl md:text-5xl font-bold px-8 py-4 uppercase">
            钱包设置
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-rsk-text-dark mb-6">支持的钱包</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {wallets.map((wallet) => (
              <a key={wallet.name} href={wallet.url} target="_blank" rel="noopener noreferrer" className="bg-rsk-cream p-4 text-center hover:bg-rsk-orange hover:text-white transition-colors">
                <div className="font-bold">{wallet.name}</div>
                {wallet.recommended && <span className="text-xs">⭐ 推荐</span>}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-rsk-cream p-8">
          <button onClick={() => setShowSetup(!showSetup)} className="w-full bg-rsk-orange text-white font-bold py-4 px-6 text-xl mb-4">
            {showSetup ? '隐藏' : '显示'} MetaMask 设置教程 ↓
          </button>

          {showSetup && (
            <div className="mt-6 space-y-6">
              <div className="bg-white p-6 border-2 border-rsk-orange">
                <h4 className="font-bold text-lg mb-4">网络参数（点击复制）</h4>
                <div className="space-y-3">
                  {Object.entries(networkConfig).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center bg-gray-50 p-3">
                      <span className="font-semibold">{key}:</span>
                      <button onClick={() => copyToClipboard(value, key)} className="text-rsk-orange hover:underline font-mono">
                        {value} {copiedField === key && '✓'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 border-2 border-yellow-400">
                <p className="text-gray-800">
                  📸 <strong>截图占位符：</strong>这里将添加 MetaMask 设置步骤的详细截图
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
