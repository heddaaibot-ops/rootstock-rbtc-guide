
'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-rsk-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-cyan text-white text-4xl md:text-5xl font-bold px-8 py-4 uppercase">
            常见问题 FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-gray-200">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 text-left font-bold text-lg text-rsk-text-dark hover:bg-gray-50 flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-rsk-orange text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t-2 border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">还有其他问题？</p>
          <a href="https://discord.gg/rootstock" target="_blank" rel="noopener noreferrer" className="inline-block bg-rsk-purple text-white font-bold px-8 py-3 hover:bg-[#B088FF]">
            在 Discord 获取支持 →
          </a>
        </div>
      </div>
    </section>
  );
}
