interface GoldenVisaBadgeProps {
  small?: boolean;
}

export default function GoldenVisaBadge({ small = false }: GoldenVisaBadgeProps) {
  if (small) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-navy/90 backdrop-blur-sm text-gold px-3 py-1.5 text-xs font-medium tracking-wide">
        Golden Visa
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 bg-navy text-white px-6 py-4">
      <div className="w-px h-8 bg-gold" />
      <div>
        <span className="text-gold font-medium tracking-luxury uppercase text-xs block">
          Eligible
        </span>
        <span className="font-serif text-lg font-semibold">Golden Visa</span>
      </div>
    </div>
  );
}
