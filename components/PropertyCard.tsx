import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <div className="bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:border-gold/30">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0] || '/images/general/placeholder.jpg'}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {property.goldenVisaEligible && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-navy/90 backdrop-blur-sm text-gold px-3 py-1.5 text-xs font-medium tracking-wide">
                Golden Visa
              </span>
            </div>
          )}
          {property.status === 'sold' && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center bg-red-600 text-white px-3 py-1.5 text-xs font-bold tracking-wide uppercase">
                Sold
              </span>
            </div>
          )}
          {property.status === 'available' && property.deliveryDate && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center bg-gold/90 backdrop-blur-sm text-navy px-3 py-1.5 text-xs font-medium tracking-wide">
                Delivery {property.deliveryDate}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <span className="text-gold font-medium tracking-luxury uppercase text-xs">
              {property.type}
            </span>
            <span className="text-charcoal/50 text-xs tracking-wide">
              {property.location.area}
            </span>
          </div>
          <h3 className="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
            {property.name}
          </h3>
          <div className="flex items-center gap-6 text-charcoal/60 text-sm mb-5">
            <span>{property.size} m²</span>
            <span>{property.bedrooms} Bed</span>
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex justify-between items-center pt-5 border-t border-gray-100">
            <div>
              <span className="font-serif text-2xl font-semibold text-navy">
                €{property.price.toLocaleString()}
              </span>
              {property.status === 'sold' && (
                <span className="ml-2 text-red-600 text-sm font-semibold">SOLD</span>
              )}
            </div>
            <span className="text-gold text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
