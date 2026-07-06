import React from "react";
import { Button } from "@/components/ui/Button";

interface Product {
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    title: "Abrasives",
    description: "Cutting disc, Grinding disc, Stringer brush, Cup twisted brush, Cup brush, Buffing wheel, Flap disc, Abrasives roll, Emery paper roll, Red line paper and cloth, Sanding belt, Abrasive sponge, Flab wheel, Velcro disc, Diamond blades, Abrasive mounted stone.",
    image: "/products/ABRASIVES.jpg",
  },
  {
    title: "Fire Retardant Materials",
    description: "Fire retardant tarpaulin [grey, orange] 300 gsm, 450 gsm, 600 gsm, 800 gsm, Fire blanket, Fire retardant tent, Canvas tarpaulin, Fire retardant Canvas tarpaulin, Fire retardant Canvas roll, Canvas tent, Fire retardant coverall, Dupont Nomex coverall, Shade net [heavy duty].",
    image: "/products/FIRE RETARDANT MATERIALS.jpg",
  },
  {
    title: "Personal Protective Equipments [PPE]",
    description: "safety coverall, safety shoes, safety goggles, Gloves, helmets, Dust mask, Filter mask, Half face mask, Aprons, Safety harness, Safety jackets, Face shields, Chemical filter mask, Ear muff and ear plug.",
    image: "/products/PERSONAL PROTECTIVE EQUIPMENTS[PPE].jpg",
  },
  {
    title: "Hospitality & Facility Consumables",
    description: "Washroom & Hygiene Consumables, Waste Bins & Liners, Cleaning Chemicals & Tools, Guest Amenities & Pantry, Facility Maintenance & Safety.",
    image: "/products/HOSPITALITY & FACILITY CONSUMABLES.jpg",
  },
  {
    title: "General Consumables",
    description: "Gloves-Nitrile, Latex, Vinyl, Polychloroprene, Masks, Gowns.",
    image: "/products/GENERAL CONSUMABLES.jpg",
  },
  {
    title: "Furnitures",
    description: "Desks, Office Chairs, Storage Solutions, Home furniture’s, Restaurant Furnitures, Tables, flooring, Shelving.",
    image: "/products/FURNITURES.jpg",
  },
  {
    title: "General Safety Equipment",
    description: "Solar warning light, Baton, Revolving light, Warning tape, PVC chain, Bollard, Traffic cone, Orange mesh, Beach umbrella, Water thermos, Safety road barrier, Eye wash station.",
    image: "/products/GENERAL SAFETY EQUIPMENT.jpg",
  },
  {
    title: "Lifting Materials",
    description: "Cargo lashing belt, webbing sling, load binder, mechanical jack, chain block, lever hoist, plane trolly, electric chain hoist, lifting clamp, pipe lifting clamp, manual and winch, Wire rope, Ss wire rope, Lifeline rope, Scaffolding, Scaffolding tools, Scaffolding tag.",
    image: "/products/LIFTING MATERIALS.jpg",
  },
];

export default function ProductDivisions() {
  return (
    <section id="products" className="w-full py-32 bg-[#DEEBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 reveal">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0F10] leading-tight">
            Our Extensive Product Portfolio
          </h2>
          <Button href="/contact" variant="tertiary" className="gap-2 group/arrow items-center whitespace-nowrap">
            <span>Send Bulk Inquiry</span>
            <span className="text-lg group-hover/arrow:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white group w-full flex flex-col justify-between cursor-pointer reveal"
                id={`product-item-${index}`}
              >
                {/* Top Image Panel - 4:3 Aspect Ratio */}
                <div className="p-2 w-full aspect-[4/3] overflow-hidden relative bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Bottom Text Panel */}
                <div className="p-5 flex flex-col gap-4 bg-white z-0 flex-grow justify-between">
                  <h3 className="text-lg font-bold tracking-tight text-[#0F0F10] truncate">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slb-blue font-bold text-xs tracking-widest uppercase">
                    <span>Explore</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>

                {/* Hover Slide-in Overlay (Blue Box) */}
                <div className="absolute inset-0 bg-slb-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 p-6 flex flex-col justify-between text-white">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200 line-clamp-4 font-light">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href={`/products#${product.title.toLowerCase().replace(/\[|\]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                      className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase hover:underline"
                    >
                      <span>Learn More</span>
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 9th Solid Blue Extra Card */}
          <a
            href="/contact"
            className="relative overflow-hidden bg-slb-blue border border-slb-blue group w-full flex flex-col justify-between p-8 text-white cursor-pointer hover:bg-slb-deep-blue transition-colors duration-300 min-h-[350px]"
            id="product-item-extra"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Custom Orders
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-snug">
                Explore Full Sourcing Portfolio
              </h3>
              <p className="text-sm text-slate-100 font-light leading-relaxed">
                Looking for custom specifications or bulk materials? Contact our sourcing specialists directly to request tailored quotes.
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase mt-4">
              <span>Contact Sourcing Team</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
