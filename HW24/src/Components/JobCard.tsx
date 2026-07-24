import data from "../data.json";
import type { Job } from "../Jobs";

interface JobCardProps {
  filters: string[];
  onTagClick: (tag: string) => void;
}

function JobCard({ filters, onTagClick }: JobCardProps) {
  const jobs: Job[] = data;

  const visibleJobs =
    filters.length === 0 ? jobs : jobs.filter((job) => filters.every((tag) => job.languages.includes(tag) || job.tools.includes(tag)));

  return (
    <div className="flex flex-col gap-8 p-6 md:gap-4 ">
      {visibleJobs.map((job) => (
        <div key={job.id} className="relative rounded-lg bg-white p-6 pt-10 shadow-md md:flex md:items-center md:justify-between md:gap-6 md:pt-6  ">
          {job.featured && <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg bg-[#5CA5A5]" />}

          <img src={job.logo} alt={job.company} className="absolute -top-6 left-6 h-12 w-12 rounded-full md:static md:h-14 md:w-14" />

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold text-teal-600">{job.company}</p>

              {job.new && <span className="rounded-full bg-teal-600 px-2 py-0.5 text-xs font-bold uppercase text-white">New!</span>}

              {job.featured && <span className="rounded-full bg-gray-900 px-2 py-0.5 text-xs font-bold uppercase text-white">Featured</span>}
            </div>

            <h1 className="mt-2 text-lg font-bold text-gray-900 hover:text-teal-600 cursor-pointer md:mt-1">{job.position}</h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 md:mt-2">
              <p>{job.postedAt}</p>
              <span>&bull;</span>
              <p>{job.contract}</p>
              <span>&bull;</span>
              <p>{job.location}</p>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:hidden" />

          <div className="hidden h-full w-px bg-gray-200 md:block" />

          <div className="flex flex-wrap gap-2 md:justify-end">
            {job.languages.map((language) => (
              <button key={language} onClick={() => onTagClick(language)} className="rounded-md bg-gray-100 px-3 py-1 text-sm font-bold text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">{language}</button>
            ))}

            {job.tools.map((tool) => (
              <button key={tool} onClick={() => onTagClick(tool)} className="rounded-md bg-gray-100 px-3 py-1 text-sm font-bold text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">{tool}</button>
            ))}
          </div>
        </div>
      ))}

      {visibleJobs.length === 0 && <p className="py-12 text-center text-gray-500">No jobs match your filters.</p>}
    </div>
  );
}

export default JobCard;