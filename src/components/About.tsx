const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-900 text-white border-b border-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left: Mission & Vision */}
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1.5 border border-poruta-500 text-poruta-400 font-mono text-xs uppercase tracking-widest mb-6 bg-surface-950">
              Developed by LUCRA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter leading-tight">
              We are engineering the future of African trade.
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-12">
              Poruta is an AI-Automated Procurement Control Tower featuring Human-in-the-Loop oversight. We are dedicated to enabling faster, accurate, transparent, and compliant cross-border commerce.
            </p>

            <div className="space-y-10">
              <div className="border-l-2 border-poruta-500 pl-6">
                <h3 className="text-xs font-mono text-surface-500 uppercase tracking-widest mb-3">Our Mission</h3>
                <p className="text-surface-200 leading-relaxed text-lg">
                  To connect all trade stakeholders—importers, customs agents, and government institutions—through an intelligent platform featuring multi-party data sharing and real-time dashboards.
                </p>
              </div>
              <div className="border-l-2 border-poruta-500 pl-6">
                <h3 className="text-xs font-mono text-surface-500 uppercase tracking-widest mb-3">Our Vision</h3>
                <p className="text-surface-200 leading-relaxed text-lg">
                  To elevate Rwanda&apos;s customs clearance efficiency to the <span className="text-poruta-400 font-bold">global top 20 within five years</span>, scaling our technology regionally to act as a powerful catalyst for the AfCFTA.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Approach (Engineered Grid) */}
          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-surface-800">
            <h3 className="text-xl font-bold text-white mb-10 border-b border-surface-800 pb-4">Our Approach to Technology</h3>

            <div className="flex flex-col">
              {/* Point 1 */}
              <div className="border-l-2 border-surface-800 pl-8 pb-12 relative group hover:border-poruta-500 transition-colors duration-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-surface-900 border-2 border-surface-600 group-hover:border-poruta-500 transition-colors duration-300" />
                <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-3 font-bold group-hover:text-poruta-400 transition-colors">01. Empowering, Not Replacing</h4>
                <p className="text-surface-400 leading-relaxed text-base">
                  We build affordable AI tailored for emerging markets. Our primary goal is to empower human agents to achieve higher throughput, never to replace them.
                </p>
              </div>

              {/* Point 2 */}
              <div className="border-l-2 border-surface-800 pl-8 pb-12 relative group hover:border-poruta-500 transition-colors duration-300">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-surface-900 border-2 border-surface-600 group-hover:border-poruta-500 transition-colors duration-300" />
                <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-3 font-bold group-hover:text-poruta-400 transition-colors">02. Intelligent Validation</h4>
                <p className="text-surface-400 leading-relaxed text-base">
                  AI handles the heavy lifting of complex document processing, while expert agents retain ultimate control to securely review and approve the extracted data.
                </p>
              </div>

              {/* Point 3 */}
              <div className="border-l-2 border-transparent pl-8 relative group">
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-surface-900 border-2 border-surface-600 group-hover:border-poruta-500 transition-colors duration-300" />
                <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-3 font-bold group-hover:text-poruta-400 transition-colors">03. Compliance &amp; Transparency</h4>
                <p className="text-surface-400 leading-relaxed text-base">
                  We utilize advanced compliance automation to mitigate risk. Our granular market intelligence hub provides real-time, multi-party tracking that ensures complete transparency for every stakeholder involved.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
