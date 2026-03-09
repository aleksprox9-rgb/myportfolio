import { useTranslation } from 'react-i18next'

export function About() {
    const { t } = useTranslation()
    return (
        <section className='w-full flex justify-center py-24'>
            <div className='max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center'>
                {/* Left side */}
                <div className='space-y-6'>
                    <h2 className='text-4xl font-semibold tracking-tight'>
                        {t('body.about.title')}
                    </h2>

                    <div className='w-36 h-[2px] bg-neutral-700'/>

                    <p className='text-neutral-300 leading-relaxed whitespace-pre-line '>
                        {t('body.about.bio')}
                    </p>
                </div>

                {/* Right side */}
                <div className='grid-cols-2 gap-6'>
                    <Stat number='1+' label='Years learning development'/>
                    <Stat number='10+' label='Techonologies used'/>
                    <Stat number='Fullstack' label='Development focus'/>
                    <Stat number='Clean Code' label='Architecture priority'/>
                </div>
            </div>
        </section>
    )
}

type StatProps = {
    number: string
    label: string
}

function Stat({ number, label }: StatProps) {
    return (
        <div className='p-6 m-4 rounded-2xl bg-neutral-900 border border-neutral-800'>
            <div className='text-2xl font-semibold'>{number}</div>
            <div className='text-sm text-neutral-400 mt-1'>{label}</div>
        </div>
    )
}