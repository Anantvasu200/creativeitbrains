import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/siteData.js';

function TestimonialCard({ item }) {
  return (
    <article className="relative flex min-h-[370px] w-[86vw] max-w-[520px] shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-[#11151b] p-7 text-left shadow-[0_28px_80px_rgba(0,0,0,0.3)] transition duration-200 hover:border-white/18 hover:bg-[#151b24] sm:w-[520px]">
      <div>
        <div className="mb-6 flex gap-1 text-[#0f6cff]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="fill-current" />
          ))}
        </div>

        <blockquote className="text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
          "{item.feedback}"
        </blockquote>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
          {item.avatar}
        </div>
        <div>
          <cite className="block text-sm font-semibold not-italic text-white">{item.name}</cite>
          <span className="text-xs font-medium text-white/42">{item.role}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#090b10] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Testimonials</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What clients say after delivery.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 lg:col-span-5">
            Feedback from teams that needed practical engineering help, cloud stability, and clear communication.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-44 bg-gradient-to-r from-[#090b10] via-[#090b10]/85 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-44 bg-gradient-to-l from-[#090b10] via-[#090b10]/85 to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              {carouselItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-${index}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
