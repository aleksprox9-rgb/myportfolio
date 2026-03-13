import type { SkillCategory, Technology } from '@/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SKILLS } from '../skills.data';

type Props = Technology & {
  category: SkillCategory;
};

export function TechnologyBadge({
  id,
  icon,
  category,
}: Props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const baseKey = `${SKILLS.path}.${category}.technologies.${id}`

  return (
    <div
      className='group min-w-22 flex-1 h-22 flex justify-center items-center flex-col relative px-3 py-1.5 text-sm rounded-xl border border-neutral-600 bg-neutral-700 cursor-default transition-transform hover:scale-105 gap-3'
      onClick={() => setIsActive(v => !v)}
    >
      <icon.Component
        size={32}
        color={icon.color}
        className='opacity-80 group-hover:opacity-100 transition-opacity'
      />
      <span className='text-xs font-medium text-neutral-300'>
        {t(`${baseKey}.name`)}
      </span>

      <div className={`
        absolute left-1/2 bottom-full -translate-x-1/2 mb-3 w-48 pointer-events-none z-10 transition-all duration-200
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:group-hover:translate-y-0'}
      `}>
        <div className='rounded-xl p-2 text-sm shadow-xl border text-center border-neutral-700 bg-neutral-900'>
          {t(`${baseKey}.desc`)}
        </div>
      </div>
    </div>
  );
}
