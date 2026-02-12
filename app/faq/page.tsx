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
        a: 'The minimum investment is €250,000 for commercial-to-residential conversions and historic building restorations in designated areas including Kallithea. High-demand areas (Athens, Thessaloniki, popular islands) require €800,000, while areas with fewer than approximately 3,100 permanent residents require €400,000. All our properties qualify at the €250,000 threshold.',
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
        a: 'The Greek Golden Visa does not permit salaried employment in Greece. However, holders may own or invest in businesses, receive rental income, and work remotely for non-Greek employers. Separate authorization is required for employment in Greece.',
      },
      {
        q: 'How much does health insurance cost in Greece for Golden Visa applicants?',
        a: 'Health insurance is mandatory for Golden Visa applications and renewals. Most investors find that private health insurance premiums range roughly from €150 to €350 per year per adult for standard residency coverage, with variations depending on age and plan details. Family coverage will be higher but often offers discounts for multiple members on the same policy.',
      },
      {
        q: 'What does health insurance cover under the Greek Golden Visa?',
        a: 'Golden Visa applicants are required to maintain private health insurance valid in Greece. Standard policies typically cover hospitalization, emergency care, diagnostic tests, and basic medical treatment, with access to Greece\'s well-regarded private healthcare system. Coverage details vary by insurer and plan, and optional upgrades may be available for expanded services such as international coverage or outpatient benefits.',
      },
    ],
  },
  {
    category: 'Property & Investment',
    questions: [
      {
        q: 'Can I rent out my Golden Visa property?',
        a: 'Yes. Golden Visa properties may be rented on a long-term basis, subject to Greek rental regulations. Short-term rental platforms (such as Airbnb) are not permitted for properties qualifying under the Golden Visa program. Well-selected long-term rental properties in Athens may offer attractive rental income potential, with yields varying based on location, pricing, and market conditions.',
      },
      {
        q: 'What are the property purchase and Golden Visa costs beyond the purchase price?',
        a: 'In addition to the property price, buyers should budget for standard acquisition costs such as property transfer tax (currently 3.09%), notary fees (approximately 1–1.5%), legal fees (typically 1–2%), and land registry or cadastre registration fees (around 0.5%). For buyers pursuing the Greek Golden Visa, there are also immigration-related costs, including legal representation for the residency application, document preparation, translations, and government fees for visa issuance. In total, most Golden Visa buyers should expect overall additional costs of approximately €25,000, depending on the complexity of the purchase, number of family members included, and individual legal requirements. We work with a trusted team of Greek attorneys, notaries, and immigration professionals, and provide a clear, itemized cost breakdown before you commit to any purchase.',
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
        a: 'In areas such as Kallithea, well-selected long-term rental properties may achieve gross rental yields commonly estimated in the 4–6% range, depending on purchase price, condition, and market demand.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'How long does the entire process take?',
        a: 'From property selection to receiving your residence permit, the typical timeline is 9-12 months. The process starts with signing the contract and a downpayment of 10%, followed by a schedule of payments until the property is delivered with the deed and visa.',
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
        <span className="font-medium text-navy pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-navy flex-shrink-0 transition-transform ${
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
          <p className="text-charcoal">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/70">
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
              <h2 className="font-serif text-2xl font-bold text-navy mb-8 pb-4 border-b-2 border-navy">
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
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-charcoal mb-10">
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
