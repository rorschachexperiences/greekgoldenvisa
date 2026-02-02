'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

const faqs = [
  {
    category: 'Golden Visa Program',
    questions: [
      {
        q: 'What is the minimum investment required for a Greek Golden Visa?',
        a: 'The minimum investment is €250,000 for properties in designated areas including Kallithea. Some prime areas of Athens (city center, northern suburbs) require €500,000. All our properties qualify at the €250,000 threshold.',
      },
      {
        q: 'Who can apply for the Greek Golden Visa?',
        a: 'Any non-EU/EEA citizen can apply. There are no nationality restrictions, language requirements, or educational prerequisites. You simply need to make a qualifying property investment and provide standard documentation.',
      },
      {
        q: 'Can I include my family in the Golden Visa application?',
        a: 'Yes. Your application can include your spouse, children under 21 years of age, and parents of both you and your spouse. All family members receive the same residency rights.',
      },
      {
        q: 'How long is the Golden Visa valid?',
        a: 'The initial residence permit is valid for 5 years and can be renewed indefinitely as long as you maintain ownership of the qualifying property.',
      },
      {
        q: 'Do I need to live in Greece to maintain my Golden Visa?',
        a: 'No. The Greek Golden Visa has no minimum stay requirement. You can maintain your residency without physically living in Greece, making it ideal for investors who want to keep their current residence while enjoying EU travel benefits.',
      },
      {
        q: 'Can I work in Greece with a Golden Visa?',
        a: 'Yes. The Golden Visa permits you to work, start a business, and conduct any professional activity in Greece.',
      },
    ],
  },
  {
    category: 'Property & Investment',
    questions: [
      {
        q: 'Can I rent out my Golden Visa property?',
        a: 'Yes. You are free to rent your property on long-term contracts or short-term platforms like Airbnb. Many of our clients generate 4-6% annual rental yields from their Athens properties.',
      },
      {
        q: 'What are the property purchase costs beyond the price?',
        a: 'Additional costs typically include: Transfer tax (3.09%), notary fees (1-1.5%), legal fees (1-2%), and registration fees (0.5%). We provide a detailed cost breakdown before you commit to any purchase.',
      },
      {
        q: 'Can I sell my property after getting the Golden Visa?',
        a: 'You must maintain ownership of your qualifying property to keep your Golden Visa. If you sell, you must purchase another qualifying property to maintain your residency status.',
      },
      {
        q: 'Do I need to visit Greece to buy property?',
        a: 'While we recommend visiting, you can complete the entire purchase remotely using a Power of Attorney. Our legal partners can represent you throughout the process.',
      },
      {
        q: 'What rental income can I expect?',
        a: 'Properties in Kallithea typically generate 4-6% gross rental yields. Short-term (Airbnb) rentals can achieve higher yields but require more management. We can connect you with property management services.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'How long does the entire process take?',
        a: 'From property selection to receiving your residence permit, the typical timeline is 3-6 months. This includes property purchase (1-2 months) and Golden Visa application processing (2-3 months).',
      },
      {
        q: 'What documents do I need for the application?',
        a: 'Key documents include: valid passport, property ownership proof, health insurance, background check, proof of funds, and biometric photos. Our team provides a complete checklist and assists with document preparation.',
      },
      {
        q: 'Do I need a Greek bank account?',
        a: 'Yes, you need a Greek bank account to complete the property purchase and for ongoing property management. We assist with bank account opening as part of our service.',
      },
      {
        q: 'What is the renewal process?',
        a: 'Renewal is straightforward. Submit a renewal application before your permit expires, demonstrate continued property ownership, and provide updated health insurance. The process is usually completed within weeks.',
      },
    ],
  },
  {
    category: 'Taxes & Legal',
    questions: [
      {
        q: 'What ongoing taxes will I pay?',
        a: 'Annual property tax (ENFIA) typically ranges from €2-5 per square meter depending on location and property characteristics. Rental income is taxed at progressive rates (15-45%). We recommend consulting with a Greek tax advisor.',
      },
      {
        q: 'Can I become a Greek citizen through the Golden Visa?',
        a: 'Yes. After 7 years of legal residency, you can apply for Greek citizenship. This requires passing a Greek language test and demonstrating integration. Citizenship grants full EU rights including voting and working anywhere in the EU.',
      },
      {
        q: 'Do I need a lawyer for the purchase?',
        a: 'We strongly recommend independent legal representation. Our partner lawyers specialize in Golden Visa transactions and can conduct due diligence, review contracts, and ensure your interests are protected.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-med-blue flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-med-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about the Greek Golden Visa program, property investment, and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-med-blue">
                {category.category}
              </h2>
              <div>
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-stone-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Our team is here to help. Book a free consultation and get personalized answers to your questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">
              Contact Us
            </CTAButton>
            <CTAButton
              href="https://wa.me/302101234567"
              variant="whatsapp"
              external
            >
              WhatsApp Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
