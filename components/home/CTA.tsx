import React from "react";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative w-full py-32 bg-[#0F0F10] text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0 overflow-hidden reveal-img-container reveal">
        <img
          src="/cta-bg/bg.png"
          alt="Industrial global logistics terminal backdrop"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/30 via-[#0F0F10]/80 to-[#0F0F10]/35" /> */}
      </div>

      {/* Full-height 'W' shape in the background using slanted lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 select-none overflow-hidden">
        {/* Stroke 1 */}
        <div className="absolute left-[20%] top-[-20%] bottom-[-20%] w-32 bg-slb-blue transform skew-x-[20deg]" />
        {/* Stroke 2 */}
        <div className="absolute left-[42%] top-[-20%] bottom-[-20%] w-32 bg-slb-blue transform -skew-x-[20deg]" />
        {/* Stroke 3 */}
        <div className="absolute left-[52%] top-[-20%] bottom-[-20%] w-32 bg-slb-blue transform skew-x-[20deg]" />
        {/* Stroke 4 */}
        <div className="absolute left-[74%] top-[-20%] bottom-[-20%] w-32 bg-slb-blue transform -skew-x-[20deg]" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col gap-8 items-center z-10 reveal">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
          Streamline Your <br /> Enterprise Supply Chain
        </h2>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-light">
          Connect with our technical sourcing specialists today to request custom quotes, <br /> schedule inspections, or discuss bulk procurement contracts.
        </p>
        <div className="pt-6">
          <Button href="/contact" variant="primary" className="px-10 py-5">
            Submit Sourcing Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
