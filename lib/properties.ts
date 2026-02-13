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
  deliveryDate?: string;
}

// Helper to generate image paths
function generateImagePaths(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/properties/${folder}/image-${i + 1}.jpg`);
}

export const properties: Property[] = [
  // ── LOFTS (listed first) ──────────────────────────────────────

  // New lofts — available, deliverable Jan 2027
  {
    id: '6',
    slug: 'loft-3',
    name: 'Modern Loft Conversion I',
    type: 'loft',
    price: 275000,
    size: 50,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A brand-new loft conversion in Kallithea, featuring industrial-inspired design with modern comforts. High ceilings, open-plan living, and premium finishes throughout. This property qualifies for the Greek Golden Visa at the €250,000 threshold. Larger layouts can be customized structurally to suit your needs — contact us to discuss options.',
    features: [
      'New construction',
      'High ceilings',
      'Open-plan living',
      'Modern kitchen',
      'Air conditioning',
      'Heating system',
      'Double-glazed windows',
      'Elevator building',
      'Security entrance',
      'Golden Visa eligible',
    ],
    images: generateImagePaths('loft-1', 10),
    video: '/images/properties/loft-3/video.mp4',
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Tavros',
    },
    goldenVisaEligible: true,
    status: 'available',
    deliveryDate: 'January 2027',
  },
  {
    id: '7',
    slug: 'loft-4',
    name: 'Modern Loft Conversion II',
    type: 'loft',
    price: 275000,
    size: 50,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A contemporary loft conversion offering the best of modern Athenian living. Thoughtfully designed with premium materials, soaring ceilings, and abundant natural light. This Golden Visa eligible property is perfect for investors seeking strong rental yields in a prime location. Larger layouts can be customized structurally — contact us to discuss options.',
    features: [
      'New construction',
      'High ceilings',
      'Open-plan living',
      'Modern kitchen',
      'Air conditioning',
      'Heating system',
      'Double-glazed windows',
      'Elevator building',
      'Security entrance',
      'Golden Visa eligible',
    ],
    images: generateImagePaths('loft-2', 10),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'available',
    deliveryDate: 'January 2027',
  },

  // Sold lofts
  {
    id: '4',
    slug: 'loft-1',
    name: 'Industrial Chic Loft',
    type: 'loft',
    price: 288000,
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
    status: 'sold',
  },
  {
    id: '5',
    slug: 'loft-2',
    name: 'Metropolitan Loft Suite',
    type: 'loft',
    price: 290000,
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
    status: 'sold',
  },

  // ── APARTMENTS (listed second) ────────────────────────────────

  // New apartments — available, deliverable Jan 2027
  {
    id: '8',
    slug: 'apartment-4',
    name: 'Kallithea Garden Apartment I',
    type: 'apartment',
    price: 260000,
    size: 50,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A beautifully designed new apartment in the heart of Kallithea. Modern finishes, efficient layout, and excellent natural light make this an ideal investment property. Qualifies for the Greek Golden Visa at the €250,000 threshold. Larger layouts can be customized structurally to suit your needs — contact us to discuss options.',
    features: [
      'New construction',
      'Modern kitchen',
      'Air conditioning',
      'Heating system',
      'Private balcony',
      'Double-glazed windows',
      'Elevator building',
      'Security entrance',
      'Storage room',
      'Golden Visa eligible',
    ],
    images: generateImagePaths('apartment-1', 10),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Tavros',
    },
    goldenVisaEligible: true,
    status: 'available',
    deliveryDate: 'January 2027',
  },
  {
    id: '9',
    slug: 'apartment-5',
    name: 'Kallithea Garden Apartment II',
    type: 'apartment',
    price: 260000,
    size: 50,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A contemporary apartment offering excellent value in one of Athens\' most desirable neighborhoods. Thoughtfully planned with quality finishes throughout, this property delivers strong rental potential and Golden Visa eligibility. Larger layouts can be customized structurally — contact us to discuss options.',
    features: [
      'New construction',
      'Modern kitchen',
      'Air conditioning',
      'Heating system',
      'Private balcony',
      'Double-glazed windows',
      'Elevator building',
      'Security entrance',
      'Storage room',
      'Golden Visa eligible',
    ],
    images: generateImagePaths('apartment-2', 10),
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'available',
    deliveryDate: 'January 2027',
  },

  // Sold apartments
  {
    id: '1',
    slug: 'apartment-1',
    name: 'City View Apartment',
    type: 'apartment',
    price: 260000,
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
    video: '/images/properties/apartment-1/video.mp4',
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Tavros',
    },
    goldenVisaEligible: true,
    status: 'sold',
  },
  {
    id: '2',
    slug: 'apartment-2',
    name: 'Olympus Court Residence',
    type: 'apartment',
    price: 262000,
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
    status: 'sold',
  },
  {
    id: '3',
    slug: 'apartment-3',
    name: 'Athena Court Suite',
    type: 'apartment',
    price: 295000,
    size: 70,
    bedrooms: 2,
    bathrooms: 1,
    description: 'A charming two-bedroom apartment ideal for families or those seeking extra space. The bright, airy interior features a generous living and dining area with large windows overlooking a quiet courtyard. The master bedroom includes an en-suite potential, while the second bedroom is perfect as a home office or guest room. Recently updated with modern fixtures throughout, this property offers exceptional value in one of Athens most sought-after neighborhoods.',
    features: [
      'Two bedrooms',
      'Courtyard view',
      'Updated 2023',
      'Split-level design',
      'Open-plan living',
      'Fitted kitchen',
      'Air conditioning',
      'Heating',
      'Building courtyard',
      'Secure parking',
    ],
    images: generateImagePaths('apartment-3', 17),
    video: '/images/properties/apartment-3/video.mp4',
    location: {
      area: 'Kallithea',
      city: 'Athens',
      nearestMetro: 'Kallithea',
    },
    goldenVisaEligible: true,
    status: 'sold',
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
