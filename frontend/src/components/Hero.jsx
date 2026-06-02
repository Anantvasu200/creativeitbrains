import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, CloudCog, Code2, ShieldCheck } from 'lucide-react';

const bulletPoints = [
  'Enterprise AI Systems & Agents',
  'Secure AWS/GCP DevOps Pipelines',
  'Zero-Downtime Microservices',
  '24/7 Proactive Managed Support'
];

function AnimatedHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,108,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(15,108,255,0.09) 1px, transparent 1px)',
          backgroundSize: '72px 72px'
        }}
        animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute left-[-20%] top-[18%] h-px w-[140%] bg-gradient-to-r from-transparent via-[#0f6cff]/45 to-transparent"
        animate={{ x: ['-12%', '12%'], opacity: [0.15, 0.55, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-10%] top-[58%] h-px w-[120%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        animate={{ x: ['10%', '-10%'], opacity: [0.1, 0.45, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {[
        ['12%', '24%', 0],
        ['28%', '76%', 1.5],
        ['70%', '20%', 0.8],
        ['86%', '66%', 2.1],
        ['55%', '48%', 1.1]
      ].map(([left, top, delay]) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute size-2 rounded-sm border border-[#0f6cff]/35 bg-white shadow-[0_0_18px_rgba(15,108,255,0.24)]"
          style={{ left, top }}
          animate={{ y: [-8, 8, -8], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      ))}

      <motion.div
        className="absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-[2rem] border border-sky-200/55 bg-white/20"
        animate={{ rotate: [0, 6, 0], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[42%] h-32 w-64 rounded-lg border border-sky-200/65 bg-white/25"
        animate={{ x: [-18, 18, -18], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15; // max 7.5deg
      const y = (clientY / window.innerHeight - 0.5) * -15;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f7fbff] px-4 pt-24 pb-14 text-slate-950 sm:px-6 sm:pt-28 lg:px-8"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        src="/creative-it-brains-demo.mp4"
        poster="/hero-ai-2026.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <AnimatedHeroBackground />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#f7fbff_0%,rgba(247,251,255,0.9)_42%,rgba(247,251,255,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-[#f7fbff] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="relative z-10 max-w-full text-left lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-[#0f6cff] pl-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">
            Creative IT Brains
          </div>

          <h1 className="max-w-4xl text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Practical software, cloud, and AI delivery for growing teams.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-950/72 sm:text-lg">
            We build production-ready web platforms, app experiences, AI workflows, and managed cloud operations without the noise of overbuilt technology.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0f6cff] px-7 py-3.5 font-bold text-white transition duration-200 hover:bg-[#005de0] sm:w-auto"
              href="#contact"
            >
              Start a Project <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3.5 font-bold text-slate-950 transition duration-200 hover:border-sky-300 hover:bg-sky-50 sm:w-auto"
              href="#services"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {bulletPoints.map((point) => (
              <div
                className="flex items-center gap-2.5 border-t border-slate-200 py-3 text-sm font-medium text-slate-950/76"
                key={point}
              >
                <CheckCircle2 className="shrink-0 text-[#0f6cff]" size={16} />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center lg:col-span-5 lg:flex">
          <div
            style={{
              rotateY: mousePos.x * 0.25,
              rotateX: mousePos.y * 0.25,
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
            className="relative w-full max-w-[470px] overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-[0_24px_80px_rgba(15,108,255,0.16)] transition-transform duration-200 ease-out"
          >
            <img className="h-64 w-full object-cover opacity-90" src="/hero-engineering.png" alt="Creative IT Brains engineering team" />
            <div className="grid grid-cols-3 border-t border-slate-200">
              {[
                [CloudCog, 'Cloud', 'Stable releases'],
                [Code2, 'Product', 'Clean builds'],
                [ShieldCheck, 'Security', 'Practical controls']
              ].map(([Icon, label, text]) => (
                <div className="border-r border-slate-200 p-4 last:border-r-0" key={label}>
                  <Icon className="mb-3 text-[#0f6cff]" size={18} />
                  <strong className="block text-sm text-slate-950">{label}</strong>
                  <span className="mt-1 block text-xs leading-5 text-slate-950/52">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
