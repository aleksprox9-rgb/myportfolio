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
        <Stat
          key={index}
          value={stat.value}
          label={stat.label}
        />
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
    <div className="m-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  );
}
