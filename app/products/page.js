 "use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

/* ══════════════════════════════════════════════
   15 TABS DATA
   ══════════════════════════════════════════════ */
const TABS = [
  {
    id: "portable-cabin", label: "Portable Cabin", title: "Portable Cabin",
    description: "Versatile portable cabins built with premium MS/GI steel — ideal for site offices, labour housing, storage & emergency shelters.",
    subtitle: "Factory-built, crane-liftable, ready to use in hours.",
    image: "../images/color-coated-cabin.jpg",
    productLinks: [
      { name: "Color Coated Portable Cabins", slug: "color-coated-portable-cabins" },
      { name: "Designed Portable Cabin", slug: "designed-portable-cabin" },
      { name: "Luxury Portable Cabin", slug: "luxury-portable-cabin" },
      { name: "MS Bunk House Cabin", slug: "ms-bunk-house-cabin" },
      { name: "Steel Portable Cabin", slug: "steel-portable-cabin" },
      { name: "GI Portable Cabin", slug: "gi-portable-cabin" },
      { name: "MS Portable Cabin", slug: "ms-portable-cabin" },
      { name: "Modular Portable Cabin", slug: "modular-portable-cabin" },
      { name: "Mild Steel Portable Cabin", slug: "mild-steel-portable-cabin" },
      { name: "Double Storey Portable Cabin", slug: "double-storey-portable-cabin" },
      { name: "MS Portable House Cabin", slug: "ms-portable-house-cabin" },
      { name: "Rectangular Mild Steel Portable Cabin", slug: "rectangular-mild-steel-portable-cabin" },
    ],
  },
  {
    id: "portable-security-cabin", label: "Portable Security Cabin", title: "Portable Security Cabin",
    description: "Compact guard rooms designed for 24/7 security personnel — weather-proof, well-ventilated and easy to relocate.",
    subtitle: "Available in MS, FRP and Prefabricated variants.",
    image: "/images/security-cabin.jpg",
    productLinks: [
      { name: "MS Prefabricated Security Cabin", slug: "ms-prefab-security-cabin" },
      { name: "Square Portable Security Cabin", slug: "square-portable-security-cabin" },
      { name: "MS Portable Security Cabin", slug: "ms-portable-security-cabin" },
      { name: "Industrial MS Portable Security Cabin", slug: "industrial-ms-portable-security-cabin" },
      { name: "Portable Security Guard Cabin", slug: "portable-security-guard-cabin" },
      { name: "MS Portable Security Guard Cabin", slug: "ms-portable-security-guard-cabin" },
    ],
  },
  {
    id: "pantry-cabin", label: "Pantry Cabin", title: "Pantry Cabin",
    description: "Hygienic pantry & canteen units with built-in sink, counter space and overhead storage — perfect for construction sites & factories.",
    subtitle: "Food-grade interior, easy to clean & sanitize.",
    image: "/images/pantry-cabin.jpg",
    productLinks: [
      { name: "Portable Pantry Cabin", slug: "portable-pantry-cabin" },
      { name: "Portable Kitchen Cabin", slug: "portable-kitchen-cabin" },
      { name: "Portable Kitchen Pantry Cabin", slug: "portable-kitchen-pantry-cabin" },
    ],
  },
  {
    id: "cargo-container", label: "Cargo Container", title: "Cargo Container",
    description: "New & used ISO standard cargo containers — CSC certified, seaworthy and available in 20ft, 40ft and High Cube sizes.",
    subtitle: "Ideal for shipping, storage and modular conversion projects.",
    image: "/images/cargo-container.jpg",
    productLinks: [
      { name: "Stainless Steel Cargo Container", slug: "stainless-steel-cargo-container" },
      { name: "Shipping Container", slug: "shipping-container" },
      { name: "MS Cargo Shipping Container", slug: "ms-cargo-shipping-container" },
      { name: "Portable Cargo Container", slug: "portable-cargo-container" },
    ],
  },
  {
    id: "office-container", label: "Office Container", title: "Office Container",
    description: "Shipping containers converted into fully-functional office spaces — insulated, wired and furnished to your requirements.",
    subtitle: "Quick deployment — ready in 48 hours after order.",
    image: "/images/office-container.jpg",
    productLinks: [
      { name: "MS Office Container", slug: "ms-office-container" },
      { name: "Portable Office Container", slug: "portable-office-container" },
      { name: "Portable Interior Office Container", slug: "portable-interior-office-container" },
      { name: "Steel Portable Office Container", slug: "steel-portable-office-container" },
    ],
  },
  {
    id: "old-cargo-office-cabin", label: "Old Cargo Office Cabin", title: "Old Cargo Office Cabin",
    description: "Budget-friendly office cabins made from refurbished used cargo containers — structurally sound, fully modified and repainted.",
    subtitle: "Save up to 40% compared to new container offices.",
    image: "/images/old-cargo-office.jpg",
    productLinks: [
      { name: "Refurbished Old Cargo Office Cabin", slug: "refurbished-old-cargo-office" },
      { name: "Old Cargo Site Office Cabin", slug: "old-cargo-site-office" },
    ],
  },
  {
    id: "gi-office-cabin", label: "GI Office Cabin", title: "GI Office Cabin",
    description: "Lightweight Galvanized Iron office cabins — corrosion-resistant, cost-effective and quick to assemble on any flat surface.",
    subtitle: "Best suited for temporary project offices & site supervision rooms.",
    image: "/images/gi-office-cabin.jpg",
    productLinks: [
      { name: "GI Site Office Cabin", slug: "gi-site-office-cabin" },
      { name: "GI Supervisor Cabin", slug: "gi-supervisor-cabin" },
    ],
  },
  {
    id: "store-cabin", label: "Store Cabin", title: "Store Cabin",
    description: "Secure storage cabins for tools, equipment, cement bags and site materials — lockable, weather-sealed and stackable.",
    subtitle: "Protect your site inventory from theft and weather damage.",
    image: "/images/store-cabin.jpg",
    productLinks: [
      { name: "Industrial Portable Store Cabin", slug: "industrial-portable-store-cabin" },
      { name: "Portable Interior Store Room Cabin", slug: "portable-interior-store-room-cabin" },
    ],
  },
  {
    id: "portable-container-office-cabin", label: "Container Office Cabin", title: "Portable Container Office Cabin",
    description: "Premium container-based office cabins with modern interiors — glass partitions, false ceiling and branded finishes available.",
    subtitle: "Corporate-grade workspace in a portable shell.",
    image: "/images/container-office-cabin.jpg",
    productLinks: [
      { name: "Glass Partition Container Office Cabin", slug: "glass-partition-container-office" },
      { name: "Open Plan Container Office Cabin", slug: "open-plan-container-office" },
    ],
  },
  {
    id: "portable-isolation-ward-cabin", label: "Isolation Ward Cabin", title: "Portable Isolation Ward Cabin",
    description: "Medical-grade isolation wards for hospitals, quarantine centres and emergency health camps — negative pressure ready.",
    subtitle: "Meets WHO & MOHFW guidelines for infection control.",
    image: "/images/isolation-ward.jpg",
    productLinks: [
      { name: "COVID Isolation Cabin", slug: "covid-isolation-cabin" },
      { name: "Negative Pressure Isolation Ward", slug: "negative-pressure-ward" },
      { name: "Emergency ICU Cabin", slug: "emergency-icu-cabin" },
    ],
  },
  {
    id: "portable-house-cabin", label: "Portable House Cabin", title: "Portable House Cabin",
    description: "Fully livable house cabins with bedroom, bathroom and kitchenette — ideal for farmhouses, resorts, labour colonies and disaster relief.",
    subtitle: "Turnkey solution — move in within 7 days of delivery.",
    image: "/images/house-cabin.jpg",
    productLinks: [
      { name: "Commercial Portable House Cabin", slug: "commercial-portable-house-cabin" },
      { name: "Prefabricated Portable House Cabin", slug: "prefabricated-portable-house-cabin" },
    ],
  },
  {
    id: "old-cargo-container", label: "Old Cargo Container", title: "Old Cargo Container",
    description: "Pre-owned ISO cargo containers at budget prices — structurally verified, cleaned and ready for storage or conversion use.",
    subtitle: "Inspected & graded — A, B, C grade options available.",
    image: "/images/old-cargo-container.jpg",
    productLinks: [
      { name: "Industrial Old Cargo Container", slug: "industrial-old-cargo-container" },
      { name: "Old Shipping Container", slug: "old-shipping-container" },
      { name: "MS Old Cargo Container", slug: "ms-old-cargo-container" },
    ],
  },
  {
    id: "portable-mobile-toilet", label: "Portable Mobile Toilet", title: "Portable Mobile Toilet",
    description: "Self-contained mobile toilet units with built-in waste tank — no external plumbing required, perfect for events, sites & highways.",
    subtitle: "Eco-friendly chemical or bio-digester options available.",
    image: "/images/mobile-toilet.jpg",
    productLinks: [
      { name: "Industrial Portable Mobile Toilet Cabin", slug: "industrial-portable-mobile-toilet-cabin" },
      { name: "Portable Mobile Toilet Interior Cabin", slug: "portable-mobile-toilet-interior-cabin" },
    ],
  },
  {
    id: "fabricated-storage-container", label: "Fabricated Storage Container", title: "Fabricated Storage Container",
    description: "Custom-fabricated steel storage containers — built to your exact dimensions, with shelving, racks and climate control options.",
    subtitle: "Made-to-order — any size, any configuration.",
    image: "/images/fabricated-storage.jpg",
    productLinks: [
      { name: "Custom Shelving Storage Container", slug: "custom-shelving-storage-container" },
      { name: "Climate Controlled Storage Container", slug: "climate-controlled-storage-container" },
      { name: "Hazardous Material Storage Container", slug: "hazardous-material-storage-container" },
    ],
  },
  {
    id: "portable-office-cabin", label: "Portable Office Cabin", title: "Portable Office Cabin",
    description: "Compact, fully-equipped office spaces built for construction sites, events & remote locations — insulated, wired and AC-ready.",
    subtitle: "Built at our factory and installed on site by our own crew.",
    image: "/images/office-cabin.jpg",
    productLinks: [
      { name: "Furnished Portable Office Cabin", slug: "furnished-portable-office-cabin" },
      { name: "GI Site Office Cabin", slug: "gi-site-office-cabin" },
      { name: "MS Portable Office Cabin", slug: "ms-portable-office-cabin" },
      { name: "Office Conference Room Cabin", slug: "office-conference-room-cabin" },
      { name: "Portable Office Container Cabin", slug: "portable-office-container-cabin" },
      { name: "Modular Portable Office Cabin", slug: "modular-portable-office-cabin" },
      { name: "Portable Site Office Cabin", slug: "portable-site-office-cabin" },
      { name: "Stainless Steel Portable Office Cabin", slug: "stainless-steel-portable-office-cabin" },
      { name: "Industrial GI Site Office Cabin", slug: "industrial-gi-site-office-cabin" },
    ],
  },
];

const CATEGORIES = [
  {
    id: "portable-cabin", name: "Portable Cabin", image: "/images/portable-cabin.jpg", totalProducts: 17,
    products: [
      { name: "Color Coated Portable Cabins", slug: "color-coated-portable-cabins" },
      { name: "Designed Portable Cabin", slug: "designed-portable-cabin" },
      { name: "Luxury Portable Cabin", slug: "luxury-portable-cabin" },
      { name: "MS Bunk House Cabin", slug: "ms-bunk-house-cabin" },
      { name: "Steel Portable Cabin", slug: "steel-portable-cabin" },
      { name: "GI Portable Cabin", slug: "gi-portable-cabin" },
      { name: "MS Portable Cabin", slug: "ms-portable-cabin" },
      { name: "Modular Portable Cabin", slug: "modular-portable-cabin" },
      { name: "Mild Steel Portable Cabin", slug: "mild-steel-portable-cabin" },
      { name: "Double Storey Portable Cabin", slug: "double-storey-portable-cabin" },
      { name: "MS Portable House Cabin", slug: "ms-portable-house-cabin" },
      { name: "Rectangular Mild Steel Portable Cabin", slug: "rectangular-mild-steel-portable-cabin" },
    ],
  },
  {
    id: "portable-security-cabin", name: "Portable Security Cabin", image: "/images/security-cabin.jpg", totalProducts: 6,
    products: [
      { name: "MS Prefabricated Security Cabin", slug: "ms-prefab-security-cabin" },
      { name: "Square Portable Security Cabin", slug: "square-portable-security-cabin" },
      { name: "MS Portable Security Cabin", slug: "ms-portable-security-cabin" },
      { name: "Industrial MS Portable Security Cabin", slug: "industrial-ms-portable-security-cabin" },
      { name: "Portable Security Guard Cabin", slug: "portable-security-guard-cabin" },
      { name: "MS Portable Security Guard Cabin", slug: "ms-portable-security-guard-cabin" },
    ],
  },
];

/* ══════════════════════════════════════════════
   ICONS
   ══════════════════════════════════════════════ */
function ArrowIcon() {
  return (
    <svg className="w-3 h-3 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <svg className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   TAB CONTENT BOX
   ══════════════════════════════════════════════ */
function TabContentBox({ tab }) {
  const boxRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(boxRef.current, { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.55 })
      .fromTo(imgRef.current, { opacity: 0, x: -60, scale: 1.05 }, { opacity: 1, x: 0, scale: 1, duration: 0.6 }, "-=0.35")
      .fromTo(titleRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.4")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.25")
      .fromTo(linksRef.current?.children, { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.25, stagger: 0.06 }, "-=0.15")
      .fromTo(ctaRef.current, { opacity: 0, y: 15, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.35 }, "-=0.1");
    return () => { tl.kill(); };
  }, [tab.id]);

  return (
    <div ref={boxRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden will-change-transform">
      <div className="flex flex-col lg:flex-row">
        <div ref={imgRef} className="lg:w-1/2 relative bg-gradient-to-br from-[#932c25]  min-h-[280px] lg:min-h-[440px] overflow-hidden will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tab.image} alt={tab.title} loading="lazy" className="w-full h-full object-cover absolute inset-0" onError={(e) => { e.target.style.display = "none"; }} />
          <div className="absolute inset-0 flex items-center justify-center text-teal-400 font-medium text-sm pointer-events-none">{tab.title}</div>
        </div>
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col gap-4">
          <h2 ref={titleRef} className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight will-change-transform">{tab.title}</h2>
          <div ref={descRef} className="will-change-transform">
            <p className="text-gray-600 text-base leading-relaxed">{tab.description}</p>
            <p className="text-gray-400 text-sm mt-2">{tab.subtitle}</p>
          </div>
          <div className="mt-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Available Products</p>
            <ul ref={linksRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 will-change-transform">
              {tab.productLinks.map((link) => (
                <li key={link.slug}>
                  <Link href={`/products/${link.slug}`} className="flex items-start gap-1.5 w-full text-left group py-1.5 hover:bg-blue-50 rounded px-1 -mx-1 transition-colors">
                    <ArrowIcon />
                    <span className="text-sm text-blue-700 group-hover:text-blue-900 group-hover:underline leading-snug transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div ref={ctaRef} className="mt-3 will-change-transform">
            <Link href={`/products/${tab.id}`} className="inline-block bg-[#932c25]  text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg">
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   CATEGORY CARD
   ══════════════════════════════════════════════ */
function CategoryCard({ category }) {
  const [open, setOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const listRef = useRef(null);
  const allProducts = category.products;
  const hasMore = allProducts.length > visibleCount;
  const shown = allProducts.slice(0, visibleCount);

  useEffect(() => {
    if (!listRef.current) return;
    if (open) {
      gsap.fromTo(listRef.current, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(listRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [open]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 lg:w-72 flex-shrink-0 relative bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.image} alt={category.name} loading="lazy" className="w-full h-48 md:h-full object-cover"
            onError={(e) => { e.target.style.display = "none"; e.target.parentElement.insertAdjacentHTML("beforeend", `<div class="w-full h-48 md:h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-blue-400 text-xs font-medium absolute inset-0">${category.name}</div>`); }} />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-700/90 text-white text-center text-sm font-semibold py-1.5">({category.totalProducts})</div>
        </div>
        <div className="flex-1 p-5 flex flex-col">
          <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-left group">
            <h2 className="text-xl font-bold text-teal-700 pb-2 border-b border-gray-200 flex-1 group-hover:text-teal-900 transition-colors">{category.name}</h2>
            <span className={`ml-3 transition-colors ${open ? "text-teal-600" : "text-gray-400"}`}><PlusIcon open={open} /></span>
          </button>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-3">
            {(open ? shown : allProducts.slice(0, 4)).map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="flex items-start gap-1.5 w-full text-left group py-0.5 hover:bg-blue-50 rounded px-1 -mx-1 transition-colors">
                  <ArrowIcon />
                  <span className="text-sm text-blue-700 group-hover:text-blue-900 group-hover:underline leading-snug transition-colors">{p.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div ref={listRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-2 pt-2 border-t border-gray-100">
              {allProducts.slice(4, visibleCount).map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="flex items-start gap-1.5 w-full text-left group py-0.5 hover:bg-blue-50 rounded px-1 -mx-1 transition-colors">
                    <ArrowIcon />
                    <span className="text-sm text-blue-700 group-hover:text-blue-900 group-hover:underline leading-snug transition-colors">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {hasMore && (
              <div className="mt-3 flex justify-end">
                <button onClick={(e) => { e.stopPropagation(); setVisibleCount((prev) => Math.min(prev + 6, allProducts.length)); }}
                  className="px-5 py-1.5 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold rounded transition-colors shadow">…More</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ✅ MAIN DEFAULT EXPORT — Named function
   ══════════════════════════════════════════════ */
export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [tabData, setTabData] = useState(TABS[0]);
  const [loading, setLoading] = useState(false);
  const tabNavRef = useRef(null);
  const activeBtnRef = useRef(null);

  const handleTabClick = async (tabId) => {
    if (activeTab === tabId) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    const found = TABS.find((t) => t.id === tabId);
    setTabData(found);
    setActiveTab(tabId);
    setLoading(false);
  };

  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeTab]);

  useEffect(() => {
    if (!tabNavRef.current) return;
    gsap.fromTo(
      tabNavRef.current.querySelectorAll("button"),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "back.out(1.5)", delay: 0.1 }
    );
  }, []);

  return (
    <main className="min-h-screen pt-[72px] xl:pt-[112px] bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800 text-center tracking-wide">Showroom</h1>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200 sticky top-[57px] z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={tabNavRef} className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button key={tab.id} ref={isActive ? activeBtnRef : null} onClick={() => handleTabClick(tab.id)}
                  className={`flex-shrink-0 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-[3px] transition-all duration-200 relative
                    ${isActive ? "border-teal-600 text-teal-800 bg-teal-50/40" : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"}`}>
                  {tab.label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal-600 rounded-t" />}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        {loading && (
          <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden animate-pulse">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-[440px] bg-gray-200" />
              <div className="lg:w-1/2 p-8 space-y-4">
                <div className="h-7 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="space-y-2 mt-4">
                  {[1, 2, 3, 4].map((i) => <div key={i} className="h-4 bg-gray-200 rounded w-1/2" />)}
                </div>
              </div>
            </div>
          </div>
        )}
        {!loading && tabData && <TabContentBox key={tabData.id} tab={tabData} />}
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">All Categories</h2>
        {CATEGORIES.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
      </section>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-200 bg-white">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Hindustan Cabin — All rights reserved.
      </footer>
    </main>
  );
}