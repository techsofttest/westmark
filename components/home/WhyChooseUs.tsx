import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-slate-100 reveal">
          <div className="max-w-4xl flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slb-blue">
              Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0F10] leading-tight">
              Operational sourcing excellence delivering unmatched reliability, speed, and compliance across Qatar's core industries.
            </h2>
          </div>
          <div className="whitespace-nowrap">
            <a
              href="/#products"
              className="inline-flex items-center gap-2 text-slb-blue hover:text-slb-deep-blue font-bold text-xs tracking-widest uppercase group/arrow transition-colors duration-300"
            >
              <span>Explore our approach</span>
              <span className="text-sm group-hover/arrow:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* 3 Key Points Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6 reveal">
          <div className="flex flex-col gap-3 group">
            <svg className="w-8 h-8 text-slb-blue mb-2 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
            </svg>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0F0F10] group-hover:text-slb-blue transition-colors duration-300">
              Verified Global Network
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Direct access to manufacturers in the UAE, India, China, USA, UK, Germany, and Canada ensures highly competitive pricing and genuine materials.
            </p>
          </div>
          <div className="flex flex-col gap-3 group">
            <svg className="w-8 h-8 text-slb-blue mb-2 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l2 3h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" />
              <path d="M12 14l3-3m0 0l-3-3m3 3H7" />
            </svg>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0F0F10] group-hover:text-slb-blue transition-colors duration-300">
              End-to-End Logistics
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Seamless customs clearance, warehousing, and local transportation to job sites across Qatar with zero logistical friction.
            </p>
          </div>
          <div className="flex flex-col gap-3 group">
            <svg className="w-8 h-8 text-slb-blue mb-2 stroke-[1.25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
            </svg>
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0F0F10] group-hover:text-slb-blue transition-colors duration-300">
              Industry Certification
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              All supplied products meet international quality and safety benchmarks, certified for harsh industrial and marine environments.
            </p>
          </div>
        </div>

        {/* Bottom Image Panel with Absolute Blue Box Overlay */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden mt-8 group bg-slate-100 reveal-img-container reveal">
          <img
            src="/home-page/y-us.png"
            alt="Industrial quality assurance and inspection representing Westmark Trading standards"
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
          {/* Solid Blue Block Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-[350px] bg-slb-blue p-6 md:p-10 flex flex-col justify-between text-white z-10">
            <div className="flex flex-col gap-6">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                Improving performance in industrial supply chains.
              </h4>
            </div>
            <div className="pt-6">
              <a
                href="/#products"
                className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase group/btn-arrow hover:underline"
              >
                <span>Explore</span>
                <span className="text-sm group-hover/btn-arrow:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
