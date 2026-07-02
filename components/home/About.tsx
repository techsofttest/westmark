import React from "react";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="w-full bg-white grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b border-slb-border">
      {/* Left Column - Content */}
      <div className="flex flex-col justify-center py-24 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-20 gap-8 reveal">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slb-blue">
            Sourcing
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0F10] leading-tight">
            Global <strong className="font-semibold text-slb-blue">Sourcing Solutions</strong>
          </h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed text-slate-600 font-light max-w-xl">
          With a strong international procurement network spanning UAE, India, China, USA, UK, Germany, Canada, and other major markets, we provide reliable sourcing solutions. Our commitment to excellence is reflected in our focus on quality, customer satisfaction, reliability, and professional service.
        </p>
        <div className="pt-2">
          <Button
            href="#products"
            variant="outline"
            className="gap-3 w-fit"
          >
            <span>View Product Divisions</span>
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>

      {/* Right Column - Full Bleed Image */}
      <div className="relative w-full min-h-[400px] lg:min-h-full bg-slate-100 overflow-hidden reveal-img-container reveal">
        <img
          src="/home-page/about2.png"
          alt="Global sourcing and shipping logistics cargo terminal representing Westmark solutions"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
