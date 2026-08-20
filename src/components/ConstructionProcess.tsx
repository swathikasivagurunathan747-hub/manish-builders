export default function ConstructionProcess() {
  const steps = [
    {
      num: '01',
      title: 'CONSULTATION',
      desc: 'Understanding the site location, client requirements, budget constraints, and project expectations.',
    },
    {
      num: '02',
      title: 'PLANNING & DESIGN',
      desc: 'Developing floor layouts, engineering drawings, and complete architectural project blueprints.',
    },
    {
      num: '03',
      title: 'ESTIMATION',
      desc: 'Formulating structured estimations for materials, civil labor, timelines, and budgets.',
    },
    {
      num: '04',
      title: 'CONSTRUCTION',
      desc: 'Executing the civil design on-site under high engineering supervision and safety standards.',
    },
    {
      num: '05',
      title: 'QUALITY INSPECTION',
      desc: 'Rigorous auditing of concrete strength, finishing, plumbing, wiring, and structural metrics.',
    },
    {
      num: '06',
      title: 'HANDOVER',
      desc: 'Final cleaning, client inspection, key handovers, and documentation closing.',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          {/* Vertical section label */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>OUR PROCESS</span>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="lg:col-span-11 space-y-16">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                OUR PROCESS
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                From Vision <br />
                <span className="text-brand-accent">To Reality.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg max-w-2xl">
                Our operations follow a structured, step-by-step framework to ensure safety, quality compliance, and project transparency.
              </p>
            </div>

            {/* Desktop Horizontal/Mobile Vertical Timeline */}
            <div className="relative pt-6">
              {/* Timeline Connector Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-brand-border/30 md:left-0 md:right-0 md:top-[40px] md:h-[1px] md:w-full z-0 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-y-16 relative z-10">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex md:flex-col gap-6 md:gap-0 relative group">
                    
                    {/* Circle Node Indicator */}
                    <div className="flex-shrink-0 w-[80px] h-[80px] rounded-full border border-brand-border/40 bg-brand-bg flex items-center justify-center font-heading font-extrabold text-lg text-brand-text group-hover:border-brand-accent group-hover:text-brand-accent transition-all duration-300 z-10 shadow-lg">
                      {step.num}
                    </div>

                    {/* Timeline text info */}
                    <div className="md:mt-6 space-y-2 text-left">
                      <h3 className="font-heading font-bold text-xs tracking-wider text-brand-text group-hover:text-brand-accent transition-colors duration-300 uppercase">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-secondary leading-relaxed group-hover:text-brand-text/90 transition-colors duration-300">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
