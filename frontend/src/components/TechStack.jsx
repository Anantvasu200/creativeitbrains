import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techCategories = {
  Frontend: [
    { name: 'React', label: 'RE' },
    { name: 'TypeScript', label: 'TS' },
    { name: 'Tailwind CSS', label: 'TW' }
  ],
  Backend: [
    { name: 'Node.js', label: 'NO' },
    { name: 'Python', label: 'PY' },
    { name: 'MongoDB', label: 'MO' },
    { name: 'Redis', label: 'RD' }
  ],
  DevOps: [
    { name: 'Docker', label: 'DO' },
    { name: 'Kubernetes', label: 'KU' },
    { name: 'Terraform', label: 'TF' },
    { name: 'Git & CI/CD', label: 'CI' }
  ],
  Cloud: [
    { name: 'AWS EC2', label: 'AW' },
    { name: 'Google Cloud', label: 'GC' },
    { name: 'Azure', label: 'AZ' },
    { name: 'Elasticsearch', label: 'ES' }
  ],
  'AI & Data': [
    { name: 'Python', label: 'PY' },
    { name: 'GPU Core', label: 'GP' }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

export default function TechStack() {
  const categories = Object.keys(techCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#070809] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ee6df]">Modern Ecosystem</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A stable stack for scalable product delivery.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/58 lg:col-span-5"
          >
            We choose proven frameworks and infrastructure tools that keep systems maintainable after launch.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative cursor-pointer border-b-2 px-4 py-4 text-sm font-semibold transition-colors duration-200 ${
                activeCategory === category
                  ? 'border-[#8ee6df] text-white'
                  : 'text-white/45 hover:text-white'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#8ee6df]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 justify-center max-w-[800px] mx-auto"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'
              }}
            >
              {techCategories[activeCategory].map((tool) => {
                return (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-[10px] rounded-xl border border-white/10 bg-[#0d1012] p-6 transition duration-200 hover:border-white/18 hover:bg-[#111518]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold text-[#8ee6df]">
                      {tool.label}
                    </div>
                    <span className="block select-none text-center text-[11px] font-semibold uppercase tracking-wide text-white/62">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
