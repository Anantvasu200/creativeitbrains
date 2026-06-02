import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackIcon from 'tech-stack-icons';

const techCategories = {
  Frontend: [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' }
  ],
  Backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Redis', icon: 'redis' }
  ],
  DevOps: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'Terraform', icon: 'terraform' },
    { name: 'Git & CI/CD', icon: 'git' }
  ],
  Cloud: [
    { name: 'AWS EC2', icon: 'aws' },
    { name: 'Google Cloud', icon: 'google' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Elasticsearch', icon: 'elastic' }
  ],
  'AI & Data': [
    { name: 'Python', icon: 'python' },
    { name: 'GPU Core', icon: 'nvidia' }
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
    <section id="tech-stack" className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-sky-100 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Modern Ecosystem</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A stable stack for scalable product delivery.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-slate-600 lg:col-span-5"
          >
            We choose proven frameworks and infrastructure tools that keep systems maintainable after launch.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-sky-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative cursor-pointer border-b-2 px-4 py-4 text-sm font-semibold transition-colors duration-200 ${
                activeCategory === category
                  ? 'border-[#0f6cff] text-slate-950'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#0f6cff]"
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
                    className="flex flex-col items-center justify-center gap-[10px] rounded-xl border border-sky-100 bg-white p-6 shadow-[0_12px_34px_rgba(15,108,255,0.08)] transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-sky-100 bg-sky-50 p-2">
                      <StackIcon name={tool.icon} variant="light" className="size-full" />
                    </div>
                    <span className="block select-none text-center text-[11px] font-semibold uppercase tracking-wide text-slate-600">
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
