import type { Technology } from "../../types";


export function TechnologyBadge({
  Icon,
  name,
  description,
}: Technology) {

  return (
    <div className='group min-w-22 flex-1 h-22 flex justify-center items-center flex-col relative px-3 py-1.5 text-sm rounded-xl border border-neutral-700 bg-neutral-800 cursor-default transition-transform hover:scale-105 gap-3'>
      <Icon size={32} />
      {name}
      {description && (
        <div className='absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
          <div className='rounded-xl p-3 text-sm shadow-lg border border-neutral-700 bg-neutral-900'>
            {description && (
              <p className='mb-2 leading-relaxed'>{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

