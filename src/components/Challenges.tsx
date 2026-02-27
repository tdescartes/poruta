const Challenges = () => {
  return (
    <section id="platform" className="py-24 lg:pt-32 bg-surface-50 border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Section Header (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-900 mb-6 tracking-tighter leading-tight">
              The Cost of<br />Fragmented Trade
            </h2>
            <p className="text-lg text-surface-600 leading-relaxed border-l-4 border-surface-300 pl-6">
              Manual processes and disconnected systems erode margins and introduce massive compliance risks across the logistics ecosystem. We engineer the bottlenecks out.
            </p>
          </div>

          {/* Pain Points */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Importers */}
            <div className="border-t-2 border-surface-900 pt-8 pb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-surface-900 uppercase tracking-wide">Importers</h3>
                <span className="text-xs font-mono text-surface-500 bg-surface-200 px-2 py-1">Margin Erosion</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Costly Delays</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Shipments stuck for weeks awaiting manual clearance processing and document verification.</p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Demurrage Fees</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Unpredictable warehousing costs destroying supply chain profitability and operational budgets.</p>
                </div>
              </div>
            </div>

            {/* Customs Agents */}
            <div className="border-t border-surface-300 pt-8 pb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-surface-900 uppercase tracking-wide">Customs Agents</h3>
                <span className="text-xs font-mono text-surface-500 bg-surface-200 px-2 py-1">Compliance Risk</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Severe Penalties</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Manual data entry inevitably leads to keystroke errors, creating massive liability and fines.</p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Throughput Caps</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Reliance on human document processing puts a hard ceiling on business scalability.</p>
                </div>
              </div>
            </div>

            {/* Institutions */}
            <div className="border-t border-surface-300 pt-8 pb-12">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-surface-900 uppercase tracking-wide">Institutions</h3>
                <span className="text-xs font-mono text-surface-500 bg-surface-200 px-2 py-1">Systemic Blind Spots</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Data Silos</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Disconnected software systems completely preventing real-time inter-agency oversight.</p>
                </div>
                <div>
                  <h4 className="font-bold text-surface-900 mb-2">Poor Forecasting</h4>
                  <p className="text-sm text-surface-600 leading-relaxed">Inability to accurately predict regional trade revenues or enforce national regulations effectively.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
