
'use client';

import { useState } from 'react';
import { getBTCPlatforms, getCryptoPlatforms, getFiatPlatforms } from '@/data/platforms';

export default function GetRBTCSection() {
  const [activeTab, setActiveTab] = useState<'btc' | 'crypto' | 'fiat'>('btc');

  const btcPlatforms = getBTCPlatforms();
  const cryptoPlatforms = getCryptoPlatforms();
  const fiatPlatforms = getFiatPlatforms();

  const currentPlatforms = activeTab === 'btc' ? btcPlatforms : activeTab === 'crypto' ? cryptoPlatforms : fiatPlatforms;

  return (
    <section id="get-rbtc" className="py-20 bg-rsk-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-pink text-white text-4xl md:text-5xl font-bold px-8 py-4 uppercase">
            如何获取 rBTC
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button onClick={() => setActiveTab('btc')} className={`px-8 py-4 font-bold text-lg ${activeTab === 'btc' ? 'bg-rsk-orange text-white' : 'bg-white text-rsk-text-dark'}`}>
            用 BTC 获取
          </button>
          <button onClick={() => setActiveTab('crypto')} className={`px-8 py-4 font-bold text-lg ${activeTab === 'crypto' ? 'bg-rsk-purple text-white' : 'bg-white text-rsk-text-dark'}`}>
            用数字资产获取
          </button>
          <button onClick={() => setActiveTab('fiat')} className={`px-8 py-4 font-bold text-lg ${activeTab === 'fiat' ? 'bg-rsk-green text-white' : 'bg-white text-rsk-text-dark'}`}>
            用法币获取
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPlatforms.map((platform) => (
            <div key={platform.name} className="bg-white p-6 border-2 border-gray-200 hover:border-rsk-orange">
              <h3 className="text-2xl font-bold text-rsk-text-dark mb-3">{platform.name}</h3>
              <span className="inline-block bg-rsk-cream text-rsk-orange text-sm font-semibold px-3 py-1 mb-3">{platform.type}</span>
              <p className="text-gray-700 mb-4">{platform.description}</p>
              {platform.region && <p className="text-sm text-gray-600 mb-2"><strong>地区：</strong> {platform.region}</p>}
              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block w-full bg-rsk-orange hover:bg-[#FFA726] text-white font-bold py-3 text-center">
                访问 {platform.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
