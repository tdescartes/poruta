import { FileText, CheckCircle2, User, Truck, Cpu, Building } from "lucide-react";

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-surface-900 tracking-tighter mb-4">Platform Capabilities</h2>
          <p className="text-lg text-surface-600">Built to handle the complexity and scale of modern cross-border operations.</p>
        </div>

        <div className="space-y-16">
          {/* Cap 1: Instant Document Processing (The Black Box) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-50 p-12 border border-surface-200 h-full flex flex-col justify-center">
              <div className="text-xs font-mono text-poruta-700 mb-4 border border-poruta-700 inline-block px-2 py-1 self-start">MODULE_01</div>
              <h3 className="text-3xl font-bold text-surface-900 mb-4 tracking-tight">Instant Document Processing</h3>
              <p className="text-surface-600 leading-relaxed text-lg">
                Eliminate data entry bottlenecks. Our system ingests complex commercial invoices, packing lists, and shipping manifests, structuring the raw data instantly for your team to review and approve.
              </p>
            </div>
            <div className="bg-surface-900 p-8 md:p-12 border border-surface-800 h-full flex flex-col justify-center relative overflow-hidden">
              {/* Blueprint grid background */}
              <div className="blueprint-grid absolute inset-0" />

              {/* The "Black Box" Status Dashboard */}
              <div className="relative z-10 border border-surface-700 bg-surface-950 flex flex-col w-full shadow-[8px_8px_0px_0px_rgba(13,19,16,1)] font-mono text-xs h-[240px]">
                {/* Dashboard Header */}
                <div className="border-b border-surface-800 px-5 py-3 flex justify-between items-center bg-surface-900">
                  <span className="text-surface-400 font-bold tracking-widest uppercase">Batch_ID: #INV-4492</span>
                  <span className="flex items-center gap-2 text-surface-500 text-[10px]">
                    <span className="w-2 h-2 bg-poruta-500 inline-block animate-cursor-blink" /> LIVE
                  </span>
                </div>

                {/* Dashboard Body */}
                <div className="relative flex-1 overflow-hidden bg-[#0a0f0d]">
                  {/* Phase 1: Input & Processing */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center animate-bb-phase-1">
                    <div className="text-surface-500 mb-1 uppercase tracking-widest text-[10px]">Attachments</div>
                    <div className="text-surface-200 text-sm font-bold mb-8 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-surface-400" />
                      12-Page Commercial Invoice
                    </div>

                    <div className="flex justify-between items-end mb-2">
                      <span className="text-surface-500 uppercase tracking-widest text-[10px]">System Status</span>
                      <div className="relative w-32 h-4 text-right font-bold text-sm">
                        <span className="absolute right-0 top-0 text-surface-500 animate-bb-status-1">Unprocessed</span>
                        <span className="absolute right-0 top-0 text-poruta-400 animate-bb-status-2">Processing...</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-surface-800 overflow-hidden">
                      <div className="h-full bg-poruta-500 animate-bb-progress" />
                    </div>
                  </div>

                  {/* Phase 2: Output / Value */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center bg-[#0a0f0d] animate-bb-phase-2 opacity-0">
                    <div className="border border-poruta-800 bg-poruta-900/20 p-4 mb-5 flex justify-between items-center">
                      <div>
                        <div className="text-poruta-400 font-bold text-sm tracking-wide mb-1">CLEARANCE READY</div>
                        <div className="text-surface-500 text-[10px] uppercase tracking-widest">Processing Time: 1.2s</div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-poruta-500" />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-surface-800 pb-4">
                      <span className="text-surface-500 uppercase tracking-widest text-[10px]">System Confidence</span>
                      <span className="text-white font-bold bg-surface-800 px-2 py-1">99.8%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-surface-500 uppercase tracking-widest text-[10px]">Next Action</span>
                      <span className="text-amber-400 font-bold flex items-center gap-2 bg-amber-400/10 px-2 py-1 border border-amber-400/20">
                        <User className="w-3 h-3" /> AWAITING AGENT REVIEW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cap 2: Secure Inter-Agency Network */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-surface-900 p-8 md:p-12 border border-surface-800 h-full flex flex-col justify-center text-white md:order-1 order-2 relative overflow-hidden">
              {/* Blueprint grid background */}
              <div className="blueprint-grid absolute inset-0" />

              {/* Animated Network Topology */}
              <div className="relative z-10 w-full max-w-xs mx-auto font-mono text-[10px] sm:text-xs h-[280px]">
                {/* Track */}
                <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-surface-800 z-0" />

                {/* Animated Packet */}
                <div className="absolute left-[19px] w-3 h-3 bg-surface-500 z-10 animate-handshake-flow" style={{ top: 18 }} />

                {/* Node 1: Logistics */}
                <div className="absolute top-0 left-0 w-full flex items-center gap-4 z-20">
                  <div className="w-12 h-12 border border-surface-700 bg-surface-950 flex items-center justify-center text-surface-400 relative">
                    <div className="absolute -left-1 -top-1 w-2 h-2 border-t border-l border-surface-500" />
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 border border-surface-800 bg-surface-950/80 p-2.5 backdrop-blur-sm">
                    <span className="text-surface-600 block mb-1">SRC: LOGISTICS</span>
                    <span className="text-surface-300 font-bold">[TRX_OUT] DISPATCH</span>
                  </div>
                </div>

                {/* Node 2: Poruta Core */}
                <div className="absolute top-[116px] left-0 w-full flex items-center gap-4 z-20">
                  <div className="w-12 h-12 border bg-surface-950 flex items-center justify-center animate-core-flash relative">
                    <div className="absolute -left-1 -top-1 w-2 h-2 border-t border-l border-poruta-500" />
                    <div className="absolute -right-1 -bottom-1 w-2 h-2 border-b border-r border-poruta-500" />
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex-1 border bg-surface-950/80 p-2.5 backdrop-blur-sm animate-core-flash">
                    <span className="block mb-1 opacity-70">PORUTA_CORE</span>
                    <span className="font-bold">[VERIFY_ENGINE]</span>
                  </div>
                </div>

                {/* Node 3: Customs */}
                <div className="absolute top-[232px] left-0 w-full flex items-center gap-4 z-20">
                  <div className="w-12 h-12 border border-surface-700 bg-surface-950 flex items-center justify-center text-surface-400 relative">
                    <div className="absolute -left-1 -bottom-1 w-2 h-2 border-b border-l border-surface-500" />
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="flex-1 border border-surface-800 bg-surface-950/80 p-2.5 backdrop-blur-sm">
                    <span className="text-surface-600 block mb-1">DEST: CUSTOMS</span>
                    <span className="text-surface-300 font-bold">[TRX_IN] RECEIVED</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-50 p-12 border border-surface-200 h-full flex flex-col justify-center md:order-2 order-1">
              <div className="text-xs font-mono text-poruta-700 mb-4 border border-poruta-700 inline-block px-2 py-1 self-start">MODULE_02</div>
              <h3 className="text-3xl font-bold text-surface-900 mb-4 tracking-tight">Secure Inter-Agency Network</h3>
              <p className="text-surface-600 leading-relaxed text-lg mb-6">
                Built for institutional scale. We securely bridge the gap between logistics providers, clearing agents, and government tax authorities within a compliant, immutable ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
