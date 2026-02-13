import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/properties';
import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Golden Visa Properties | Kallithea, Athens | Hellenic Estates',
  description: 'Browse our selection of Golden Visa eligible properties in Kallithea, Athens. Premium apartments and lofts starting from €250,000.',
};

export default function PropertiesPage() {
  const lofts = properties.filter((p) => p.type === 'loft');
  const apartments = properties.filter((p) => p.type === 'apartment');
  const availableCount = properties.filter((p) => p.status === 'available').length;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-gold text-navy px-4 py-2 text-sm font-semibold mb-6">
              All Properties Golden Visa Eligible
            </span>
            <h1 className="font-serif text-5xl font-bold text-white mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-white/70">
              Discover premium lofts and apartments in Kallithea, Athens. Each property qualifies for the Greek Golden Visa program and offers excellent rental potential.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-navy">{availableCount}</div>
              <div className="text-charcoal text-sm">Available Now</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-navy">€260k</div>
              <div className="text-charcoal text-sm">Starting Price</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-navy">50-70</div>
              <div className="text-charcoal text-sm">Size Range (m²)</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-navy">100%</div>
              <div className="text-charcoal text-sm">Visa Eligible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lofts Section */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-2">
              Lofts
            </h2>
            <p className="text-charcoal">
              Unique converted spaces with character, high ceilings, and modern amenities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lofts.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy mb-2">
              Apartments
            </h2>
            <p className="text-charcoal">
              Modern, fully-renovated apartments perfect for living or rental investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Looking for Something Larger?
          </h2>
          <p className="text-charcoal text-lg mb-8 leading-relaxed">
            Larger properties can be customized structurally to match your specific needs. Whether you need additional bedrooms, a different layout, or combined units, we can work with our architect to make it happen.
          </p>
          <CTAButton href="/contact">
            Contact Us to Discuss
          </CTAButton>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We have access to exclusive off-market properties. Contact us to discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
