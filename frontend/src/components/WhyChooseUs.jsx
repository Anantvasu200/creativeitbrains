import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { aboutHighlights } from '../data/siteData.js';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-slate-200 pt-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]"
            >
              Why Choose Us
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Partner with engineers who prioritize business outcomes.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base leading-8 text-slate-950/62 sm:text-lg"
            >
              We combine deep technical expertise in artificial intelligence, cloud environments, and front-end user experience with strict project delivery discipline and transparent communication.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0f6cff] px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-[#005de0]"
                href="#contact"
              >
                Discuss Your Requirements
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {aboutHighlights.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl border border-slate-200 bg-white p-6 text-left transition duration-200 hover:border-sky-200 hover:bg-[#eff6ff]"
                key={title}
              >
                <div className="mb-6 grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-[#0f6cff]">
                  <Icon size={22} />
                </div>
                
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
                
                <p className="mt-3 text-sm leading-6 text-slate-950/52">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
