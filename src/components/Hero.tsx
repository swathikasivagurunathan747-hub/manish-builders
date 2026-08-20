import { ArrowDown } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1b26]">
      {/* Background Image with Cinematic Architectural Tone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Manish Builders Architecture Skyscraper"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] opacity-65"
        />
        {/* Dark Blue Transparent Overlay Layer */}
        <div className="absolute inset-0 bg-[#0d1b26]/75 mix-blend-multiply pointer-events-none" />
        {/* Gradient overlay for fade-out at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b26] via-transparent to-transparent pointer-events-none" />
      </div>



      {/* Main Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 lg:px-12 pt-28 pb-16 flex flex-col justify-between min-h-[85vh]">
        <div className="my-auto lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Title & Content */}
          <div className="lg:col-span-9 space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-brand-highlight" />
              <span className="font-sans font-bold text-xs tracking-[0.3em] text-brand-highlight uppercase">
                Civil Engineering & Construction
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tight text-white leading-[1.05] uppercase">
              Engineering Spaces. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-highlight">
                Building Legacies.
              </span>
            </h1>

            <p className="font-sans font-normal text-slate-200/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              Professional construction and civil engineering solutions built on quality, precision, and trust. Delivering landmark projects designed to stand the test of time.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-brand-highlight text-[#0b1a27] font-sans font-bold text-xs tracking-widest hover:bg-transparent hover:text-brand-highlight hover:border-brand-highlight border border-transparent transition-all duration-300"
              >
                EXPLORE OUR PROJECTS
              </a>
              <a
                href="#quote"
                className="px-8 py-4 border border-white/20 text-white font-sans font-bold text-xs tracking-widest hover:border-brand-highlight hover:text-brand-highlight transition-all duration-300"
              >
                GET A FREE QUOTE
              </a>
            </div>
          </div>

          {/* Vertical Micro Section Indicator */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-center h-full">
            <div className="vertical-label-container flex items-center space-y-4 text-white/50 font-sans text-[10px] tracking-[0.4em] uppercase font-bold">
              <span>ESTD 2016</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight my-4" />
              <span>MANISH BUILDERS</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-end justify-between border-t border-white/10 pt-8 mt-8 animate-fade-in-up">
          <div className="flex space-x-12 text-left">
            <div>
              <p className="font-heading font-bold text-lg text-white">Chennai, TN</p>
              <p className="font-sans text-xs tracking-wider text-slate-300 uppercase mt-1">Headquarters</p>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-lg text-white">South India</p>
              <p className="font-sans text-xs tracking-wider text-slate-300 uppercase mt-1">Service Area</p>
            </div>
          </div>

          <a
            href="#about"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-brand-highlight text-white hover:text-brand-highlight transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
