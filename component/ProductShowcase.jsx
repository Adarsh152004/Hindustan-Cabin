'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Briefcase, ShieldCheck, Clock } from 'lucide-react';

// --- DATA LIST (Local high-quality images) ---
const productsData = [
  {
    id: "portable-cabin",
    name: "Portable Cabin",
    image: "/images/portable-cabin.jpg",
    description: "Prefabricated movable structure designed for versatility. Perfect for site offices, storage, or temporary living spaces.",
    features: ["Quick Installation (Ready in 24hrs)", "Weather Resistant Exterior Paint", "Heavy Duty Mild Steel Frame", "Customizable Size & Layout"],
    uses: ["Construction Site Offices", "Temporary Storage Rooms", "Security Guard Cabins", "Farmhouse Utility Blocks"],
    benefits: [
      { title: "Fast Setup", desc: "No civil work needed, just place and use." },
      { title: "Cost Saving", desc: "50% cheaper than permanent brick structures." }
    ]
  },
  {
    id: "security-cabin",
    name: "Portable Security Cabin",
    image: "/images/security-cabin.jpg",
    description: "Compact cabin engineered for maximum visibility. Ideal for gatekeepers to monitor entry and exit points effectively.",
    features: ["360° Glass Visibility Windows", "Built-in Work Table & Shelf", "Anti-skid Durable Flooring", "Pre-wired Fan & Light Points"],
    uses: ["Society Main Gates", "Factory Entry Points", "Parking Lot Booths", "Event Venue Security"],
    benefits: [
      { title: "High Visibility", desc: "Ensures no blind spots for guards." },
      { title: "Comfortable", desc: "Ventilated design for long shifts." }
    ]
  },
  {
    id: "pantry-cabin",
    name: "Pantry Cabin",
    image: "/images/pantry-cabin.jpg",
    description: "Hygienic kitchen and dining unit equipped with stainless steel fixtures. Keeps food preparation safe and clean.",
    features: ["SS 304 Grade Sink & Tap", "Fire-resistant Insulation Walls", "Easy-to-clean Vinyl Panels", "Exhaust Fan Provision"],
    uses: ["Construction Site Canteens", "Labor Colony Kitchens", "School Dining Areas", "Office Breakrooms"],
    benefits: [
      { title: "Hygienic", desc: "Non-porous surfaces prevent bacteria." },
      { title: "Safe", desc: "Fire-retardant materials used inside." }
    ]
  },
  {
    id: "cargo-container",
    name: "Cargo Container",
    image: "/images/cargo-container.jpg",
    description: "Heavy-duty ISO certified shipping containers built for extreme durability. The ultimate solution for secure logistics.",
    features: ["Corten Steel Body (Rust Proof)", "100% Watertight Seal Guarantee", "Heavy Duty Lock Box Included", "Standard Forklift Pockets"],
    uses: ["International Shipping", "Heavy Machinery Storage", "Logistics Hubs", "Open Yard Storage"],
    benefits: [
      { title: "Indestructible", desc: "Can withstand harsh sea weather." },
      { title: "Secure", desc: "Impossible to break into without tools." }
    ]
  },
  {
    id: "office-container",
    name: "Office Container",
    image: "/images/container-office-cabin.jpg",
    description: "A modern twist on industrial storage. We convert rugged containers into stylish, air-conditioned office spaces.",
    features: ["Modern Industrial Aesthetic", "High Ceiling for Airiness", "PUF Insulated Walls (Cool)", "Glass Entry Door with Grill"],
    uses: ["Project Headquarters", "Creative Design Studios", "Real Estate Sales Galleries", "Remote Mining Camps"],
    benefits: [
      { title: "Stylish", desc: "Impresses clients with unique look." },
      { title: "Cool Interior", desc: "Insulation keeps heat out effectively." }
    ]
  },
  {
    id: "old-cargo-office",
    name: "Old Cargo Office Cabin",
    image: "/images/old-cargo-office.jpg",
    description: "Budget-friendly refurbished containers. We take used cargo boxes and fit them with basic office amenities.",
    features: ["Most Cost Effective Option", "Pre-owned but Strong Structure", "Basic Electrical Wiring Done", "Freshly Repainted Exterior"],
    uses: ["Budget Storage Solutions", "Tool Sheds on Sites", "Temporary Worker Shelters", "Scrap Yard Offices"],
    benefits: [
      { title: "Unbeatable Price", desc: "Cheapest way to get enclosed space." },
      { title: "Eco-Friendly", desc: "Recycling old containers reduces waste." }
    ]
  },
  {
    id: "gi-office-cabin",
    name: "GI Office Cabin",
    image: "/images/gi-office-cabin.jpg",
    description: "Premium cabins crafted with Galvanized Iron sheets. Specifically designed to resist rust in humid environments.",
    features: ["Rust Proof GI Outer Sheets", "Longer Lifespan (15+ Years)", "Thermal Insulation Layer", "Smooth Modern Finish"],
    uses: ["Coastal Construction Sites", "High Humidity Zones", "Permanent Site Offices", "Corporate Temporary HQs"],
    benefits: [
      { title: "Zero Rust", desc: "Perfect for rainy/coastal areas." },
      { title: "Durable", desc: "Lasts much longer than standard plywood." }
    ]
  },
  {
    id: "store-cabin",
    name: "Store Cabin",
    image: "/images/store-cabin.jpg",
    description: "Fortress-like storage units designed purely for security. No windows, heavy locks, and reinforced doors.",
    features: ["Reinforced Steel Door", "No Windows (Maximum Security)", "Heavy Duty Padlock Hasp", "Cross Ventilation Grills"],
    uses: ["Expensive Equipment Storage", "Inventory Rooms", "Hardware Yards", "Document Safe Keeping"],
    benefits: [
      { title: "Theft Proof", desc: "Designed to deter break-ins." },
      { title: "Private", desc: "Opaque walls keep contents hidden." }
    ]
  },
  {
    id: "portable-container-office",
    name: "Portable Container Office",
    image: "/images/container-office-cabin.jpg",
    description: "The best of both worlds: Container strength with Cabin comfort. Stackable units for multi-story temporary offices.",
    features: ["Stackable Design (2-3 Floors)", "Split AC Fitted", "Attached Washroom Unit", "LED Panel Lighting"],
    uses: ["Multi-story Project Sites", "Large Infrastructure Projects", "Mining Operation Offices", "Oil Rig Camps"],
    benefits: [
      { title: "Space Saver", desc: "Go vertical when ground space is low." },
      { title: "Fully Loaded", desc: "Comes with AC and plumbing ready." }
    ]
  },
  {
    id: "isolation-ward",
    name: "Isolation Ward Cabin",
    image: "/images/isolation-ward.jpg",
    description: "Specialized medical grade cabins. Can be fitted with negative pressure systems for infectious disease isolation.",
    features: ["Antibacterial Vinyl Flooring", "Intercom System Installed", "Internal Observation Window", "Attached Sanitation Unit"],
    uses: ["Hospital Extensions", "Clinic Isolation Rooms", "Quarantine Centers", "Emergency Wards"],
    benefits: [
      { title: "Medical Grade", desc: "Easy to sterilize surfaces." },
      { title: "Safe Separation", desc: "Keeps patients isolated effectively." }
    ]
  },
  {
    id: "house-cabin",
    name: "Portable House Cabin",
    image: "/images/house-cabin.jpg",
    description: "Comfortable living quarters designed for humans, not just storage. Includes furniture and sleeping arrangements.",
    features: ["Bed & Cupboard Included", "Attached Toilet Option", "Small Kitchenette Area", "Mosquito Mesh Windows"],
    uses: ["Labor Colonies", "Staff Quarters", "Farm Stay Cottages", "Worker Housing"],
    benefits: [
      { title: "Homely Feel", desc: "Doesn't feel like a construction site." },
      { title: "All-in-One", desc: "Sleep, cook, and wash in one unit." }
    ]
  },
  {
    id: "old-cargo",
    name: "Old Cargo Container",
    image: "/images/old-cargo-container.jpg",
    description: "Second-hand shipping containers sold 'as-is'. Great for buyers who need raw storage space on a tight budget.",
    features: ["Economical Price Point", "Solid Structural Integrity", "Minor Cosmetic Dents", "Immediate Delivery Available"],
    uses: ["Personal Home Storage", "Garage Extension", "Garden Tool Shed", "Budget Logistics"],
    benefits: [
      { title: "Cheap", desc: "Lowest entry price for a container." },
      { title: "Raw Canvas", desc: "Modify it however you want later." }
    ]
  },
  {
    id: "mobile-toilet",
    name: "Portable Mobile Toilet",
    image: "/images/mobile-toilet.jpg",
    description: "Sanitation solutions that go where you go. Available in FRP (plastic) or Sandwich Panel models.",
    features: ["Integrated Water Tank", "Roof Ventilation Ducts", "Smooth Easy-clean Surface", "Choice of Squat/Western"],
    uses: ["Weddings & Outdoor Events", "Construction Sites", "Public Parks", "Religious Gatherings"],
    benefits: [
      { title: "Hygiene", desc: "Keeps event grounds clean." },
      { title: "Mobile", desc: "Can be towed to any location." }
    ]
  }
];

export default function ProductShowcase() {
  const [activeProductId, setActiveProductId] = useState("portable-cabin");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Tab Switch with Shimmer Effect
  const handleTabChange = (id) => {
    if (id === activeProductId) return;
    
    setIsLoading(true);
    setActiveProductId(id);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const activeProduct = productsData.find(p => p.id === activeProductId);

  // --- COLOR CODE: #4a0404 (Deep Maroon) ---

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white font-sans">
      
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-3">
          Explore Our Portable Solutions
        </h2>
        <p className="text-gray-500 text-base">
          Select a category below to view specifications and uses.
        </p>
      </div>

      {/* TABS NAVIGATION - WRAPABLE ROW */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {productsData.map((product) => (
          <button
            key={product.id}
            onClick={() => handleTabChange(product.id)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${activeProductId === product.id
                ? "bg-[#4a0404] text-white border-[#4a0404] shadow-md scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#4a0404] hover:text-[#4a0404]"
              }
            `}
          >
            {product.name}
          </button>
        ))}
      </div>

      {/* CONTENT AREA WITH SHIMMER ANIMATION */}
      <div 
        key={activeProductId} 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-opacity duration-500 ease-in-out min-h-[600px] ${
          isLoading ? "opacity-30 blur-sm" : "opacity-100 blur-0"
        }`}
      >
        
        {/* LEFT: IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] lg:h-[600px] w-full bg-gray-100 group">
          <img 
            src={activeProduct.image} 
            alt={activeProduct.name} 
            onError={(e) => { e.currentTarget.src = '/images/portable-cabin.jpg'; }}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col justify-center h-full">
          
          <h3 className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-4">{activeProduct.name}</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{activeProduct.description}</p>

          {/* SIDE BY SIDE BOXES: FEATURES & USES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* KEY FEATURES BOX */}
            <div className="bg-[#fdf8f8] border border-[#e8dada] rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-[#4a0404] rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-[#4a0404] uppercase tracking-wide text-sm">Key Features</h4>
              </div>
              <ul className="space-y-3">
                {activeProduct.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px] font-medium">
                    <span className="text-[#4a0404] mt-1.5 text-xs">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMON USES BOX */}
            <div className="bg-[#fdf8f8] border border-[#e8dada] rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-[#4a0404] rounded-lg shadow-sm">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-[#4a0404] uppercase tracking-wide text-sm">Common Uses</h4>
              </div>
              <ul className="space-y-3">
                {activeProduct.uses.map((use, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px] font-medium">
                    <span className="text-[#4a0404] mt-1.5 text-xs">●</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* WHY CHOOSE US SECTION */}
          <div className="mb-8">
             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Why This Unit?</h4>
             <div className="grid grid-cols-2 gap-4">
                {activeProduct.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                     {idx === 0 ? <Clock className="w-5 h-5 text-[#4a0404] flex-shrink-0" /> : <ShieldCheck className="w-5 h-5 text-[#4a0404] flex-shrink-0" />}
                     <div>
                        <p className="font-bold text-[#4a0404] text-sm">{benefit.title}</p>
                        <p className="text-xs text-gray-500 leading-tight mt-1">{benefit.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* ACTION BUTTONS CONNECTED TO REAL ROUTES */}
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#4a0404] hover:bg-[#330303] text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Get Quote Now <ArrowRight className="w-4 h-4" />
            </Link>

            <Link 
              href={`/products/${activeProduct.id}`} 
              className="inline-flex items-center gap-2 border-2 border-[#4a0404] text-[#4a0404] hover:bg-[#4a0404] hover:text-white font-semibold py-3 px-6 rounded-full transition-all shadow-sm"
            >
              View Full Specs
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}