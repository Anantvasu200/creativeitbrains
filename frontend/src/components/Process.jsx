import { motion } from 'framer-motion';
import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Execution Pipeline</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A clear path from discovery to launch.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-slate-950/58 lg:col-span-5"
          >
            Structured delivery loops keep scope, engineering quality, release planning, and support expectations visible from the start.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
          {processSteps.map((step, index) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-xl border border-slate-200 bg-white p-7 text-left transition duration-200 hover:border-sky-200 hover:bg-[#eff6ff]"
              key={step.step}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-slate-950">
                  {step.step}
                </span>
                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-950/48">
                  Phase {index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-950/52">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
