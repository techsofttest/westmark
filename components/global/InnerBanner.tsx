import React from "react";

interface InnerBannerProps {
  title: string;
  subtitle?: string;
}

export default function InnerBanner({ title, subtitle }: InnerBannerProps) {
  return (
    <section className="relative w-full h-[45vh] max-h-[60vh] flex items-center justify-center bg-slb-blue text-white overflow-hidden pt-28">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      
      {/* Full-height 'W' shape in the background using slanted lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 select-none overflow-hidden">
        {/* Stroke 1 */}
        <div className="absolute left-[20%] top-0 bottom-0 w-32 bg-white transform skew-x-[20deg]" />
        {/* Stroke 2 */}
        <div className="absolute left-[42%] top-0 bottom-0 w-32 bg-white transform -skew-x-[20deg]" />
        {/* Stroke 3 */}
        <div className="absolute left-[52%] top-0 bottom-0 w-32 bg-white transform skew-x-[20deg]" />
        {/* Stroke 4 */}
        <div className="absolute left-[74%] top-0 bottom-0 w-32 bg-white transform -skew-x-[20deg]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 w-full text-center z-10 reveal">
        <div className="flex flex-col gap-3 justify-center items-center">
          {subtitle && (
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200/80">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
            {title}
          </h1>
          <div className="w-12 h-1 bg-white/30 mt-4" />
        </div>
      </div>
    </section>
  );
}
