import { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Hellenic Estates | Greek Golden Visa Specialists',
  description: 'Learn about Hellenic Estates - your trusted partner for Greek Golden Visa property investments. Expert guidance, vetted properties, and full-service support.',
};

export default function AboutPage() {
  const services = [
    {
      title: 'Property Selection',
      description: 'Curated portfolio of Golden Visa eligible properties, all vetted for legal compliance and investment potential.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Legal Support',
      description: 'Partnership with experienced real estate lawyers who specialize in Golden Visa transactions and property law.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: 'Visa Processing',
      description: 'Complete assistance with Golden Visa application, document preparation, and submission to Greek authorities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Property Management',
      description: 'Optional ongoing management services including tenant placement, maintenance, and rental income collection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Tax & Financial Advisory',
      description: 'Connections to Greek tax advisors and financial planners to optimize your investment structure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Relocation Support',
      description: 'Assistance with settling in Greece including bank accounts, utilities, and local orientation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const partners = [
    { name: 'Legal Partners', description: 'Licensed Greek real estate lawyers' },
    { name: 'Notaries', description: 'Certified public notaries in Athens' },
    { name: 'Tax Advisors', description: 'Greek and international tax specialists' },
    { name: 'Banks', description: 'Major Greek banking institutions' },
    { name: 'Property Managers', description: 'Professional management companies' },
    { name: 'Insurance', description: 'Property and health insurance providers' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold text-white mb-6">
              About Hellenic Estates
            </h1>
            <p className="text-xl text-white/70">
              Your trusted partner for Greek Golden Visa property investments. We combine local expertise with international service standards to make your investment journey seamless.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <p className="text-charcoal text-lg mb-6">
                Hellenic Estates was founded with a simple mission: to help international investors navigate the Greek property market with confidence. We recognized that many potential Golden Visa investors were overwhelmed by the complexity of buying property abroad and obtaining residency.
              </p>
              <p className="text-charcoal text-lg mb-6">
                Our team brings together deep local knowledge of the Athens real estate market with extensive experience serving international clients. We speak your language, understand your concerns, and are committed to making your investment successful.
              </p>
              <p className="text-charcoal text-lg">
                Every property in our portfolio has been carefully vetted for legal compliance, investment potential, and Golden Visa eligibility. We only represent properties we would recommend to our own families.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/general/team.webp"
                alt="Hellenic Estates team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Architect */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/general/katerina.webp"
                      alt="Aikaterini Efthymiou"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">Positive Architects</h3>
                    <p className="text-navy font-medium">Design & Architecture Studio</p>
                  </div>
                </div>
                <div className="space-y-4 text-charcoal">
                  <p>
                    Our properties are designed and developed by <strong>Aikaterini Efthymiou</strong>, founder of Positive Architects in Athens. With expertise in commercial-to-residential conversions, Katerina transforms underutilized spaces into stunning modern residences.
                  </p>
                  <p>
                    Each property reflects her commitment to refined aesthetics, functional design, and quality craftsmanship. Her conversions are specifically structured to qualify for the Greek Golden Visa program at the €250,000 threshold.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Keramikos, Athens
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Licensed Architect
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold font-medium tracking-luxury uppercase text-sm mb-4 block">
                Our Development Partner
              </span>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Meet the Architect
              </h2>
              <p className="text-charcoal text-lg mb-6">
                Behind every property in our portfolio is the vision of an experienced architect who specializes in creating beautiful, functional spaces from commercial buildings.
              </p>
              <p className="text-charcoal text-lg mb-6">
                These conversions not only provide exceptional living spaces but also qualify for the lower €250,000 Golden Visa investment threshold, making European residency more accessible.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="font-serif text-3xl font-bold text-navy">10+</div>
                  <div className="text-charcoal/70 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-navy">50+</div>
                  <div className="text-charcoal/70 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-navy">100%</div>
                  <div className="text-charcoal/70 text-sm">Visa Eligible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Transparency
              </h3>
              <p className="text-charcoal">
                No hidden fees, no surprises. We provide complete cost breakdowns and honest assessments of every property.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Efficiency
              </h3>
              <p className="text-charcoal">
                We respect your time. Streamlined processes and responsive communication at every step.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Client Focus
              </h3>
              <p className="text-charcoal">
                Your success is our success. We build long-term relationships based on trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Comprehensive support throughout your Golden Visa journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-cream rounded-lg p-8">
                <div className="text-navy mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We work with trusted professionals to deliver a complete service.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">{partner.name}</h3>
                <p className="text-white/60 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal mb-10">
            Schedule a free consultation with our team and take the first step toward your Greek Golden Visa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">
              Book a Consultation
            </CTAButton>
            <CTAButton href="/properties" variant="secondary">
              View Properties
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
