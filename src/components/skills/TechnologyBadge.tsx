import type { Technology } from "../../types";


export function TechnologyBadge({
  Icon,
  name,
  description,
}: Technology) {

  return (
    <div className="group flex flex-col items-center relative w-20 py-1.5 text-sm rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 cursor-default transition-transform hover:scale-105">
      <Icon size={32}/>

      {name}

      {description && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="rounded-xl p-3 text-xs shadow-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
            {description && (
              <p className="mb-2 leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

