import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard';
import CTAButton from '@/components/CTAButton';
import { properties } from '@/lib/properties';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/general/hero.jpg')",
            backgroundColor: '#1e40af',
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 text-sm font-semibold mb-6">
              Greek Golden Visa from €250,000
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to European Residency
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              Invest in premium Athens real estate and secure your family&apos;s future with Greek Golden Visa residency.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/properties">
                View Properties
              </CTAButton>
              <CTAButton href="/golden-visa" variant="secondary">
                Learn About Golden Visa
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-stone-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Golden Visa Eligible Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium apartments and lofts in Kallithea, Athens - all qualifying for the Greek Golden Visa program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/properties" variant="secondary">
              View All Properties
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your path to Greek Golden Visa residency in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-med-blue text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Choose Your Property</h3>
              <p className="text-gray-600">
                Browse our selection of Golden Visa eligible properties in prime Athens locations. We&apos;ll help you find the perfect investment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-med-blue text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Complete the Purchase</h3>
              <p className="text-gray-600">
                Our legal partners guide you through every step of the acquisition process, from due diligence to final registration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-med-blue text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Receive Your Residency</h3>
              <p className="text-gray-600">
                Upon completion, apply for your Golden Visa and enjoy the benefits of EU residency for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-med-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Why Choose Greek Golden Visa?
              </h2>
              <ul className="space-y-4">
                {[
                  'Visa-free travel across 27 Schengen countries',
                  'No minimum stay requirement to maintain residency',
                  'Include spouse, children under 21, and parents',
                  'Path to permanent residency and citizenship',
                  'Strong rental yields in Athens (4-6% annually)',
                  'Growing property market with capital appreciation',
                  'World-class healthcare and education access',
                  'Strategic location between Europe, Asia, and Africa',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/general/athens.jpg"
                alt="Athens cityscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/area/kallithea.jpg"
                alt="Kallithea neighborhood"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-med-blue font-semibold uppercase tracking-wide">
                Prime Location
              </span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mt-2 mb-6">
                Kallithea, Athens
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our properties are located in Kallithea, one of Athens&apos; most desirable neighborhoods. Just 4km from the city center, Kallithea offers the perfect balance of urban convenience and residential tranquility.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Direct metro connection to city center (15 min)',
                  'Walking distance to beaches',
                  'Excellent restaurants and cafes',
                  'Safe, family-friendly neighborhood',
                  'Growing expat community',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-med-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href="/kallithea" variant="secondary">
                Explore Kallithea
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Trusted by Investors Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-med-blue mb-2">50+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-med-blue mb-2">100%</div>
              <div className="text-gray-600">Visa Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-med-blue mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-med-blue mb-2">5★</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Book a free consultation with our Golden Visa specialists and take the first step toward European residency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">
              Schedule a Call
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
