'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" className="p-6 text-center pt-20 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-primary mb-6">Donate</h2>
      <p className="text-primary max-w-2xl mx-auto font-semibold mb-6">
        Your donation can change a child's life by providing them with the opportunity to receive a quality education.
      </p>

      {/* Hadith Section */}
      <p className="text-secondary italic font-medium max-w-lg mx-auto mb-6">
        "Charity does not decrease wealth"
        <span className="block text-gray-500 text-sm">(Sahih Muslim)</span>
      </p>

      {/* Donation Methods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:flex max-sm:flex-wrap max-sm:justify-center lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* JazzCash Box */}
        <div className="bg-[#3f9798] text-white p-6 rounded-lg max-sm:max-w-[320px] min-w-[251px] shadow-lg relative">
          <h3 className="text-xl font-bold mb-3">JazzCash</h3>
          <p className="text-sm font-medium">Account: 03024970776</p>
          <p className="text-sm">Account Title: Sohaib Sajjad Butt</p>
          <button
            onClick={() => copyToClipboard('03024970776', 'jazzcash')}
            className="absolute top-4 right-4 text-white transition duration-300 cursor-pointer"
          >
            <Copy size={20} />
          </button>
          {copied === 'jazzcash' && (
            <span className="text-xs text-[#55e8ea] absolute top-12 right-4">
              Copied!
            </span>
          )}
        </div>

        {/* EasyPaisa Box */}
        <div className="bg-[#016665] text-white p-6 rounded-lg max-sm:max-w-[320px] min-w-[251px] shadow-lg relative">
          <h3 className="text-xl font-bold mb-3">EasyPaisa</h3>
          <p className="text-sm font-medium">Account: 03024970776</p>
          <p className="text-sm">Account Title: Sohaib Sajjad Butt</p>
          <button
            onClick={() => copyToClipboard('03024970776', 'easypaisa')}
            className="absolute top-4 right-4 text-white transition duration-300 cursor-pointer"
          >
            <Copy size={20} />
          </button>
          {copied === 'easypaisa' && (
            <span className="text-xs text-[#7ed6d5] absolute top-12 right-4">
              Copied!
            </span>
          )}
        </div>

        {/* Meezan Bank Box */}
        <div className="bg-secondary text-white p-6 rounded-lg max-sm:max-w-[320px] min-w-[251px] shadow-lg relative">
          <h3 className="text-xl font-bold mb-3">Meezan Bank</h3>
          <p className="text-sm font-medium">Account: 02880106836967</p>
          <p className="text-sm">Account Title: Saad Ahmad</p>
          <button
            onClick={() => copyToClipboard('02880106836967', 'meezan')}
            className="absolute top-4 right-4 text-white transition duration-300 cursor-pointer"
          >
            <Copy size={20} />
          </button>
          {copied === 'meezan' && (
            <span className="text-xs text-[#86d8ff] absolute top-12 right-4">
              Copied!
            </span>
          )}
        </div>
      </div>

      {/* Donation Transparency Section */}
      <div className="bg-gray-100 p-6 mt-12 rounded-lg max-w-3xl mx-auto shadow-md">
        <h3 className="text-2xl font-bold text-primary mb-3">Donation Transparency</h3>
        <p className="text-gray-700">
          GCEP is committed to financial transparency. We publish regular reports on our
          <a href="https://www.facebook.com" className="text-blue-600 font-semibold hover:underline"> Facebook</a>&nbsp;
          &
          <a href="https://www.instagram.com" className="text-pink-600 font-semibold hover:underline"> Instagram</a>
          &nbsp;pages, detailing how donations are used.
        </p>
      </div>
    </section>
  );
};

export default Donate;
