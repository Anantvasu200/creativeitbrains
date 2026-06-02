import { CalendarDays, Clock, Newspaper } from 'lucide-react';

export default function BlogPlaceholder() {
  return (
    <section id="blog" className="relative overflow-hidden bg-[#090b10] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative mx-auto max-w-3xl border-t border-white/10 pt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Latest Blog</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Insights coming soon.</h2>
          <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
            We will add blog articles after some time. This section is ready for future company news, technology updates, and digital growth insights.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          {['AI transformation notes', 'Web and app engineering', 'Digital marketing updates'].map((title) => (
            <article className="rounded-xl border border-white/10 bg-[#11151b] p-7 transition duration-200 hover:border-white/18 hover:bg-[#151b24]" key={title}>
              <Newspaper className="mb-8 text-[#0f6cff]" size={28} />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/55">Blog content will be published here soon.</p>
              <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white/45">
                <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> Upcoming</span>
                <span className="inline-flex items-center gap-2"><Clock size={16} /> Soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
