import { Link2, Mail } from 'lucide-react';
import { executiveTeam } from '../data/siteData.js';

export default function ExecutiveTeam() {
  return (
    <section id="team" className="bg-[#f7fbff] px-4 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-slate-200 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="grid gap-5 md:grid-cols-2">
          {executiveTeam.map((member, index) => (
            <article className={`${index === 2 ? 'md:translate-y-10' : ''} rounded-xl border border-slate-200 bg-white p-6 transition duration-200 hover:border-sky-200 hover:bg-[#eff6ff]`} key={member.name}>
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-lg border border-slate-200 bg-sky-50 text-base font-semibold text-slate-950">
                  {member.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{member.name}</h3>
                  <p className="text-sm font-medium text-slate-950/45">{member.role}</p>
                </div>
              </div>
              <p className="mt-8 leading-7 text-slate-950/58">{member.summary}</p>
              <div className="mt-5 flex gap-4 text-slate-950/50">
                <Mail size={18} />
                <Link2 size={18} />
              </div>
            </article>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6cff]">Executive Team</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">Leadership focused on delivery and growth.</h2>
          <p className="mt-5 text-base leading-8 text-slate-950/62 sm:text-lg">
            Our expert leaders guide strategy, customer communication, delivery planning, and international collaboration for Creative IT Brains.
          </p>
          <img className="mt-8 rounded-xl border border-slate-200" src="/team-modern.png" alt="Creative IT Brains executive team" />
        </div>
      </div>
    </section>
  );
}
