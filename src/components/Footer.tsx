import { ArrowUp, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-cream border-t border-brand-border/20 pt-20 pb-10 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-border/10">
          
          {/* Brand Info Pane */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-2xl tracking-[0.15em] text-brand-text leading-none">
                MANISH
              </span>
              <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-brand-accent leading-none mt-1">
                BUILDERS
              </span>
            </a>
            <p className="font-sans text-brand-secondary text-sm leading-relaxed max-w-sm">
              "Building with Precision. Delivering with Trust." <br />
              Premium civil engineering & construction services based in Chennai, South India.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent flex items-center justify-center transition-all duration-300"
                aria-label="Instagram link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent flex items-center justify-center transition-all duration-300"
                aria-label="Facebook link"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn link"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-brand-text uppercase">COMPANY</h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider">
              <li>
                <a href="#about" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#process" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Process</a>
              </li>
              <li>
                <a href="#contact" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-brand-text uppercase">SERVICES</h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider">
              <li>
                <a href="#services" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Residential Construction</a>
              </li>
              <li>
                <a href="#services" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Commercial Construction</a>
              </li>
              <li>
                <a href="#services" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Renovations & Remodeling</a>
              </li>
              <li>
                <a href="#services" className="text-brand-secondary hover:text-brand-accent transition-colors duration-300">Civil Engineering</a>
              </li>
            </ul>
          </div>

          {/* Location & Details Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-xs tracking-[0.25em] text-brand-text uppercase">CONTACT</h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider text-brand-secondary">
              <li>
                <span className="block text-[9px] text-brand-accent font-bold">ADDRESS</span>
                Adyar, Chennai, Tamil Nadu
              </li>
              <li>
                <span className="block text-[9px] text-brand-accent font-bold">PHONE</span>
                +91 98765 43210
              </li>
              <li>
                <span className="block text-[9px] text-brand-accent font-bold">EMAIL</span>
                info@manishbuilders.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 gap-6">
          <p className="font-sans text-[10px] tracking-widest text-brand-secondary text-center sm:text-left">
            © {new Date().getFullYear()} MANISH BUILDERS. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-brand-border/40 hover:border-brand-accent text-brand-secondary hover:text-brand-accent transition-all duration-300 font-sans font-bold text-[10px] tracking-widest"
            aria-label="Scroll to top"
          >
            BACK TO TOP
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
