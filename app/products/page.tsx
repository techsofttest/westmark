import React from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import CTA from "@/components/home/CTA";
import ScrollReveal from "@/components/global/ScrollReveal";
import InnerBanner from "@/components/global/InnerBanner";
import { Button } from "@/components/ui/Button";
import ProductImageZoom from "@/components/ui/ProductImageZoom";

interface Product {
  title: string;
  description: string;
  image: string;
  items: string[];
}

const productsList: Product[] = [
  {
    title: "Abrasives",
    description: "High-quality industrial abrasives engineered for precision cutting, grinding, and surface preparation across demanding metal and fabrication applications.",
    image: "/products/ABRASIVES.jpg",
    items: [
      "Cutting disc",
      "Grinding disc",
      "Stringer brush",
      "Cup twisted brush",
      "Cup brush",
      "Buffing wheel",
      "Flap disc",
      "Abrasives roll",
      "Emery paper roll",
      "Red line paper and cloth",
      "Sanding belt",
      "Abrasive sponge",
      "Flab wheel",
      "Velcro disc",
      "Diamond blades",
      "Abrasive mounted stone"
    ]
  },
  {
    title: "Fire Retardant Materials",
    description: "Certified fire-resistant safety materials and protective barriers designed to withstand extreme thermal conditions in industrial and construction zones.",
    image: "/products/FIRE RETARDANT MATERIALS.jpg",
    items: [
      "Fire retardant tarpaulin [grey, orange] 300 gsm, 450 gsm, 600 gsm, 800 gsm",
      "Fire blanket",
      "Fire retardant tent",
      "Canvas tarpaulin",
      "Fire retardant Canvas tarpaulin",
      "Fire retardant Canvas roll",
      "Canvas tent",
      "Fire retardant coverall",
      "Dupont Nomex coverall",
      "Shade net [heavy duty]"
    ]
  },
  {
    title: "Personal Protective Equipments [PPE]",
    description: "Comprehensive head-to-toe personal safety gear complying with international safety standards to protect workers from job site hazards.",
    image: "/products/PERSONAL PROTECTIVE EQUIPMENTS[PPE].jpg",
    items: [
      "Safety coverall",
      "Safety shoes",
      "Safety goggles",
      "Gloves",
      "Helmets",
      "Dust mask",
      "Filter mask",
      "Half face mask",
      "Aprons",
      "Safety harness",
      "Safety jackets",
      "Face shields",
      "Chemical filter mask",
      "Ear muff and ear plug"
    ]
  },
  {
    title: "Hospitality & Facility Consumables",
    description: "Premium maintenance, sanitation, and guest pantry supplies to keep commercial facilities, offices, and hospitality settings clean, hygienic, and compliant.",
    image: "/products/HOSPITALITY & FACILITY CONSUMABLES.jpg",
    items: [
      "Washroom & Hygiene Consumables",
      "Waste Bins & Liners",
      "Cleaning Chemicals & Tools",
      "Guest Amenities & Pantry",
      "Facility Maintenance & Safety"
    ]
  },
  {
    title: "General Consumables",
    description: "High-grade protective disposable products and utility consumables suitable for healthcare, manufacturing, and industrial operations.",
    image: "/products/GENERAL CONSUMABLES.jpg",
    items: [
      "Gloves - Nitrile, Latex, Vinyl, Polychloroprene",
      "Masks",
      "Gowns"
    ]
  },
  {
    title: "Furnitures",
    description: "Durable, ergonomic, and aesthetic furniture solutions tailored for executive offices, commercial projects, homes, and restaurants.",
    image: "/products/FURNITURES.jpg",
    items: [
      "Desks",
      "Office Chairs",
      "Storage Solutions",
      "Home furniture",
      "Restaurant Furniture",
      "Tables",
      "Flooring",
      "Shelving"
    ]
  },
  {
    title: "General Safety Equipment",
    description: "Professional traffic management and road safety products engineered to organize worksites and warn pedestrians and drivers of hazards.",
    image: "/products/GENERAL SAFETY EQUIPMENT.jpg",
    items: [
      "Solar warning light",
      "Baton",
      "Revolving light",
      "Warning tape",
      "PVC chain",
      "Bollard",
      "Traffic cone",
      "Orange mesh",
      "Beach umbrella",
      "Water thermos",
      "Safety road barrier",
      "Eye wash station"
    ]
  },
  {
    title: "Lifting Materials",
    description: "Certified heavy lifting tackle and load lashing gear designed to secure heavy machinery and facilitate safe lifting in cargo operations.",
    image: "/products/LIFTING MATERIALS.jpg",
    items: [
      "Cargo lashing belt",
      "Webbing sling",
      "Load binder",
      "Mechanical jack",
      "Chain block",
      "Lever hoist",
      "Plane trolley",
      "Electric chain hoist",
      "Lifting clamp",
      "Pipe lifting clamp",
      "Manual and winch",
      "Wire rope",
      "SS wire rope",
      "Lifeline rope",
      "Scaffolding",
      "Scaffolding tools",
      "Scaffolding tag"
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] font-sans selection:bg-[#0014DC] selection:text-white flex flex-col antialiased">
      <ScrollReveal />
      <Header />
      <InnerBanner title="Our Products" subtitle="Extensive Sourcing Portfolio" />

      {/* Products Zigzag List Section */}
      <section className="w-full bg-white py-24 border-b border-slb-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {productsList.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const slug = product.title.toLowerCase().replace(/\[|\]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            return (
              <div
                key={idx}
                id={slug}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-stretch reveal scroll-mt-32`}
              >
                {/* Image Section (Half Width) */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-white overflow-hidden relative reveal-img-container shrink-0">
                  <ProductImageZoom src={product.image} alt={product.title} />
                </div>

                {/* Content Section (Half Width) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slb-blue">
                      Division {idx + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F0F10]">
                      {product.title}
                    </h2>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed">
                    {product.description}
                  </p>

                  <div className="w-full h-px bg-slate-150 my-2" />

                  {/* Bullet / chip list of specific items */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500">Included Materials & Parts</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {product.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-3.5 py-2 bg-slate-100/90 border border-slate-300/80 text-slate-900 text-xs font-medium tracking-wide hover:border-slb-blue/50 hover:bg-slb-blue/[0.04] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button href="/contact" variant="outline" className="gap-2">
                      <span>Inquire About {product.title}</span>
                      <span>→</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
