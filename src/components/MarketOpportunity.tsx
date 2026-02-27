const MarketOpportunity = () => {
  return (
    <section id="scale" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-20">
      <div className="bg-white border border-surface-200 shadow-2xl flex flex-col lg:flex-row">

        {/* Branding / Context */}
        <div className="p-8 lg:p-10 lg:w-1/3 bg-surface-50 border-b lg:border-b-0 lg:border-r border-surface-200 flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-surface-900 tracking-tighter mb-2 uppercase">Continental Scale</h2>
          <p className="text-sm text-surface-600 leading-relaxed">
            Enterprise infrastructure engineered to handle the complexity of the world&apos;s largest free trade area.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:w-2/3 divide-y sm:divide-y-0 sm:divide-x divide-surface-200">
          <div className="p-8 lg:p-10 flex flex-col justify-center hover:bg-surface-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tighter mb-2">1.7B</div>
            <div className="text-xs font-mono text-poruta-700 uppercase tracking-widest font-bold mb-1">Population</div>
            <div className="text-xs text-surface-500">AfCFTA demographic</div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center hover:bg-surface-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tighter mb-2">$6.7T</div>
            <div className="text-xs font-mono text-poruta-700 uppercase tracking-widest font-bold mb-1">Spend</div>
            <div className="text-xs text-surface-500">Projected by 2030</div>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center hover:bg-surface-50 transition-colors">
            <div className="text-4xl lg:text-5xl font-extrabold text-surface-900 tracking-tighter mb-2">54</div>
            <div className="text-xs font-mono text-poruta-700 uppercase tracking-widest font-bold mb-1">Nations</div>
            <div className="text-xs text-surface-500">Regulations unified</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketOpportunity;
