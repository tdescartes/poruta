import { Globe, ArrowRight, AlertTriangle, Zap, Check } from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 hero-bg overflow-hidden border-b border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Hero Text */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-3 mb-8 border border-surface-700 bg-surface-900/50 px-4 py-2 text-xs font-mono text-poruta-400 uppercase tracking-widest">
            <span className="w-2 h-2 bg-poruta-500 animate-cursor-blink" />
            System Online
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
            The Intelligent<br />
            Trade Control<br />
            Tower
          </h1>
          <p className="text-lg md:text-xl text-surface-300 mb-12 max-w-xl font-normal leading-relaxed">
            Frictionless cross-border trade for Africa. Protect margins, guarantee compliance, and clear shipments in hours, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookDemoModal
              trigger={
                <a className="px-8 py-4 bg-poruta-700 text-white font-bold text-sm uppercase tracking-widest btn-strict-light border border-poruta-600 flex justify-center items-center w-full sm:w-auto cursor-pointer">
                  Book a Demo
                </a>
              }
            />
          </div>
        </div>

        {/* Macro Command Center Animation */}
        <div className="flex-1 w-full max-w-2xl hidden lg:block">
          <div className="bg-surface-950 border border-surface-800 shadow-[16px_16px_0px_0px_rgba(0,128,0,0.15)] relative h-[420px] flex flex-col overflow-hidden">

            {/* Dashboard Header */}
            <div className="h-10 border-b border-surface-800 flex justify-between items-center px-4 bg-surface-900">
              <div className="text-surface-500 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                <Globe className="w-3 h-3" /> MACRO_COMMAND_CENTER
              </div>
              <div className="text-poruta-500 text-[10px] font-mono flex items-center gap-2">
                LIVE_TRACKING <span className="w-2 h-2 bg-poruta-500 animate-cursor-blink" />
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-8 flex-1 bg-[#0a0f0d] flex items-center justify-center relative">

              {/* Main Tracking Card */}
              <div className="w-full max-w-md bg-surface-900 border border-surface-700 relative h-[220px] flex flex-col shadow-2xl">

                {/* Static Header */}
                <div className="border-b border-surface-800 p-4 flex justify-between items-center bg-surface-950">
                  <div>
                    <div className="text-[10px] text-surface-500 font-mono mb-1 tracking-widest uppercase">Consignment_Ref</div>
                    <div className="text-lg text-white font-mono font-bold tracking-tight">#4492-KGL</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-surface-500 font-mono mb-1 tracking-widest uppercase">Route</div>
                    <div className="text-sm text-surface-300 font-mono font-bold flex items-center gap-2">
                      SHG <ArrowRight className="w-3 h-3 text-surface-500" /> KGL
                    </div>
                  </div>
                </div>

                {/* Dynamic Content Container */}
                <div className="relative flex-1 overflow-hidden">

                  {/* Phase 1: Hold (Amber Pain Point) */}
                  <div className="absolute inset-0 p-5 bg-surface-900 animate-hero-phase-1 border-l-4 border-amber-500 flex flex-col justify-between">
                    <div className="bg-amber-500/10 border border-amber-500/30 p-4 flex items-start gap-4">
                      <div className="w-8 h-8 bg-amber-500 text-surface-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-1">Customs Hold</div>
                        <div className="text-amber-200/60 text-[10px] font-mono uppercase leading-tight">
                          Awaiting Manual Classification<br />Clearance Paused
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end border-t border-surface-800 pt-3">
                      <div className="text-surface-500 text-[10px] font-mono">EST_DELAY: 14 DAYS</div>
                      <div className="text-right flex flex-col items-end">
                        <div className="text-surface-500 text-[10px] font-mono mb-1 uppercase tracking-widest">Demurrage Risk</div>
                        <div className="text-red-400 font-mono text-xl font-bold tracking-tighter bg-red-500/10 px-2 py-0.5 border border-red-500/20 animate-pulse">
                          +$2,450
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2: Poruta Processing Overlay */}
                  <div className="absolute inset-0 bg-surface-950/95 animate-hero-phase-2 z-10 flex flex-col justify-center p-6 border-l-4 border-poruta-500">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-poruta-400 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3" /> Control Tower Active
                      </span>
                      <span className="text-surface-500 text-[10px] font-mono animate-pulse">Resolving...</span>
                    </div>
                    <div className="w-full h-2 bg-surface-900 border border-surface-700 overflow-hidden">
                      <div className="h-full bg-poruta-500 animate-hero-progress shadow-[0_0_10px_#22c55e]" />
                    </div>
                  </div>

                  {/* Phase 3: Cleared (Green Payoff) */}
                  <div className="absolute inset-0 p-5 bg-surface-900 animate-hero-phase-3 z-20 border-l-4 border-poruta-500 flex flex-col justify-between">
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-12 h-12 bg-poruta-500 text-surface-950 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <Check className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-poruta-400 font-bold uppercase tracking-widest text-lg leading-none mb-1.5">Clearance Authorized</div>
                        <div className="text-surface-400 text-[10px] font-mono uppercase">Compliance Verified</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 border-t border-surface-800 pt-4">
                      <div>
                        <div className="text-surface-500 text-[9px] font-mono mb-1 uppercase tracking-widest">Time</div>
                        <div className="text-white font-mono text-base font-bold">1.2s</div>
                      </div>
                      <div>
                        <div className="text-surface-500 text-[9px] font-mono mb-1 uppercase tracking-widest">Security</div>
                        <div className="text-poruta-400 font-mono text-base font-bold">100%</div>
                      </div>
                      <div>
                        <div className="text-surface-500 text-[9px] font-mono mb-1 uppercase tracking-widest">Saved</div>
                        <div className="text-white font-mono text-base font-bold">$2,450</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
