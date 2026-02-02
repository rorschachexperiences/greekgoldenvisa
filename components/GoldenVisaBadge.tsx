interface GoldenVisaBadgeProps {
  small?: boolean;
}

export default function GoldenVisaBadge({ small = false }: GoldenVisaBadgeProps) {
  if (small) {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Golden Visa
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg shadow-lg">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div>
        <span className="font-semibold">Golden Visa Eligible</span>
        <span className="block text-xs text-amber-100">Qualifies for EU Residency</span>
      </div>
    </div>
  );
}
