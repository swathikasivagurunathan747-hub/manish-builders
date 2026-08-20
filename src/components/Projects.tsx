import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

interface Project {
  num: string;
  title: string;
  category: string;
  type: string;
  location: string;
  imageClass: string; // Specific CSS styling for our single asset
  filterType: 'residential' | 'commercial' | 'renovation' | 'ongoing';
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'renovation' | 'ongoing'>('all');

  const projectsData: Project[] = [
    {
      num: '01',
      title: 'MODERN SKY RESIDENCE',
      category: 'Residential Construction',
      type: 'residential',
      location: 'Chennai, Tamil Nadu',
      imageClass: 'object-[center_top] filter contrast-125 saturate-100 brightness-[0.7] sepia-[15%]',
      filterType: 'residential',
    },
    {
      num: '02',
      title: 'THE CORE COMMERCIAL TOWERS',
      category: 'Commercial Construction',
      type: 'commercial',
      location: 'OMR, Chennai',
      imageClass: 'object-center filter grayscale brightness-[0.5] contrast-[1.3]',
      filterType: 'commercial',
    },
    {
      num: '03',
      title: 'METROPOLITAN PLAZA RECONSTRUCTION',
      category: 'Renovation Project',
      type: 'renovation',
      location: 'Coimbatore, Tamil Nadu',
      imageClass: 'object-[center_bottom] filter hue-rotate-[180deg] saturate-150 brightness-[0.6]',
      filterType: 'renovation',
    },
    {
      num: '04',
      title: 'PREMIUM VILLA COMMONS',
      category: 'Ongoing Construction',
      type: 'ongoing',
      location: 'Ecr, Chennai',
      imageClass: 'object-[left_center] filter brightness-[0.6] sepia-[30%] saturate-[80%]',
      filterType: 'ongoing',
    },
  ];

  const filters = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'residential', label: 'RESIDENTIAL' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'renovation', label: 'RENOVATION' },
    { id: 'ongoing', label: 'ONGOING' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.filterType === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Structural Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          {/* Vertical Section Indicator */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>PROJECTS</span>
            </div>
          </div>

          {/* Main Work Section */}
          <div className="lg:col-span-11 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl space-y-6">
                <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                  PROJECTS
                </span>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-text leading-none uppercase">
                  Structures That Speak <br />
                  <span className="text-brand-accent">For Our Work.</span>
                </h2>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id as any)}
                    className={`font-sans font-bold text-[10px] tracking-widest px-4 py-2 border transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'border-brand-accent text-brand-accent bg-brand-accent/5'
                        : 'border-brand-border/40 text-brand-secondary hover:border-brand-text hover:text-brand-text'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.num}
                  className={`group relative flex flex-col justify-between ${
                    idx % 2 === 1 ? 'md:translate-y-16' : ''
                  }`}
                >
                  {/* Aspect Ratio Container for image */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-brand-border/30 bg-brand-bg shadow-xl">
                    {/* Outline framing that expands slightly on hover */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-brand-accent/40 z-30 pointer-events-none transition-all duration-500 m-2" />
                    
                    <img
                      src={heroImg}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${project.imageClass}`}
                    />
                    
                    {/* Visual Overlay */}
                    <div className="absolute inset-0 bg-brand-bg/15 group-hover:bg-transparent transition-colors duration-500 z-10" />

                    {/* Numeric Badge */}
                    <div className="absolute top-4 left-4 z-20 font-heading font-black text-5xl text-brand-text/30 group-hover:text-brand-accent transition-colors duration-500 bg-brand-bg/85 px-4 py-1.5 border border-brand-border/30">
                      {project.num}
                    </div>
                  </div>

                  {/* Metadata Content */}
                  <div className="mt-6 flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="font-sans font-bold text-[10px] tracking-wider text-brand-accent uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-brand-text tracking-wide group-hover:text-brand-accent transition-colors duration-300 uppercase">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-secondary">
                        {project.location}
                      </p>
                    </div>

                    <a
                      href="#quote"
                      className="inline-flex items-center justify-center w-10 h-10 border border-brand-border group-hover:border-brand-accent text-brand-secondary group-hover:text-brand-accent transition-all duration-300 mt-2"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button Wrapper */}
            <div className="flex justify-center pt-16 md:pt-28">
              <a
                href="#quote"
                className="px-10 py-4 border border-brand-accent text-brand-accent font-sans font-bold text-xs tracking-widest hover:bg-brand-accent hover:text-brand-bg transition-all duration-500"
              >
                VIEW ALL PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
