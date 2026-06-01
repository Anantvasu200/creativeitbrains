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

function TechBadge({ name }) {
  return (
    <div className="flex min-w-[132px] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3">
      <span className="grid size-8 place-items-center rounded-md bg-white/[0.04] text-xs font-semibold text-[#8ee6df]">
        {name.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-xs font-semibold uppercase tracking-wide text-white/58">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  // Duplicate elements to create seamless infinite loop scroll
  const doubleItems = [...techItems, ...techItems];

  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#070809] py-8 select-none">
      <div className="absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#070809] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#070809] to-transparent pointer-events-none" />

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
