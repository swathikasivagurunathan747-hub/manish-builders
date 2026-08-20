import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md py-4 border-brand-border'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex flex-col group">
          <span className={`font-heading font-extrabold text-xl md:text-2xl tracking-[0.15em] leading-none transition-colors duration-300 ${
            isScrolled ? 'text-brand-text group-hover:text-brand-accent' : 'text-white group-hover:text-brand-highlight'
          }`}>
            MANISH
          </span>
          <span className={`font-sans font-bold text-[10px] md:text-xs tracking-[0.3em] leading-none mt-1 transition-colors duration-300 ${
            isScrolled ? 'text-brand-accent' : 'text-brand-highlight'
          }`}>
            BUILDERS
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-sans font-semibold text-xs tracking-widest transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled
                      ? 'text-brand-secondary hover:text-brand-text after:bg-brand-accent'
                      : 'text-white/80 hover:text-white after:bg-brand-highlight'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#quote"
            className={`group flex items-center gap-2 px-5 py-2.5 border transition-all duration-300 font-sans font-bold text-xs tracking-widest ${
              isScrolled
                ? 'border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg'
                : 'border-white/30 text-white hover:bg-white hover:text-[#0d1b26] hover:border-white'
            }`}
          >
            GET A QUOTE
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors ${
            isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-brand-highlight'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-brand-bg/98 border-l border-brand-border/30 z-40 transition-transform duration-500 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col justify-center px-10`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-brand-text hover:text-brand-accent transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="space-y-6 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-heading font-bold text-2xl tracking-wider text-brand-text hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#quote"
          onClick={() => setIsOpen(false)}
          className="w-full text-center group flex items-center justify-center gap-2 px-6 py-4 bg-brand-accent text-brand-bg font-sans font-bold text-sm tracking-widest hover:bg-opacity-90 transition-all duration-300"
        >
          GET A QUOTE
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </nav>
  );
}
