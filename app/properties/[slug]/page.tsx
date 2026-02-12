import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import PropertyGallery from '@/components/PropertyGallery';
import GoldenVisaBadge from '@/components/GoldenVisaBadge';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';
import { properties, getPropertyBySlug, getAllPropertySlugs } from '@/lib/properties';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return { title: 'Property Not Found' };
  }

  return {
    title: `${property.name} | €${property.price.toLocaleString()} | Hellenic Estates`,
    description: `${property.type.charAt(0).toUpperCase() + property.type.slice(1)} in ${property.location.area}, ${property.location.city}. ${property.size}m², ${property.bedrooms} bedroom(s). Golden Visa eligible property.`,
  };
}

export default function PropertyPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const otherProperties = properties.filter((p) => p.id !== property.id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-dark pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-charcoal/70 hover:text-navy">
              Home
            </Link>
            <span className="text-charcoal/40">/</span>
            <Link href="/properties" className="text-charcoal/70 hover:text-navy">
              Properties
            </Link>
            <span className="text-charcoal/40">/</span>
            <span className="text-navy">{property.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Gallery & Details */}
            <div className="lg:col-span-2">
              <PropertyGallery images={property.images} propertyName={property.name} video={property.video} />

              {/* Property Header */}
              <div className="mt-8 pb-8 border-b">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-navy font-medium uppercase tracking-wide text-sm">
                      {property.type} in {property.location.area}
                    </span>
                    <h1 className="font-serif text-4xl font-bold text-navy mt-1">
                      {property.name}
                    </h1>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-4xl font-bold text-navy">
                      €{property.price.toLocaleString()}
                      {property.status === 'sold' && (
                        <span className="ml-3 text-red-600 text-2xl font-bold">SOLD</span>
                      )}
                    </div>
                    <span className="text-charcoal/70 text-sm">
                      €{Math.round(property.price / property.size).toLocaleString()}/m²
                    </span>
                  </div>
                </div>

                {property.goldenVisaEligible && (
                  <div className="mb-6">
                    <GoldenVisaBadge />
                  </div>
                )}

                {/* Quick Specs */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-cream rounded-lg p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-navy">
                      {property.size}
                    </div>
                    <div className="text-charcoal/70 text-sm">m²</div>
                  </div>
                  <div className="bg-cream rounded-lg p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-navy">
                      {property.bedrooms}
                    </div>
                    <div className="text-charcoal/70 text-sm">Bedroom{property.bedrooms !== 1 ? 's' : ''}</div>
                  </div>
                  <div className="bg-cream rounded-lg p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-navy">
                      {property.bathrooms}
                    </div>
                    <div className="text-charcoal/70 text-sm">Bathroom{property.bathrooms !== 1 ? 's' : ''}</div>
                  </div>
                  <div className={`rounded-lg p-4 text-center ${property.status === 'sold' ? 'bg-red-50' : 'bg-cream'}`}>
                    <div className={`font-serif text-2xl font-bold capitalize ${property.status === 'sold' ? 'text-red-600' : 'text-navy'}`}>
                      {property.status}
                    </div>
                    <div className="text-charcoal/70 text-sm">Status</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-8 border-b">
                <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                  About This Property
                </h2>
                <p className="text-charcoal leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="py-8 border-b">
                <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-charcoal">
                      <svg className="w-5 h-5 text-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="py-8">
                <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                  Location
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-charcoal">
                      {property.location.area}, {property.location.city}, Greece
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-charcoal">
                      Nearest Metro: {property.location.nearestMetro} Station
                    </span>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="rounded-lg overflow-hidden h-[300px] bg-cream-dark">
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
            </div>

            {/* Right Column - Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-white border rounded-lg p-6 shadow-lg">
                  <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                    Interested in this property?
                  </h3>
                  <div className="space-y-3">
                    <CTAButton href="/contact" className="w-full">
                      Request Brochure
                    </CTAButton>
                    <CTAButton href="/contact" variant="secondary" className="w-full">
                      Book a Viewing
                    </CTAButton>
                    <CTAButton
                      href="https://wa.me/302101234567"
                      variant="whatsapp"
                      external
                      className="w-full"
                    >
                      WhatsApp Us
                    </CTAButton>
                  </div>
                </div>

                {/* Golden Visa Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Golden Visa Eligible
                  </h3>
                  <p className="text-charcoal text-sm mb-4">
                    This property qualifies for the Greek Golden Visa program, granting EU residency to you and your family.
                  </p>
                  <Link href="/golden-visa" className="text-navy font-medium text-sm hover:underline">
                    Learn more about Golden Visa →
                  </Link>
                </div>

                {/* Contact Form */}
                <div className="bg-cream rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-4">
                    Quick Inquiry
                  </h3>
                  <ContactForm source="property-page" propertyName={property.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {otherProperties.length > 0 && (
        <section className="py-16 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-navy mb-8">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProperties.map((p) => (
                <Link key={p.id} href={`/properties/${p.slug}`} className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-3">
                      <div className="col-span-1 relative h-full min-h-[150px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{
                            backgroundImage: `url(${p.images[0] || '/images/general/placeholder.jpg'})`,
                            backgroundColor: '#e5e5e5',
                          }}
                        />
                      </div>
                      <div className="col-span-2 p-6">
                        <span className="text-navy text-sm font-medium uppercase">{p.type}</span>
                        <h3 className="font-serif text-xl font-semibold text-navy mt-1 group-hover:text-navy transition-colors">
                          {p.name}
                        </h3>
                        <div className="flex items-center gap-4 text-charcoal text-sm mt-2">
                          <span>{p.size} m²</span>
                          <span>{p.bedrooms} Bed</span>
                          <span>{p.bathrooms} Bath</span>
                        </div>
                        <div className="font-serif text-2xl font-bold text-navy mt-4">
                          €{p.price.toLocaleString()}
                          {p.status === 'sold' && (
                            <span className="ml-2 text-red-600 text-sm font-bold">SOLD</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
