import React from "react";

export default function Certifications() {
  const certs = [
    {
      name: "ISO 9001:2015",
      desc: "Quality Management System",
      img: "/certification/iso-2015.png",
    },
    {
      name: "ISO 14001:2015",
      desc: "Environmental Management System",
      img: "/certification/iso-14001.png",
    },
    {
      name: "ISO 45001:2018",
      desc: "Occupational Health & Safety",
      img: "/certification/iso-2018.png",
    },
    {
      name: "IAF Accreditation",
      desc: "International Accreditation Forum",
      img: "/certification/international_accreditation_forum.png",
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-24 bg-slate-50 border-t border-slb-border overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/60 reveal">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slb-blue">
              Standards & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#0F0F10] leading-tight">
              Internationally Certified <strong className="font-semibold text-slb-blue">Quality & Safety</strong>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm font-light leading-relaxed">
            Operating in accordance with recognized management standards, ensuring excellence, sustainability, and safety in every operation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 reveal">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 md:p-8"
            >
              <div className="w-24 h-24 md:w-38 md:h-38 flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cert.img}
                  alt={`${cert.name} - ${cert.desc}`}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-md font-extrabold uppercase tracking-widest text-[#0F0F10] mb-1">
                {cert.name}
              </h3>
              <p className="text-[14px] text-slate-700 leading-normal">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
