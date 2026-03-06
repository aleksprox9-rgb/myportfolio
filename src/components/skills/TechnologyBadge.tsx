import type { Technology } from "../../types";


export function TechnologyBadge({
  name,
  description,
}: Technology) {

  return (
    <div className="group relative px-3 py-1.5 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 cursor-default transition-transform hover:scale-105">
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

