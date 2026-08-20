import { ArrowUpRight, Home, Building2, Layers, HardHat, Compass, Palette } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'RESIDENTIAL CONSTRUCTION',
      desc: 'Custom homes, premium villas, and modern residential developments executed with absolute precision and quality.',
      icon: Home,
    },
    {
      num: '02',
      title: 'COMMERCIAL CONSTRUCTION',
      desc: 'High-performance construction solutions for corporate offices, retail spaces, and mixed-use commercial developments.',
      icon: Building2,
    },
    {
      num: '03',
      title: 'RENOVATION & REMODELING',
      desc: 'Transform and modernize existing structures through structural reinforcement, expansion, and high-end finishing.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'CIVIL ENGINEERING',
      desc: 'Professional engineering execution of structural foundations, heavy concrete structures, and general civil contracting.',
      icon: HardHat,
    },
    {
      num: '05',
      title: 'ARCHITECTURAL PLANNING',
      desc: 'Thoughtful floor layouts, space optimization, local approvals, and complete project execution coordination.',
      icon: Compass,
    },
    {
      num: '06',
      title: 'INTERIOR WORKS',
      desc: 'Highly functional interior execution, wood works, false ceilings, flooring, and bespoke interior finishing solutions.',
      icon: Palette,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-cream border-t border-brand-border/20">
      {/* Subtle Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          {/* Vertical Label */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>SERVICES</span>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="lg:col-span-11 space-y-16">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                SERVICES
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                Expertise Built Around <br />
                <span className="text-brand-accent">Your Vision.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg max-w-2xl">
                We combine technical civil engineering expertise with modern project management to deliver structural brilliance across all sectors.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="relative group p-8 bg-white border border-brand-border/40 hover:border-brand-accent transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px]"
                  >
                    {/* Background Skyscraper Hover Image Reveal */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                      <img
                        src={heroImg}
                        alt="Service Background Skyscraper"
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="font-heading font-black text-4xl text-brand-accent/20 group-hover:text-brand-accent transition-colors duration-500">
                          {service.num}
                        </span>
                        <IconComponent className="text-brand-secondary group-hover:text-brand-accent transition-colors duration-500" size={24} />
                      </div>
                      <h3 className="font-heading font-bold text-lg tracking-wider text-brand-text group-hover:text-brand-accent transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-secondary leading-relaxed group-hover:text-brand-text/90 transition-colors duration-500">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom Link Action */}
                    <div className="relative z-10 pt-6 border-t border-brand-border/20 flex justify-between items-center group-hover:border-brand-accent/30 transition-colors duration-500">
                      <a href="#quote" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary group-hover:text-brand-accent transition-colors duration-500">
                        INQUIRE NOW
                      </a>
                      <ArrowUpRight
                        size={16}
                        className="text-brand-secondary transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-accent transition-all duration-300"
                      />
                    </div>
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
