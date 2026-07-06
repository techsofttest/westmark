import React from "react";
import { Button } from "@/components/ui/Button";

interface Country {
  name: string;
  flag: string;
}

const countries: Country[] = [
  { name: "UAE", flag: "/flags/United Arab Emirates (AE).png" },
  { name: "India", flag: "/flags/India (IN).png" },
  { name: "China", flag: "/flags/China (CN).png" },
  { name: "USA", flag: "/flags/United States of America (US).png" },
  { name: "UK", flag: "/flags/United Kingdom (GB).png" },
  { name: "Germany", flag: "/flags/Germany (DE).png" },
  { name: "Canada", flag: "/flags/Canada (CA).png" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-start bg-[#0F0F10] overflow-hidden">
      {/* Full-bleed background image with SLB-style overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden reveal-img-container reveal">
        <img
          src="/hero-section/bg.png"
          alt="Global logistics and modern industrial port representing Westmark Trading"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          decoding="async"
        />
        {/* Flat deep tone overlay - strict adherence to no drop shadows, clean borders */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10]/70 via-[#0F0F10]/30 to-transparent" />
      </div>

      {/* Text Container sits directly on the background */}
      <div className="relative max-w-7xl mx-auto px-6 w-full py-32 z-10">
        <div className="max-w-4xl flex flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              WESTMARK TRADING CO.
            </span>
          </h1>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button href="#products" variant="primary" id="hero-cta-primary">
              Explore Portfolio
            </Button>
            <Button href="/contact" variant="secondary" id="hero-cta-secondary">
              Request Quote
            </Button>
          </div>

          {/* Sourcing Countries List */}
          <div className="pt-10 flex flex-col gap-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Connected Sourcing Network
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              {countries.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm select-none">
                  <img
                    src="/laurel-wreath-icon/laurel-wreath-left.svg"
                    alt=""
                    className="h-5 w-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <img
                    src={c.flag}
                    alt={`${c.name} Flag`}
                    className="h-4 w-auto object-contain"
                  />
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase px-1">
                    {c.name}
                  </span>
                  <img
                    src="/laurel-wreath-icon/laurel-wreath-right.svg"
                    alt=""
                    className="h-5 w-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
