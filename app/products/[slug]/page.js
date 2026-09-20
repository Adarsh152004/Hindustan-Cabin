import Link from "next/link";
import { notFound } from "next/navigation";

/* ─────────────────────────────────────────────
   PRODUCT DATA (UNCHANGED)
   ───────────────────────────────────────────── */
import { PRODUCTS } from '../../../lib/productsData';

/* ─────────────────────────────────────────────
   SERVER EXPORTS (Static Params & Metadata)
   ───────────────────────────────────────────── */
export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = PRODUCTS[resolvedParams.slug];
  if (!product) return { title: "Product Not Found | Hindustan Cabin" };

  return {
    title: `${product.title} | Hindustan Cabin`,
    description: product.description,
  };
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */
export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = PRODUCTS[resolvedParams.slug];

  if (!product) {
    notFound();
  }

  // Helper to render SVG Checkmark
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen pt-[72px] xl:pt-[112px] bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Navigation Bar - Glass Effect */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[72px] xl:top-[112px] z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm">
          <Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">Home</Link>
          <span className="mx-2 text-slate-300">/</span>
          <Link href="/products" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">Products</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="font-semibold text-slate-900 truncate">{product.title}</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Image Gallery with Floating Effect */}
          <div className="lg:col-span-7 group relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 bg-white aspect-[4/3] lg:aspect-[16/10] border border-slate-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Category Badge - Floating */}
              <div className="absolute top-6 left-6">
                 <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-blue-700 shadow-lg border border-blue-50">
                  {product.category}
                </span>
              </div>
            </div>
            
            {/* Thumbnails Row */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
               {[1,2,3].map((i) => (
                 <div key={i} className="w-24 h-24 flex-shrink-0 rounded-xl border-2 border-transparent hover:border-blue-500 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 shadow-sm bg-white">
                    <img src={product.image} alt="thumb" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Column: Product Details (Sticky) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-24 space-y-8">
              
              {/* Title & Price Header */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                  {product.title}
                </h1>
                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {product.priceRange}
                  </span>
                  <span className="text-sm text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded-md">per unit</span>
                </div>
              </div>

              {/* Description - Clean Text */}
              <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-blue-500 pl-4 py-1">
                {product.description}
              </p>

              {/* Features List - Modern Card Style */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Key Highlights</h3>
                <ul className="space-y-3.5">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-700 group/item">
                      <CheckIcon />
                      <span className="text-sm font-medium group-hover/item:text-blue-700 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons - Gradient & Outline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25 active:scale-[0.98]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Send Inquiry
                </Link>
                <a href="tel:+919967463733" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 px-6 py-4 rounded-xl font-bold transition-all shadow-sm active:scale-[0.98]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Request Callback
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Detailed Information Tabs Section */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Technical Specifications</h2>
              <p className="text-slate-500 mt-1">Detailed breakdown of materials and dimensions.</p>
            </div>
            <div className="hidden md:block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition-colors">
              View All Details ↓
            </div>
          </div>

          {/* Specs Grid - Bento Box Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.specs?.map((spec, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 relative z-10">{spec.label}</p>
                <p className="text-base font-semibold text-slate-800 group-hover:text-blue-700 transition-colors relative z-10">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* FAQ Section - Accordion Style Look */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="pt-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h3>
                <p className="text-slate-500">Everything you need to know about this product.</p>
              </div>
              
              <div className="grid gap-4 max-w-4xl mx-auto">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                    <h4 className="font-bold text-slate-800 text-lg mb-3 flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">Q</span>
                      {faq.q}
                    </h4>
                    <p className="text-slate-600 pl-11 leading-relaxed text-base">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}