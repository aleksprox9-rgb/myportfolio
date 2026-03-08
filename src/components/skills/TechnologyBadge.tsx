import { useState } from 'react';
import type { Technology } from "../../types";


export function TechnologyBadge({
  Icon,
  name,
  description,
  color,
}: Technology) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className='group min-w-22 flex-1 h-22 flex justify-center items-center flex-col relative px-3 py-1.5 text-sm rounded-xl border border-neutral-600 bg-neutral-700 cursor-default transition-transform hover:scale-105 gap-3'
      onClick={() => setIsActive(v => !v)}
    >
      {color ? (
        <Icon size={32} style={{ color }} />
      ) : (
        <Icon size={32} />
      )}
      {name}
      {description && (
        <div className={
          'absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 pointer-events-none ' +
          'md:group-hover:opacity-100 md:opacity-0 md:transition-opacity ' +
          (isActive ? 'opacity-100' : 'opacity-0 transition-opacity')
        }>
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
