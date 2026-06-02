import StackIcon from 'tech-stack-icons';

const techItems = [
  'React',
  'Node.js',
  'AWS',
  'Docker',
  'Kubernetes',
  'Python',
  'Terraform',
  'Elasticsearch',
  'TypeScript',
  'Redis',
  'MongoDB',
  'GitHub',
  'GitLab'
];

const techIcons = {
  React: 'react',
  'Node.js': 'nodejs',
  AWS: 'aws',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Python: 'python',
  Terraform: 'terraform',
  Elasticsearch: 'elastic',
  TypeScript: 'typescript',
  Redis: 'redis',
  MongoDB: 'mongodb',
  GitHub: 'github',
  GitLab: 'gitlab'
};

function TechBadge({ name }) {
  const iconName = techIcons[name];

  return (
    <div className="flex min-w-[150px] items-center gap-3 rounded-lg border border-sky-100 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,108,255,0.08)]">
      <span className="grid size-9 place-items-center rounded-md border border-sky-100 bg-sky-50 p-1.5">
        {iconName ? (
          <StackIcon name={iconName} variant="light" className="size-full" />
        ) : (
          name.slice(0, 2).toUpperCase()
        )}
      </span>
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  // Duplicate elements to create seamless infinite loop scroll
  const doubleItems = [...techItems, ...techItems];

  return (
    <section className="relative overflow-hidden border-y border-sky-100 bg-[#f7fbff] py-8 select-none">
      <div className="absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#f7fbff] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#f7fbff] to-transparent pointer-events-none" />

      <div
        className="relative z-10 flex flex-col gap-5 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        
        {/* Row 1: Scrolling Left */}
        <div className="flex h-[90px] items-center overflow-hidden">
          <div className="flex w-max gap-10 animate-marquee-left hover:[animation-play-state:paused] duration-[30s]">
            {doubleItems.map((item, idx) => {
              return (
                <TechBadge key={`r1-${idx}`} name={item} />
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex h-[90px] items-center overflow-hidden">
          <div className="flex w-max gap-10 animate-marquee-right hover:[animation-play-state:paused] duration-[30s]">
            {doubleItems.map((item, idx) => {
              return (
                <TechBadge key={`r2-${idx}`} name={item} />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
