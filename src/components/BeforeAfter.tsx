import React, { useState, useRef, useEffect } from 'react';
import heroImg from '../assets/hero.jpg';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Vertical Label */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>COMPARISON</span>
            </div>
          </div>

          {/* Slider Content */}
          <div className="lg:col-span-11 space-y-12">
            <div className="max-w-3xl space-y-6">
              <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                COMPARISON
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-tight uppercase">
                Transforming Ideas <br />
                <span className="text-brand-accent">Into Reality.</span>
              </h2>
              <p className="font-sans text-brand-secondary text-base md:text-lg max-w-2xl">
                Drag the slider handle to compare the structural blueprint phase against the final completed engineering execution of our projects.
              </p>
            </div>

            {/* Slider Drag Container */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden border border-brand-border/40 select-none cursor-ew-resize shadow-2xl"
            >
              {/* After Image (Full color, behind) */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroImg}
                  alt="Completed skyscraper"
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
                  draggable={false}
                />
                <div className="absolute bottom-4 right-4 bg-brand-bg/90 border border-brand-border px-4 py-2 text-brand-text font-sans font-bold text-[10px] tracking-widest uppercase">
                  AFTER / COMPLETED
                </div>
              </div>

              {/* Before Image (Grayscale blueprint, clipped) */}
              <div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* We maintain full width inside the clipped div so the image does not stretch */}
                <div className="absolute inset-0 w-full h-full min-w-[100vw] lg:min-w-[1200px]" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                  <img
                    src={heroImg}
                    alt="Construction site preparation"
                    className="w-full h-full object-cover filter grayscale sepia-[30%] brightness-[0.4] contrast-125"
                    draggable={false}
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-bg/90 border border-brand-border px-4 py-2 text-brand-accent font-sans font-bold text-[10px] tracking-widest uppercase">
                    BEFORE / BLUEPRINT
                  </div>
                </div>
              </div>

              {/* Drag Handle Bar and Control Circle */}
              <div
                className="absolute top-0 bottom-0 w-[1px] bg-brand-accent z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-accent text-brand-bg flex items-center justify-center rounded-full shadow-2xl border border-brand-text/50 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
                >
                  <span className="font-sans font-black text-xs select-none">↔</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
