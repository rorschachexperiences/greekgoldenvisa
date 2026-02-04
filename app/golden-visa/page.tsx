import { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Greek Golden Visa Guide | EU Residency Through Property Investment',
  description: 'Complete guide to the Greek Golden Visa program. Invest €250,000 in property and gain EU residency for your entire family. Learn about requirements, benefits, and application process.',
};

export default function GoldenVisaPage() {
  const benefits = [
    {
      title: 'Visa-Free Schengen Travel',
      description: 'Travel freely across 27 Schengen countries without visa requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'No Minimum Stay Requirement',
      description: 'The Greek Golden Visa allows investors to maintain and renew their Greek residency permit without any minimum physical-presence requirement in Greece, provided the qualifying investment is retained.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Family Inclusion',
      description: 'Include your spouse, children under 21, and parents of both spouses in your application.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Path to Citizenship',
      description: 'While a Greek Golden Visa can form a pathway toward citizenship, citizenship is not automatic. Applicants must meet requirements such as actual residence in Greece, language and integration criteria, and other conditions set by Greek law.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Rental Income Potential',
      description: 'Long-term rental properties in Athens may provide stable income and competitive yields, with returns varying by neighborhood, pricing, and market conditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Healthcare & Education',
      description: 'Access world-class Greek healthcare and EU education institutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Property Selection',
      description: 'Browse our portfolio and select a Golden Visa eligible property that matches your investment goals. We provide detailed information and virtual tours.',
    },
    {
      number: '02',
      title: 'Due Diligence',
      description: 'Our legal partners conduct thorough property checks, verify ownership, and ensure all documentation is in order for a smooth transaction.',
    },
    {
      number: '03',
      title: 'Purchase & Transfer',
      description: 'Complete the purchase with notarial deed, register the property, and obtain your Greek tax number (AFM). Power of attorney available for remote completion.',
    },
    {
      number: '04',
      title: 'Visa Application',
      description: 'Submit your Golden Visa application with required documents. Processing typically takes 2-3 months, with initial permit valid for 5 years.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-med-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 text-sm font-semibold mb-6">
              European Residency Program
            </span>
            <h1 className="font-serif text-5xl font-bold mb-6">
              Greek Golden Visa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The Greek Golden Visa offers one of Europe&apos;s most attractive residency-by-investment programs. Invest from €250,000 in qualifying property conversions and secure EU residency for your entire family.
            </p>
            <CTAButton href="/properties">
              View Eligible Properties
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
                What is the Greek Golden Visa?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The Greek Golden Visa program, introduced in 2013, allows non-EU citizens to obtain Greek residency through real estate investment. It&apos;s one of the most popular residency-by-investment programs in Europe.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                With a minimum property investment of €250,000 for qualifying conversions (€800,000 in high-demand areas, €400,000 in areas with fewer than 3,100 residents), you and your family gain the right to live and travel freely within the Schengen Area. The program has no minimum stay requirements, making it ideal for investors who want to maintain their primary residence elsewhere. Note: Golden Visa holders may not take salaried employment in Greece, but may engage in business activities and remote work.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Requirement</h3>
                <p className="text-3xl font-serif font-bold text-med-blue">€250,000</p>
                <p className="text-gray-600 text-sm mt-1">
                  Minimum property investment in designated areas (including Kallithea)
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                Program Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  'Valid for 5 years, renewable indefinitely',
                  'No language or education requirements',
                  'Right to rent property for income',
                  'No requirement to relocate to Greece',
                  'Include extended family members',
                  'Pathway to permanent residency',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-med-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-stone-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Benefits of Greek Golden Visa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of investors choose Greece for their European residency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-med-blue mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A straightforward four-step process to obtain your Greek Golden Visa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-med-blue text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Greece */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Why Choose Greece?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '300+', label: 'Days of Sunshine' },
              { stat: '4-6%', label: 'Rental Yields' },
              { stat: '€250k', label: 'Minimum Investment' },
              { stat: '27', label: 'Schengen Countries' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-5xl font-bold text-amber-400 mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-gray-400">
                At the crossroads of Europe, Asia, and Africa, Greece offers unparalleled connectivity for business and travel.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3">Growing Economy</h3>
              <p className="text-gray-400">
                Greece&apos;s economy is recovering strongly with tourism and property markets showing consistent growth.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-3">Quality of Life</h3>
              <p className="text-gray-400">
                Enjoy Mediterranean lifestyle, world-renowned cuisine, ancient history, and beautiful landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
            Start Your Golden Visa Journey
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Our team of experts will guide you through every step of the process. Book a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/properties">
              View Properties
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'Who can apply for the Greek Golden Visa?',
                a: 'Any non-EU citizen who makes a qualifying real estate investment can apply. There are no nationality restrictions.',
              },
              {
                q: 'Can I work in Greece with a Golden Visa?',
                a: 'Golden Visa holders are not permitted to take up salaried employment in Greece, but may engage in business and investment activities, including company ownership and remote work.',
              },
              {
                q: 'How long does the application process take?',
                a: 'The entire process, from property selection to receiving your residence permit, typically takes 9-12 months.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-med-blue font-medium hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
