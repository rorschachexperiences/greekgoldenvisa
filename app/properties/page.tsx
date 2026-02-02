import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/properties';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Golden Visa Properties | Kallithea, Athens | Hellenic Estates',
  description: 'Browse our selection of Golden Visa eligible properties in Kallithea, Athens. Premium apartments and lofts starting from €250,000.',
};

export default function PropertiesPage() {
  const apartments = properties.filter((p) => p.type === 'apartment');
  const lofts = properties.filter((p) => p.type === 'loft');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-med-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500 text-white px-4 py-2 text-sm font-semibold mb-6">
              All Properties Golden Visa Eligible
            </span>
            <h1 className="font-serif text-5xl font-bold mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-blue-100">
              Discover premium apartments and lofts in Kallithea, Athens. Each property qualifies for the Greek Golden Visa program and offers excellent rental potential.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-med-blue">{properties.length}</div>
              <div className="text-gray-600 text-sm">Properties Available</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-med-blue">€250k</div>
              <div className="text-gray-600 text-sm">Starting Price</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-med-blue">50-60</div>
              <div className="text-gray-600 text-sm">Size Range (m²)</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-med-blue">100%</div>
              <div className="text-gray-600 text-sm">Visa Eligible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-16 bg-stone-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              Apartments
            </h2>
            <p className="text-gray-600">
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

      {/* Lofts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              Lofts
            </h2>
            <p className="text-gray-600">
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
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
