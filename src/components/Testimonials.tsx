import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: 'Manish Builders managed our structural project professionally from planning through completion. Their communication, attention to engineering detail, and concrete construction quality gave us absolute confidence throughout the process.',
      author: 'Mr. Rajesh Kumar',
      role: 'Residential Client (Villa Project)',
      info: 'ECR, Chennai',
    },
    {
      text: 'Highly competent engineering team. They delivered our corporate retail layout ahead of schedule. The quality of interior structural finishing and adherence to safety guidelines was outstanding.',
      author: 'Mrs. Priyadharshini S.',
      role: 'Commercial Client (Retail Space)',
      info: 'OMR, Chennai',
    },
    {
      text: 'We remodeled our legacy office block with Manish Builders. They balanced structural integrity with modern architectural design constraints perfectly, staying conscious of our budget details.',
      author: 'Mr. Amit Sharma',
      role: 'Renovation Client (Corporate Office)',
      info: 'Coimbatore, TN',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-cream border-t border-brand-border/20">
      {/* Background Grid Lines */}
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
              <span>TESTIMONIALS</span>
            </div>
          </div>

          {/* Testimonial slider contents */}
          <div className="lg:col-span-11 space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-6">
                <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                  TESTIMONIALS
                </span>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                  Trusted By The People <br />
                  <span className="text-brand-accent">We Build For.</span>
                </h2>
                <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 text-[10px] tracking-wider text-brand-accent uppercase font-bold">
                  ★ Placeholder testimonials until genuine customer files are supplied
                </div>
              </div>

              {/* Slider arrow buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Slider window */}
            <div className="relative border border-brand-border/30 bg-white p-8 md:p-16 max-w-5xl shadow-xl overflow-hidden">
              <Quote className="absolute top-8 right-8 text-brand-border/10 w-24 h-24 pointer-events-none" />
              
              <div className="transition-all duration-500 space-y-8">
                <p className="font-sans font-normal text-lg sm:text-xl md:text-2xl text-brand-text leading-relaxed italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-brand-border/20 pt-8 gap-4">
                  <div>
                    <h4 className="font-heading font-extrabold text-base tracking-wider text-brand-text uppercase">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="font-sans text-xs text-brand-secondary mt-1">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <span className="font-sans text-[10px] tracking-widest text-brand-accent font-bold uppercase">
                    {testimonials[activeIndex].info}
                  </span>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex gap-2 mt-8 md:mt-12 justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-8 h-[2px] transition-all duration-300 ${
                      activeIndex === idx ? 'bg-brand-accent' : 'bg-brand-border/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
