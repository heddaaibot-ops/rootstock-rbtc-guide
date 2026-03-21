
'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-rsk-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block bg-rsk-cyan text-rsk-text-dark text-3xl md:text-4xl font-bold px-8 py-4 uppercase">
            常见问题 FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 text-left font-bold text-base text-rsk-text-dark hover:bg-rsk-cream flex justify-between items-center transition-colors">
                <span>{faq.question}</span>
                <span className="text-rsk-orange text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-rsk-cream">
                  <p className="text-rsk-text-dark leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-rsk-text-dark mb-4 font-semibold">还有其他问题？</p>
          <a href="https://t.me/rootstockCNchat" target="_blank" rel="noopener noreferrer" className="inline-block bg-rsk-purple text-rsk-cream font-bold px-6 py-2 hover:bg-[#B088FF] transition-colors uppercase">
            在 RootstockCN 提问 →
          </a>
        </div>
      </div>
    </section>
  );
}
