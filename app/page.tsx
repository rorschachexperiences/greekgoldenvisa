import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard';
import CTAButton from '@/components/CTAButton';
import { properties } from '@/lib/properties';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen, dramatic */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/general/hero.webp')",
            backgroundColor: '#0c1829',
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-24">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-6">
              Greek Golden Visa from €250,000
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1] text-white">
              Your Gateway to
              <span className="block text-gold">European Residency</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl font-light">
              Invest in premium Athens real estate and secure your family&apos;s future with Greek Golden Visa residency.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/properties">
                View Properties
              </CTAButton>
              <CTAButton href="/golden-visa" variant="secondary">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-4">
              Exclusive Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6">
              Golden Visa Properties
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-16">
            <CTAButton href="/properties" variant="secondary">
              View All Properties
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works - Dark section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-4">
              The Process
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              How It Works
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                step: '01',
                title: 'Select Your Property',
                description: 'Browse our curated selection of Golden Visa eligible properties. We guide you to the perfect investment.',
              },
              {
                step: '02',
                title: 'Complete Purchase',
                description: 'Our legal partners handle due diligence, contracts, and registration. Remote completion available.',
              },
              {
                step: '03',
                title: 'Receive Residency',
                description: 'Apply for your Golden Visa and enjoy EU residency benefits for your entire family.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-gold font-serif text-6xl font-light">{item.step}</span>
                <h3 className="font-serif text-2xl font-semibold text-white mt-6 mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-4">
                Why Greece
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-8">
                Benefits of Greek Golden Visa
              </h2>
              <div className="space-y-6">
                {[
                  'Visa-free travel across 27 Schengen countries',
                  'No minimum stay requirement',
                  'Include spouse, children, and parents',
                  'Path to EU citizenship after 7 years',
                  'Strong rental yields of 4-6% annually',
                  'Access to world-class healthcare and education',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-charcoal">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <CTAButton href="/golden-visa" variant="secondary">
                  Learn More
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/general/athens.webp"
                  alt="Athens cityscape"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/area/kallithea.webp"
                  alt="Kallithea neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-4">
                Prime Location
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-8">
                Kallithea, Athens
              </h2>
              <p className="text-charcoal leading-relaxed mb-8">
                Our properties are located in Kallithea, one of Athens&apos; most desirable neighborhoods. Just 4km from the city center, offering the perfect balance of urban convenience and Mediterranean lifestyle.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Direct metro to city center (15 min)',
                  'Walking distance to all shopping',
                  'Vibrant dining and café culture',
                  'Safe, family-friendly neighborhood',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
              <CTAButton href="/kallithea" variant="secondary">
                Explore Kallithea
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Subtle, refined */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '50+', label: 'Properties Sold' },
              { value: '100%', label: 'Visa Success Rate' },
              { value: '15+', label: 'Countries Served' },
              { value: '5★', label: 'Client Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-light text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-luxury uppercase text-sm mb-4">
            Start Your Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-navy mb-6">
            Ready to Invest?
          </h2>
          <p className="text-charcoal text-lg mb-12 leading-relaxed">
            Schedule a private consultation with our Golden Visa specialists and take the first step toward European residency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">
              Book a Consultation
            </CTAButton>
            <CTAButton
              href="https://wa.me/18034458545"
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
