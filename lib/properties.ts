export interface Property {
  id: string;
  slug: string;
  name: string;
  type: 'apartment' | 'loft';
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  video?: string;
  location: {
    area: string;
    city: string;
    nearestMetro: string;
  };
  goldenVisaEligible: boolean;
  status: 'available' | 'reserved' | 'sold';
}

// Helper to generate image paths
function generateImagePaths(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/properties/${folder}/image-${i + 1}.jpg`);
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'apartment-1',
    name: 'Aegean View Apartment',
    type: 'apartment',
    price: 250000,
    size: 50,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A beautifully renovated one-bedroom apartment in the heart of Kallithea. This modern residence features an open-plan living area with high ceilings, a fully equipped kitchen with premium appliances, and a private balcony with stunning city views. The bedroom is spacious with built-in wardrobes, and the bathroom boasts contemporary finishes. Located just 5 minutes walk from the metro, this property offers the perfect blend of comfort and convenience for those seeking a quality investment in Athens.',
    features: [
      'Renovated 2024',
      'Air conditioning',
      'Heating system',
      'Private balcony',
      'Elevator building',
      'Security entrance',
      'Double-glazed windows',
      'Modern kitchen',
      'Marble bathroom',
      'Storage room',
    ],
    images: generateImagePaths('apartment-1', 10),
    video: '/images/properties/apartment-1/video.mov',
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Tavros',
    },
    goldenVisaEligible: true,
    status: 'available',
  },
  {
    id: '2',
    slug: 'apartment-2',
    name: 'Olympus Court Residence',
    type: 'apartment',
    price: 255000,
    size: 52,
    bedrooms: 1,
    bathrooms: 1,
    description: 'An elegant one-bedroom apartment situated in a prime Kallithea location. This property showcases modern Greek design with clean lines and natural materials. The spacious living room opens onto a sun-drenched terrace, perfect for enjoying the Mediterranean climate. The kitchen features Italian cabinetry and granite countertops, while the bedroom offers a peaceful retreat with ample storage. Excellent rental potential due to its proximity to business districts and public transport.',
    features: [
      'Sun terrace',
      'Air conditioning',
      'Central heating',
      'Italian kitchen',
      'Granite countertops',
      'Built-in wardrobes',
      'Elevator',
      'Intercom system',
      'Private parking available',
      'Pet-friendly building',
    ],
    images: generateImagePaths('apartment-2', 16),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'available',
  },
  {
    id: '3',
    slug: 'apartment-3',
    name: 'Athena Gardens Suite',
    type: 'apartment',
    price: 260000,
    size: 55,
    bedrooms: 2,
    bathrooms: 1,
    description: 'A charming two-bedroom apartment ideal for families or those seeking extra space. The bright, airy interior features a generous living and dining area with large windows overlooking a quiet courtyard garden. The master bedroom includes an en-suite potential, while the second bedroom is perfect as a home office or guest room. Recently updated with modern fixtures throughout, this property offers exceptional value in one of Athens most sought-after neighborhoods.',
    features: [
      'Two bedrooms',
      'Garden view',
      'Updated 2023',
      'Split-level design',
      'Open-plan living',
      'Fitted kitchen',
      'Air conditioning',
      'Heating',
      'Building garden',
      'Secure parking',
    ],
    images: generateImagePaths('apartment-3', 17),
    video: '/images/properties/apartment-3/video.mov',
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'available',
  },
  {
    id: '4',
    slug: 'loft-1',
    name: 'Industrial Chic Loft',
    type: 'loft',
    price: 265000,
    size: 58,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A stunning converted loft space that combines industrial character with modern luxury. Original exposed brick walls and steel beams create a unique atmosphere, complemented by polished concrete floors and floor-to-ceiling windows. The mezzanine sleeping area overlooks the double-height living space below. A designer kitchen with island unit and premium appliances makes this property perfect for entertaining. Located in an up-and-coming area with excellent capital growth potential.',
    features: [
      'Double-height ceilings',
      'Exposed brick walls',
      'Steel beam features',
      'Polished concrete floors',
      'Mezzanine bedroom',
      'Designer kitchen',
      'Kitchen island',
      'Industrial windows',
      'Original features',
      'Secure entry',
    ],
    images: generateImagePaths('loft-1', 34),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Tavros',
    },
    goldenVisaEligible: true,
    status: 'available',
  },
  {
    id: '5',
    slug: 'loft-2',
    name: 'Metropolitan Loft Suite',
    type: 'loft',
    price: 270000,
    size: 60,
    bedrooms: 1,
    bathrooms: 1,
    description: 'An exceptional loft apartment offering the ultimate in contemporary urban living. This meticulously designed space features an open concept layout with soaring ceilings and abundant natural light from oversized windows. The living area flows seamlessly into a gourmet kitchen with top-of-the-line appliances and custom cabinetry. Upstairs, the private sleeping loft provides a serene retreat. Premium finishes throughout include hardwood floors, designer fixtures, and smart home technology. Perfect for discerning buyers seeking a distinctive property.',
    features: [
      'Smart home system',
      'Hardwood floors',
      'High ceilings',
      'Oversized windows',
      'City views',
      'Gourmet kitchen',
      'Custom cabinetry',
      'Designer bathroom',
      'Walk-in closet',
      'Private parking',
    ],
    images: generateImagePaths('loft-2', 25),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'available',
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
