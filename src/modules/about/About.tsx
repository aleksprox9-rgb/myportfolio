import { useTranslation } from 'react-i18next'
import { StatsSection, type StatItem } from './components/StatsSection'
import { AboutConfig } from './about.data';

export function About() {
    const { t } = useTranslation()
    const statsData = t(AboutConfig.path, { returnObjects: true }) as StatItem[];
    return (
        <section className='w-full flex justify-center py-24'>
            <div className='max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center'>
                {/* Left side */}
                <div className='space-y-6'>
                    <h2 className='text-4xl font-semibold tracking-tight'>
                        {t('body.about.title')}
                    </h2>

                    <div className='w-36 h-[2px] bg-neutral-700' />

                    <p className='text-neutral-300 leading-relaxed whitespace-pre-line '>
                        {t('body.about.bio')}
                    </p>
                </div>

                {/* Right side */}
                <StatsSection data={statsData} />
            </div>
        </section>
    )
}