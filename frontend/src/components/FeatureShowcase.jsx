import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { showcaseItems } from '../data/siteData.js';

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="showcase" className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Selected Work</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Case studies that look at business outcomes first.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-slate-950/58 lg:col-span-5"
          >
            We focus on the parts clients actually use every day: reliable releases, readable dashboards, faster support flows, and infrastructure that is easier to maintain.
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200">
          {showcaseItems.map((item, index) => (
            <button
              key={item.company}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-b-2 px-4 py-4 text-sm font-semibold transition-all duration-200 ${
                activeIndex === index
                  ? 'border-[#0f6cff] text-slate-950'
                  : 'border-transparent text-slate-950/48 hover:text-slate-950'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className="grid lg:grid-cols-12">
                <div className="relative min-h-[360px] lg:col-span-7">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={showcaseItems[activeIndex].image}
                    alt={showcaseItems[activeIndex].title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/72 via-white/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-md bg-white/85 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                    <span className="size-2 rounded-full bg-[#0f6cff]" />
                    Production project
                  </div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 lg:col-span-5 lg:p-10">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f6cff]">
                    {showcaseItems[activeIndex].company}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                    {showcaseItems[activeIndex].title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-950/62 sm:text-base">
                    {showcaseItems[activeIndex].summary}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
                    {showcaseItems[activeIndex].stats.map(([value, label]) => (
                      <div className="bg-[#eff6ff] p-4" key={label}>
                        <strong className="block text-3xl font-semibold text-slate-950">{value}</strong>
                        <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-slate-950/52">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {showcaseItems[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-950/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-[#0f6cff]"
                    href="#contact"
                  >
                    Discuss similar work
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
