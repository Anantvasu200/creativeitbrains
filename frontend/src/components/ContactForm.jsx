import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { servicesProvided } from '../data/siteData.js';

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: 'Cloud Solutions',
  budget: '$10k - $25k',
  message: ''
};

const inputClass = 'min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white text-sm outline-none transition placeholder:text-white/24 focus:border-white/22 focus:ring-4 focus:ring-white/5 focus:bg-white/[0.05]';
const labelClass = 'grid gap-2 text-xs font-semibold text-white/68 tracking-wider uppercase text-left';

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submitLead(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending enquiry...' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to send enquiry.');
      }

      setStatus({ type: 'success', message: 'Enquiry sent successfully. We will get back to you shortly!' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070809] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ee6df]"
            >
              Start a Conversation
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Tell us what you want to build.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base leading-8 text-white/62 sm:text-lg"
            >
              Have a cloud migration, custom enterprise software request, or AI automation project? Share details, and our architecture managers will follow up within 24 hours.
            </motion.p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-lg bg-white/[0.03] text-[#8ee6df] border border-white/10">
                  <Mail size={18} />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider">Email Address</span>
                  <a href="mailto:info@creativeitbrains.com" className="text-sm font-semibold text-white hover:text-[#8ee6df] transition">
                    info@creativeitbrains.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-lg bg-white/[0.03] text-[#8ee6df] border border-white/10">
                  <Phone size={18} />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider">Support Line</span>
                  <span className="text-sm font-semibold text-white/68">Available on request for project partners</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-lg bg-white/[0.03] text-[#8ee6df] border border-white/10">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider">Global Operations</span>
                  <span className="text-sm font-semibold text-white/68">India and international remote hubs</span>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-[#0d1012] p-6">
              <h4 className="text-sm font-semibold text-white tracking-wide">What happens next?</h4>
              <ul className="mt-4 space-y-3 text-xs text-white/60 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#8ee6df] shrink-0" />
                  <span>Discovery & initial consultation call scheduled</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#8ee6df] shrink-0" />
                  <span>High-level technical solution design proposal draft</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#8ee6df] shrink-0" />
                  <span>Sprint planning kickoff and developer allocation</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              className="grid gap-5 rounded-xl border border-white/10 bg-[#0d1012] p-6 text-left sm:p-8 lg:p-10"
              onSubmit={submitLead}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Your Name
                  <input
                    className={inputClass}
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className={labelClass}>
                  Work Email
                  <input
                    className={inputClass}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="john@company.com"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Company Name
                  <input
                    className={inputClass}
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Enterprise Corp"
                    required
                  />
                </label>
                <label className={labelClass}>
                  Phone Number (Optional)
                  <input
                    className={inputClass}
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Requested Service
                  <select
                    className={inputClass}
                    name="service"
                    value={form.service}
                    onChange={updateField}
                  >
                    {servicesProvided.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Project Budget
                  <select
                    className={inputClass}
                    name="budget"
                    value={form.budget}
                    onChange={updateField}
                  >
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </label>
              </div>

              <label className={labelClass}>
                Project Brief & Details
                <textarea
                  className={`${inputClass} resize-y min-h-[120px]`}
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Describe your technical challenges, timeline requirements, and project scope..."
                  required
                />
              </label>

              <button
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white py-4 text-sm font-bold text-black transition duration-200 hover:bg-[#dff7f4] disabled:cursor-wait disabled:opacity-70"
                type="submit"
                disabled={status.type === 'loading'}
              >
                <Send size={16} />
                {status.type === 'loading' ? 'Sending Enquiry...' : 'Submit Enquiry'}
              </button>

              {status.message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`m-0 text-center font-bold text-xs mt-3 ${
                    status.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
