
'use client';

import { useState } from 'react';
import { getBTCPlatforms, getCryptoPlatforms } from '@/data/platforms';

export default function GetRBTCSection() {
  const [activeTab, setActiveTab] = useState<'btc' | 'crypto'>('crypto');

  const btcPlatforms = getBTCPlatforms();
  const cryptoPlatforms = getCryptoPlatforms();

  const currentPlatforms = activeTab === 'btc' ? btcPlatforms : cryptoPlatforms;

  return (
    <section id="get-rbtc" className="py-20 bg-rsk-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-pink text-rsk-cream text-4xl md:text-5xl font-bold px-8 py-4 uppercase">
            如何获取 rBTC
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button onClick={() => setActiveTab('crypto')} className={`px-8 py-4 font-bold text-lg uppercase transition-colors ${activeTab === 'crypto' ? 'bg-rsk-purple text-rsk-cream' : 'bg-white text-rsk-text-dark'}`}>
            跨链资产获取
          </button>
          <button onClick={() => setActiveTab('btc')} className={`px-8 py-4 font-bold text-lg uppercase transition-colors ${activeTab === 'btc' ? 'bg-rsk-orange text-rsk-cream' : 'bg-white text-rsk-text-dark'}`}>
            用 BTC 获取
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPlatforms.map((platform) => (
            <div key={platform.name} className="bg-white p-6 hover:bg-rsk-cream transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-rsk-text-dark uppercase">{platform.name}</h3>
                {platform.featured && <span className="text-2xl">⭐️</span>}
              </div>
              <span className="inline-block bg-rsk-orange text-rsk-cream text-sm font-semibold px-3 py-1 mb-3 uppercase">{platform.type}</span>
              <p className="text-rsk-text-dark mb-4">{platform.description}</p>
              {platform.region && <p className="text-sm text-rsk-text-dark mb-2"><strong>地区：</strong> {platform.region}</p>}
              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block w-full bg-rsk-orange hover:bg-[#FFA726] text-rsk-cream font-bold py-3 text-center uppercase transition-colors">
                访问 {platform.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
