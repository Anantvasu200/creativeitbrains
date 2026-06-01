import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, CloudCog, Code2, ShieldCheck } from 'lucide-react';

const bulletPoints = [
  'Enterprise AI Systems & Agents',
  'Secure AWS/GCP DevOps Pipelines',
  'Zero-Downtime Microservices',
  '24/7 Proactive Managed Support'
];

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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070809] px-4 pt-24 pb-14 text-white sm:px-6 sm:pt-28 lg:px-8"
    >
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-18"
        src="/creative-it-brains-demo.mp4"
        poster="/hero-ai-2026.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#070809_0%,rgba(7,8,9,0.92)_42%,rgba(7,8,9,0.66)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-48 bg-gradient-to-t from-[#070809] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="relative z-10 max-w-full text-left lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-[#6ed9d0] pl-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8ee6df]">
            Creative IT Brains
          </div>

          <h1 className="max-w-4xl text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Practical software, cloud, and AI delivery for growing teams.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            We build production-ready web platforms, app experiences, AI workflows, and managed cloud operations without the noise of overbuilt technology.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-bold text-black transition duration-200 hover:bg-[#dff7f4] sm:w-auto"
              href="#contact"
            >
              Start a Project <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/14 bg-white/[0.03] px-7 py-3.5 font-bold text-white transition duration-200 hover:border-white/25 hover:bg-white/[0.07] sm:w-auto"
              href="#services"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {bulletPoints.map((point) => (
              <div
                className="flex items-center gap-2.5 border-t border-white/10 py-3 text-sm font-medium text-white/76"
                key={point}
              >
                <CheckCircle2 className="shrink-0 text-[#8ee6df]" size={16} />
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
            className="relative w-full max-w-[470px] overflow-hidden rounded-xl border border-white/10 bg-[#101316]/80 shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition-transform duration-200 ease-out"
          >
            <img className="h-64 w-full object-cover opacity-90" src="/hero-engineering.png" alt="Creative IT Brains engineering team" />
            <div className="grid grid-cols-3 border-t border-white/10">
              {[
                [CloudCog, 'Cloud', 'Stable releases'],
                [Code2, 'Product', 'Clean builds'],
                [ShieldCheck, 'Security', 'Practical controls']
              ].map(([Icon, label, text]) => (
                <div className="border-r border-white/10 p-4 last:border-r-0" key={label}>
                  <Icon className="mb-3 text-[#8ee6df]" size={18} />
                  <strong className="block text-sm text-white">{label}</strong>
                  <span className="mt-1 block text-xs leading-5 text-white/52">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
