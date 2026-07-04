"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Westmark Trading Co. has consistently delivered high-grade PPE and lifting materials to our mega projects in Doha. Their speed of sourcing from international markets is unmatched.",
    author: "Senior Procurement Director",
    company: "Qatar Construction Consortium",
  },
  {
    quote: "Their commitment to fire retardant standards and quality abrasives has made them a trusted partner for our offshore marine operations. Reliable and professional.",
    author: "General Manager",
    company: "Gulf Energy & Marine Services",
  },
  {
    quote: "We rely on Westmark for our hospitality and facility consumables. Their attention to detail and consistent supply chains have significantly improved our operational efficiency.",
    author: "Facilities & Operations Director",
    company: "Doha Hospitality Group",
  },
  {
    quote: "The fire retardant canvas covers and safety tents provided by Westmark have passed all safety audits with flying colors. A top-tier partner for safety compliance.",
    author: "Procurement Lead",
    company: "Qatar Petrochemical Services",
  },
  {
    quote: "Excellent quality office desks, safety storage solutions, and facility furniture. Delivered and installed on time, matching our corporate layouts.",
    author: "Workspace Manager",
    company: "Doha Business Centers",
  },
  {
    quote: "Westmark's response time for bulk warning lights, barriers, and roadway safety gear saved our project timeline during critical roadwork phases.",
    author: "Infrastructure Project Manager",
    company: "Qatar Rail Contracting Partner",
  },
  {
    quote: "Consistent supply of high-grade safety shoes, coveralls, and helmets. Westmark has been our sole PPE supplier for the past three years.",
    author: "HSE Director",
    company: "Gulf Industrial Projects",
  },
  {
    quote: "Exceptional service in supplying guest amenities, washroom consumables, and cleaning chemicals. A reliable and highly professional supply partner.",
    author: "Sourcing Director",
    company: "Al Raya Hospitality",
  },
];

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  // Get the two testimonials for the current page
  const currentPair = [
    testimonials[activePage * 2],
    testimonials[activePage * 2 + 1],
  ];

  return (
    <section className="relative w-full py-32 bg-slate-50 border-b border-slb-border overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes waveFloat1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 10px) scale(1.03); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes waveFloat2 {
          0% { transform: translate(0, 0) scale(1.03); }
          50% { transform: translate(30px, -10px) scale(0.97); }
          100% { transform: translate(0, 0) scale(1.03); }
        }
        .animate-wave-1 {
          animation: waveFloat1 20s ease-in-out infinite;
        }
        .animate-wave-2 {
          animation: waveFloat2 25s ease-in-out infinite;
        }
      `}} />

      {/* Animated Dragon Wave SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <svg
          className="absolute right-[-10%] top-[-10%] w-[60%] h-[120%] text-slb-blue/10 animate-wave-1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <path d="M0,20 Q15,5 30,20 T60,20 T90,20 T120,20" />
          <path d="M0,35 Q15,20 30,35 T60,35 T90,35 T120,35" />
          <path d="M0,50 Q15,35 30,50 T60,50 T90,50 T120,50" />
          <path d="M0,65 Q15,50 30,65 T60,65 T90,65 T120,65" />
          <path d="M0,80 Q15,65 30,80 T60,80 T90,80 T120,80" />
        </svg>

        <svg
          className="absolute right-[-20%] bottom-[-10%] w-[70%] h-[120%] text-slb-blue/5 animate-wave-2"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
        >
          <path d="M0,25 Q20,10 40,25 T80,25 T120,25" />
          <path d="M0,45 Q20,30 40,45 T80,45 T120,45" />
          <path d="M0,65 Q20,50 40,65 T80,65 T120,65" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header placed to the top */}
        <div className="flex flex-col gap-4 mb-16 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slb-blue">
            Client Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0F10] leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-600 leading-relaxed font-light max-w-2xl">
            We have established long-term relationships with leading developers, contractors, and hospitality management firms across the region.
          </p>
        </div>

        {/* Testimonials displayed 2 at a time below the header */}
        <div className="flex flex-col gap-12 reveal reveal-delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {currentPair.map((testimonial, idx) => {
              if (!testimonial) return null;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col gap-6 bg-slb-blue text-white p-8 border border-slb-blue/15 min-h-[220px] justify-between transition-all duration-500 ease-in-out hover:bg-slb-deep-blue"
                >
                  <div>
                    <span className="text-5xl font-serif text-white/30 leading-none select-none">“</span>
                    <p className="text-base md:text-lg text-slate-100 italic font-light leading-relaxed -mt-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 border-t border-white/10 pt-4">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-xs font-extrabold tracking-wider text-white uppercase">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs text-blue-200">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls & Indicators */}
          <div className="flex justify-between items-center mt-6 border-t border-slate-200/60 pt-8">
            {/* Controls (Left) */}
            <div className="flex gap-3">
              <button
                disabled={activePage === 0}
                onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  activePage === 0
                    ? "bg-slate-100 cursor-not-allowed"
                    : "bg-slate-200/70 hover:bg-slate-300/80 cursor-pointer"
                }`}
                aria-label="Previous testimonials"
              >
                <svg
                  className={`w-5 h-5 ${activePage === 0 ? "text-slate-300" : "text-slb-blue"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                disabled={activePage === totalPages - 1}
                onClick={() => setActivePage((prev) => Math.min(totalPages - 1, prev + 1))}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  activePage === totalPages - 1
                    ? "bg-slate-100 cursor-not-allowed"
                    : "bg-slate-200/70 hover:bg-slate-300/80 cursor-pointer"
                }`}
                aria-label="Next testimonials"
              >
                <svg
                  className={`w-5 h-5 ${activePage === totalPages - 1 ? "text-slate-300" : "text-slb-blue"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicators (Right) */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePage(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                    idx === activePage ? "bg-slb-blue" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
