interface FilterProps {
  filters: string[];
  onRemove: (tag: string) => void;
  onClear: () => void;
}

function Filter({ filters, onRemove, onClear }: FilterProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="relative z-10 -mt-6 mb-8 flex flex-wrap items-start justify-between gap-4 rounded-lg bg-white p-6 shadow-md md:items-center md:p-4">
      <div className="flex flex-wrap gap-3">
        {filters.map((tag) => (
          <span key={tag} className="flex items-center overflow-hidden rounded-md text-sm font-bold">
            <span className="bg-teal-50 px-3 py-1.5 text-teal-600">{tag}</span>
            <button onClick={() => onRemove(tag)} aria-label={`Remove ${tag} filter`} className="bg-teal-600 px-2 py-1.5 text-white hover:bg-gray-900 transition-colors">✕</button>
          </span>
        ))}
      </div>

      <button onClick={onClear} className="text-sm font-bold text-gray-500 underline hover:text-teal-600">Clear</button>
    </div>
  );
}

export default Filter;