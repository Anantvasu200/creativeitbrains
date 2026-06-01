import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#070809] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ee6df]">Testimonials</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What clients say after delivery.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/58 lg:col-span-5"
          >
            Feedback from teams that needed practical engineering help, cloud stability, and clear communication.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1012] p-7 text-left transition duration-200 hover:border-white/18 hover:bg-[#111518]"
              key={item.name}
            >
              <div>
                <div className="flex gap-1 text-[#8ee6df] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>

                <blockquote className="text-base leading-7 text-white/76">
                  "{item.feedback}"
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                  {item.avatar}
                </div>
                <div>
                  <cite className="not-italic block font-semibold text-white text-sm">{item.name}</cite>
                  <span className="text-xs text-white/42 font-medium">{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
