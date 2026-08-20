import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const increment = value / (duration / 16); // ~60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-6 border border-brand-border/30 bg-brand-bg/50 backdrop-blur-sm group hover:border-brand-accent transition-all duration-500">
      <span className="font-heading font-extrabold text-5xl sm:text-6xl text-brand-text group-hover:text-brand-accent transition-colors duration-300">
        {count}
        <span className="text-brand-accent">{suffix}</span>
      </span>
      <span className="font-sans font-bold text-xs tracking-[0.2em] text-brand-secondary uppercase mt-3 text-center">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const statsData = [
    { value: 10, suffix: '+', label: 'YEARS EXPERIENCE' },
    { value: 50, suffix: '+', label: 'PROJECTS COMPLETED' },
    { value: 100, suffix: '+', label: 'HAPPY CLIENTS' },
    { value: 500, suffix: 'K+', label: 'SQ.FT. BUILT' },
  ];

  return (
    <section className="relative z-20 -mt-10 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-brand-bg shadow-2xl">
        {statsData.map((stat, idx) => (
          <StatCounter
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
