import { motion } from 'framer-motion';
import { metrics } from '../data/siteData.js';

export default function Metrics() {
  return (
    <section className="relative z-20 bg-[#f7fbff] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white p-6"
            key={metric.label}
          >
            <strong className="block text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {metric.value}
            </strong>
            <h4 className="mt-3 text-sm font-semibold text-slate-950/82">
              {metric.label}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-950/45">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
