import { ShieldAlert, Cpu, Heart, CheckCircle2, DollarSign, Activity } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      title: 'ENGINEERING EXPERTISE',
      desc: 'Deep structural engineering and technical civil planning expertise directing every build stage.',
      icon: Cpu,
    },
    {
      title: 'QUALITY CONSTRUCTION',
      desc: 'Rigorous selection of raw materials combined with absolute standards of craftsmanship.',
      icon: Heart,
    },
    {
      title: 'TRANSPARENT COMMUNICATION',
      desc: 'Direct channels, detailed reporting, and clear milestones from inception to completion.',
      icon: CheckCircle2,
    },
    {
      title: 'TIMELY EXECUTION',
      desc: 'Optimized timelines and scheduling software to deliver projects without compromise or delays.',
      icon: ShieldAlert,
    },
    {
      title: 'COST CONSCIOUS',
      desc: 'Strategic resource planning offering structural integrity tailored to practical budgets.',
      icon: DollarSign,
    },
    {
      title: 'END-TO-END SUPPORT',
      desc: 'Seamless management from site planning and approvals through layout, construction, and final handover.',
      icon: Activity,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-cream border-t border-brand-border/20">
      {/* Decorative Grid Lines */}
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
              <span>CORE VALUES</span>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="lg:col-span-11 space-y-16">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                CORE VALUES
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                Built on Experience. <br />
                <span className="text-brand-accent">Driven by Quality.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg max-w-2xl">
                We execute every structural element with a commitment to durability, transparency, and safety. Discover why clients trust Manish Builders.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {points.map((point, idx) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 border border-brand-border/30 bg-white hover:border-brand-accent transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 flex items-center justify-center border border-brand-border/40 group-hover:border-brand-accent/50 text-brand-secondary group-hover:text-brand-accent transition-all duration-300">
                        <IconComponent size={20} className="stroke-[1.5]" />
                      </div>
                      <span className="font-sans text-brand-border/50 group-hover:text-brand-accent/20 font-bold text-2xl transition-colors duration-300">
                        {`0${idx + 1}`}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-sm tracking-widest text-brand-text mb-3 uppercase group-hover:text-brand-accent transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-secondary leading-relaxed group-hover:text-brand-text/90 transition-colors duration-300">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
