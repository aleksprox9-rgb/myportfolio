import { Reveal } from "@/ui/Reveal";

export type StatItem = {
  label: string;
  value: string;
};

type StatsSectionProps = {
  data: StatItem[];
};

export function StatsSection({ data }: StatsSectionProps) {
  return (
    <div>
      {data.map((stat, index) => (
        <Reveal transition={{ delay: index * 0.1 + 0.2 }}>
          <Stat
            key={index}
            value={stat.value}
            label={stat.label}
          />
        </Reveal>
      ))}
    </div>
  );
}

type StatProps = {
  value: string;
  label: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="m-4 rounded-2xl border border-neutral-300/15 bg-neutral-600/10 p-6">
      <div className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
        {value}
      </div>
      <div className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">
        {label}
      </div>
    </div>
  );
}
