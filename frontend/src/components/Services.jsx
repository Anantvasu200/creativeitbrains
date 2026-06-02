import { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesProvided } from '../data/siteData.js';
import TiltCard from './TiltCard.jsx';

const serviceDetails = {
  'Cloud Solutions': {
    accent: '#0f6cff',
    tag: 'AWS / GCP',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-200" role="img" aria-label="Cloud Solutions">
        <title>Cloud Solutions</title>
        <path d="M34 36H14a8 8 0 01-1-15.95A10 10 0 0132 22h2a6 6 0 010 12z"/>
        <path d="M24 22v8M20 26l4-4 4 4"/>
      </svg>
    )
  },
  'DevOps & CI/CD': {
    accent: '#00f5e1',
    tag: 'Docker / Kubernetes',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="DevOps & CI/CD">
        <title>DevOps & CI/CD</title>
        <circle cx="12" cy="24" r="4"/>
        <circle cx="36" cy="14" r="4"/>
        <circle cx="36" cy="34" r="4"/>
        <path d="M16 22l16-6M16 26l16 6"/>
        <polyline points="22,38 18,42 14,38"/>
        <polyline points="22,10 18,6 14,10"/>
      </svg>
    )
  },
  'Cybersecurity': {
    accent: '#8a2be2',
    tag: 'Zero-Trust',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="Cybersecurity">
        <title>Cybersecurity</title>
        <path d="M24 4L8 10v12c0 10 7 19 16 22 9-3 16-12 16-22V10L24 4z"/>
        <path d="M17 24l4 4 8-9"/>
      </svg>
    )
  },
  'AI Automation': {
    accent: '#0f6cff',
    tag: 'LLM / Agents',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="AI Automation">
        <title>AI Automation</title>
        <rect x="14" y="16" width="20" height="18" rx="4"/>
        <circle cx="19" cy="23" r="2.5"/>
        <circle cx="29" cy="23" r="2.5"/>
        <path d="M19 29h10M10 22h4M34 22h4M20 16v-4M28 16v-4"/>
      </svg>
    )
  },
  'Web Development': {
    accent: '#00f5e1',
    tag: 'React / Next.js',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="Web Development">
        <title>Web Development</title>
        <rect x="6" y="10" width="36" height="26" rx="3"/>
        <line x1="6" y1="18" x2="42" y2="18"/>
        <circle cx="11" cy="14" r="1.5" fill={stroke} className="transition-all duration-200"/>
        <circle cx="16" cy="14" r="1.5" fill={stroke} className="transition-all duration-200"/>
        <circle cx="21" cy="14" r="1.5" fill={stroke} className="transition-all duration-200"/>
        <path d="M18 28l-4-4 4-4M30 20l4 4-4 4M22 30l4-8"/>
      </svg>
    )
  },
  'App Development': {
    accent: '#8a2be2',
    tag: 'React Native',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="App Development">
        <title>App Development</title>
        <rect x="16" y="4" width="16" height="40" rx="4"/>
        <line x1="16" y1="12" x2="32" y2="12"/>
        <line x1="16" y1="36" x2="32" y2="36"/>
        <circle cx="24" cy="40" r="1.5" fill={stroke} className="transition-all duration-200"/>
      </svg>
    )
  },
  'Digital Marketing': {
    accent: '#0f6cff',
    tag: 'SEO / Ads',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="Digital Marketing">
        <title>Digital Marketing</title>
        <path d="M8 28h7l15 8V12L15 20H8z"/>
        <path d="M15 28v8a4 4 0 004 4h2"/>
        <path d="M34 19a7 7 0 010 10"/>
        <path d="M39 14a14 14 0 010 20"/>
      </svg>
    )
  },
  'Managed IT Services': {
    accent: '#00f5e1',
    tag: '24/7 Support',
    svg: (stroke) => (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-200" role="img" aria-label="Managed IT Services">
        <title>Managed IT Services</title>
        <circle cx="24" cy="20" r="6"/>
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
        <path d="M34 14a6 6 0 010 12M14 14a6 6 0 000 12"/>
      </svg>
    )
  }
};

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const details = serviceDetails[service.title] || { accent: '#00f5e1', tag: 'Service', svg: () => null };

  const strokeColor = isHovered ? '#ffffff' : details.accent;

  const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const bgStyle = isHovered ? hexToRgba(details.accent, 0.12) : 'rgba(255, 255, 255, 0.04)';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="service-card h-full"
    >
      <TiltCard
        className="group relative flex h-full cursor-pointer flex-col justify-between rounded-xl border border-white/10 bg-[#11151b] p-6 text-left transition duration-200 hover:border-white/18 hover:bg-[#151b24]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: 'border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease'
        }}
      >
        <div>
          <div
            className="icon-wrap mb-6 grid size-12 place-items-center overflow-hidden rounded-lg border border-white/10 transition-all duration-300"
            style={{
              backgroundColor: bgStyle,
              transform: isHovered ? 'scale(1.04)' : 'scale(1)'
            }}
          >
            {details.svg(strokeColor)}
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-white">
            {service.title}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/60">
            {service.description}
          </p>
        </div>

        <div className="mt-6">
          <span className="tag inline-block self-start rounded-md border border-white/10 bg-[#11151b] px-2.5 py-1 text-xs font-semibold text-white/54">
            {details.tag}
          </span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#090b10] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Services</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Engineering support across the full product lifecycle.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/58 lg:col-span-5"
          >
            From cloud infrastructure to custom apps and AI automation, the work is scoped around maintainability, performance, and measurable operational value.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesProvided.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
