import { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Kallithea, Athens | Neighborhood Guide | Hellenic Estates',
  description: 'Discover Kallithea - one of Athens\' most desirable neighborhoods. Located 4km from the city center with excellent transport, shopping, and investment potential.',
};

export default function KallitheaPage() {
  const amenities = [
    {
      category: 'Transport',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        'Two metro stations (Kallithea & Tavros)',
        '15 minutes to city center',
        'Tram connection to coast',
        'Easy airport access',
        'Multiple bus routes',
      ],
    },
    {
      category: 'Lifestyle',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      items: [
        'Walking distance to all shopping',
        'Vibrant cafe culture',
        'Traditional tavernas',
        'Modern shopping centers',
        'Gyms and sports facilities',
      ],
    },
    {
      category: 'Culture',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      items: [
        'Historic Stavros Niarchos Foundation',
        'National Library of Greece',
        'Greek National Opera',
        'Local art galleries',
        'Annual cultural festivals',
      ],
    },
    {
      category: 'Services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: [
        'International schools nearby',
        'Quality healthcare facilities',
        'Banks and financial services',
        'Supermarkets and markets',
        'Post offices and utilities',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/area/kallithea-hero.webp')",
            backgroundColor: '#1e40af',
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-navy text-white px-4 py-2 text-sm font-semibold mb-6">
              South Athens
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Kallithea
            </h1>
            <p className="text-xl text-white/80">
              A vibrant neighborhood combining urban convenience with Mediterranean charm, just 4km from Athens city center.
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
                Discover Kallithea
              </h2>
              <p className="text-charcoal text-lg mb-6">
                Kallithea, meaning &quot;beautiful view&quot; in Greek, is one of Athens&apos; most sought-after residential neighborhoods. Located in the southern suburbs, it offers the perfect balance between city living and coastal relaxation.
              </p>
              <p className="text-charcoal text-lg mb-6">
                The area has undergone significant regeneration in recent years, with modern infrastructure, improved public spaces, and a thriving local economy. It&apos;s particularly popular with young professionals and families seeking quality housing with excellent transport connections.
              </p>
              <p className="text-charcoal text-lg">
                For property investors, Kallithea represents an attractive opportunity with strong rental demand from students, professionals, and tourists, combined with excellent capital growth potential as the area continues to develop.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/area/kallithea-1.webp"
                  alt="Kallithea streets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/area/kallithea-2.webp"
                  alt="Kallithea neighborhood"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/area/kallithea-3.webp"
                  alt="Kallithea cafes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">4km</div>
              <div className="text-white/70">From City Center</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">15min</div>
              <div className="text-white/70">Metro to Syntagma</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">100k+</div>
              <div className="text-white/70">Residents</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">€250k</div>
              <div className="text-white/70">Golden Visa Threshold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Why Invest in Kallithea?
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Kallithea offers compelling investment fundamentals for property buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Growing Demand
              </h3>
              <p className="text-charcoal">
                Strong rental demand from students and professionals ensures consistent occupancy and yields of 4-6% annually.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Infrastructure Development
              </h3>
              <p className="text-charcoal">
                Recent and ongoing improvements include metro expansion, new cultural facilities, and urban regeneration projects boosting property values.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Golden Visa Qualifying
              </h3>
              <p className="text-charcoal">
                Kallithea remains in the €250,000 Golden Visa zone, making it one of the most affordable areas for EU residency through property investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Local Amenities
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Everything you need within walking distance or a short metro ride away.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((category, index) => (
              <div key={index} className="bg-cream rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-navy">{category.icon}</div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-charcoal">
                      <svg className="w-5 h-5 text-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Location
            </h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25186.03574667963!2d23.69121!3d37.95091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb8466b6f1c9%3A0x400bd2ce2b97a20!2sKallithea%2C%20Greece!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-6">
            Ready to Explore Kallithea Properties?
          </h2>
          <p className="text-xl text-charcoal mb-10">
            Browse our selection of Golden Visa eligible properties in this prime Athens location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/properties">
              View Properties
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Schedule a Visit
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
