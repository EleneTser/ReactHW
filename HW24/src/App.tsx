import { useState } from "react";
import JobCard from "./Components/JobCard.tsx";
import Filter from "./Components/Filter.tsx";
import Header from './assets/Header.webp'

function App() {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (tag: string) => {
    setFilters((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const removeFilter = (tag: string) => {
    setFilters((prev) => prev.filter((n) => n !== tag));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="min-h-screen bg-teal-50">
      <div className="h-[156px] w-full overflow-hidden">
        <img src={Header} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="mx-auto max-w-[1110px] px-6 pb-16">
        <Filter filters={filters} onRemove={removeFilter} onClear={clearFilters} />

        <div className={filters.length > 0 ? "" : "mt-8"}>
          <JobCard filters={filters} onTagClick={addFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;