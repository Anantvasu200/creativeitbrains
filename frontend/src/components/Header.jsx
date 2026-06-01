import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, servicesProvided } from '../data/siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#070809]/90 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md'
          : 'border-b border-white/8 bg-[#070809]/70 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          className="group flex h-11 items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 transition duration-200 hover:border-white/20 hover:bg-white/[0.06]"
          href="#top"
          aria-label="Creative IT Brains home"
        >
          <img
            className="h-7 w-auto object-contain"
            src="/logo.png"
            alt="Creative IT Brains"
            decoding="sync"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/68 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => {
            if (label === 'Services') {
              return (
                <div className="group relative animate-none" key={label}>
                  <a
                    className="inline-flex items-center gap-1.5 py-4 transition hover:text-white"
                    href={href}
                  >
                    {label}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  </a>
                  <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#0b0d10]/98 p-3 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-2">
                      {servicesProvided.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            className="flex items-start gap-3 rounded-lg p-3 text-left transition duration-200 hover:bg-white/[0.06]"
                            href="#services"
                            key={service.title}
                          >
                            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/[0.04] text-[#6ed9d0]">
                              <Icon size={16} />
                            </span>
                            <div>
                              <strong className="block text-xs font-semibold tracking-wide text-white">{service.title}</strong>
                              <span className="text-[10px] text-white/50 line-clamp-2 mt-0.5 font-normal leading-normal">{service.description}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                className="relative py-4 transition hover:text-white after:absolute after:bottom-2 after:left-0 after:h-px after:w-0 after:bg-white/70 after:transition-all after:duration-200 hover:after:w-full"
                href={href}
                key={label}
              >
                {label}
              </a>
            );
          })}

          <a
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-extrabold text-black transition duration-200 hover:bg-[#dff7f4]"
            href="#contact"
          >
            Get a Quote
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 lg:hidden"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-[#08090b]/98 px-4 py-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto grid gap-2 text-sm font-bold text-white/80" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <a
                  className="flex items-center justify-between rounded-lg px-4 py-3 transition hover:bg-white/[0.06] hover:text-white"
                  href={href}
                  key={label}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <ArrowUpRight size={14} className="text-white/40" />
                </a>
              ))}
              <a
                className="mt-4 rounded-lg bg-white py-3.5 text-center font-extrabold text-black"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
