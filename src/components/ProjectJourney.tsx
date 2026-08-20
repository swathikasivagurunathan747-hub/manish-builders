import heroImg from '../assets/hero.jpg';

export default function ProjectJourney() {
  const stages = [
    {
      num: '01',
      title: 'SITE PREPARATION',
      desc: 'Clearing, excavation, and structural setting of boundary baselines.',
      imageClass: 'object-[center_top] filter grayscale sepia-[40%] contrast-125 brightness-[0.4]',
    },
    {
      num: '02',
      title: 'FOUNDATION',
      desc: 'Reinforced concrete footings, columns, and plinth beam structures.',
      imageClass: 'object-center filter grayscale brightness-[0.4] contrast-[1.5]',
    },
    {
      num: '03',
      title: 'STRUCTURAL WORK',
      desc: 'Formwork erection, framing of columns, slabs, and beam grids.',
      imageClass: 'object-[center_bottom] filter hue-rotate-[190deg] saturate-150 brightness-[0.4]',
    },
    {
      num: '04',
      title: 'BRICKWORK',
      desc: 'Partition wall layout, inner layouts, and structural detailing.',
      imageClass: 'object-[left_center] filter brightness-[0.4] sepia-[20%] saturate-120',
    },
    {
      num: '05',
      title: 'FINISHING',
      desc: 'Plastering, painting, MEP cabling, floor tiles, and fixtures installation.',
      imageClass: 'object-[right_center] filter saturate-[20%] brightness-[0.5] contrast-[1.1]',
    },
    {
      num: '06',
      title: 'COMPLETED PROJECT',
      desc: 'Complete handover of ready-to-occupy premium skyscraper.',
      imageClass: 'object-center filter brightness-[0.7] contrast-[1.05] saturate-100',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Structural vertical lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Vertical section label */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>THE JOURNEY</span>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="lg:col-span-11 space-y-16">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                THE JOURNEY
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                From Groundwork <br />
                <span className="text-brand-accent">To Completion.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg max-w-2xl">
                We track and deliver construction progress with strict quality control checklists at each phase of site preparation, civil assembly, and handover.
              </p>
            </div>

            {/* Editorial Progress Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stages.map((stage, idx) => (
                <div key={idx} className="group relative overflow-hidden aspect-[4/5] border border-brand-border/30 bg-brand-bg flex flex-col justify-end p-8 shadow-xl">
                  
                  {/* Styled Image Asset */}
                  <img
                    src={heroImg}
                    alt={stage.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 z-0 ${stage.imageClass}`}
                  />

                  {/* Gradient bottom overlay for readable text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90 z-10" />

                  {/* Stage Number & Text Details */}
                  <div className="relative z-20 space-y-3">
                    <span className="font-heading font-black text-4xl text-brand-accent/30 group-hover:text-brand-accent transition-colors duration-500">
                      {stage.num}
                    </span>
                    <h3 className="font-heading font-bold text-sm tracking-widest text-brand-text uppercase group-hover:text-brand-accent transition-colors duration-300">
                      {stage.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-secondary leading-relaxed group-hover:text-brand-text/90 transition-colors duration-300">
                      {stage.desc}
                    </p>
                  </div>
                  
                  {/* Decorative Frame */}
                  <div className="absolute inset-4 border border-brand-border/10 group-hover:border-brand-accent/25 transition-colors duration-500 z-10 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
