import heroImg from '../assets/hero.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          {/* Vertical Label Column */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>ABOUT US</span>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-11 space-y-16">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                ABOUT US
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                We Build More Than Structures.<br />
                <span className="text-brand-accent">We Build Trust.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg leading-relaxed">
                Manish Builders delivers reliable construction and civil engineering solutions with a strong focus on quality, precision, and long-term value. From planning and structural execution to finishing and project delivery, every stage is handled with professional attention and technical expertise.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans font-bold text-xs tracking-widest text-brand-accent hover:text-brand-text transition-colors duration-300 group"
                >
                  DISCOVER OUR STORY 
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Asymmetric Image Grid with Outlined Decorative Rectangles */}
            <div className="relative pt-12 pb-24 md:pb-36 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
              
              {/* Thin Outlined Decorative Rectangular Frames Behind */}
              <div className="absolute top-0 left-4 w-72 h-96 border border-brand-border/30 pointer-events-none hidden md:block" />
              <div className="absolute bottom-4 right-12 w-80 h-96 border border-brand-border/30 pointer-events-none hidden md:block" />

              {/* Image 1: Large Main Image (Full Color & Contrast) */}
              <div className="relative w-full md:w-[55%] z-10 aspect-[4/3] overflow-hidden group shadow-2xl border border-brand-border/40">
                <img
                  src={heroImg}
                  alt="Completed skyscraper building by Manish Builders"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-bg/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-brand-bg/90 px-4 py-2 border border-brand-border">
                  <p className="font-sans font-bold text-xs tracking-wider text-brand-text uppercase">COMPLETED STRUCTURES</p>
                </div>
              </div>

              {/* Image 2: Overlapping Smaller Image (Grayscale/Site Detail) */}
              <div className="relative w-[80%] md:w-[35%] md:-ml-16 md:-mt-32 z-20 aspect-[3/4] overflow-hidden group shadow-2xl border border-brand-border/40">
                <img
                  src={heroImg}
                  alt="Engineering details and structural progress"
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-bg/30 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-brand-bg/90 px-4 py-2 border border-brand-border">
                  <p className="font-sans font-bold text-xs tracking-wider text-brand-text uppercase">STRUCTURAL WORK</p>
                </div>
              </div>

              {/* Image 3: Smallest Detail Image (Architectural Blueprint Cyan Filter) */}
              <div className="relative w-[60%] md:w-[25%] md:-ml-24 md:mt-48 z-30 aspect-square overflow-hidden group shadow-2xl border border-brand-border/40 hidden sm:block">
                <img
                  src={heroImg}
                  alt="Close-up construction planning details"
                  className="w-full h-full object-cover filter sepia hue-rotate-[190deg] saturate-200 brightness-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-brand-bg/90 px-4 py-2 border border-brand-border">
                  <p className="font-sans font-bold text-xs tracking-wider text-brand-text uppercase">ENGINEERING DETAILS</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
