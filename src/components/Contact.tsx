import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'OFFICE ADDRESS',
      value1: 'Manish Builders Corporate Office,',
      value2: '12, Gandhi Nagar Main Road, Adyar, Chennai - 600020',
    },
    {
      icon: Phone,
      label: 'PHONE NUMBER',
      value1: '+91 98765 43210',
      value2: '+91 44 2441 5678',
    },
    {
      icon: Mail,
      label: 'EMAIL ADDRESS',
      value1: 'info@manishbuilders.com',
      value2: 'support@manishbuilders.com',
    },
    {
      icon: Clock,
      label: 'BUSINESS HOURS',
      value1: 'Mon - Sat: 9:00 AM - 6:00 PM',
      value2: 'Sunday: Closed',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Background grids */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-brand-text" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text hidden md:block" />
        <div className="w-[1px] h-full bg-brand-text" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          {/* Vertical section label */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="vertical-label-container flex items-center space-y-4 font-sans font-bold text-xs tracking-[0.4em] text-brand-accent uppercase mt-2">
              <span className="w-12 h-[1px] bg-brand-accent my-4" />
              <span>CONTACT</span>
            </div>
          </div>

          {/* Contact Layout */}
          <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Address Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                  CONTACT
                </span>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-brand-text leading-tight uppercase">
                  Let's Build <br />
                  <span className="text-brand-accent">Together.</span>
                </h2>
                <p className="font-sans text-brand-secondary text-sm sm:text-base leading-relaxed">
                  Visit our regional corporate headquarters or get in touch with our estimators to schedule a site inspection.
                </p>
              </div>

              {/* Grid of contact values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 border border-brand-border/40 flex items-center justify-center text-brand-accent">
                        <Icon size={16} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-sans font-bold text-[9px] tracking-widest text-brand-secondary uppercase">{info.label}</p>
                        <p className="font-heading font-semibold text-sm text-brand-text leading-relaxed">{info.value1}</p>
                        {info.value2 && <p className="font-heading font-semibold text-sm text-brand-secondary leading-relaxed">{info.value2}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Map Placeholder Column */}
            <div className="lg:col-span-7 h-[450px] relative border border-brand-border/30 bg-brand-bg/80 shadow-2xl overflow-hidden group">
              {/* Decorative crosshairs */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-brand-border/30 pointer-events-none group-hover:border-brand-accent transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-brand-border/30 pointer-events-none group-hover:border-brand-accent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-brand-border/30 pointer-events-none group-hover:border-brand-accent transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-brand-border/30 pointer-events-none group-hover:border-brand-accent transition-colors duration-500" />

              {/* High-quality dark map container */}
              <iframe
                title="Manish Builders Location Map"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3887.3592476566085!2d80.2503254!3d13.0127814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ea045657ff%3A0x6b44747ebc79ff57!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                allowFullScreen={false}
                loading="lazy"
              />
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-bg/95 border border-brand-border px-4 py-2 text-[10px] tracking-wider text-brand-accent uppercase font-bold pointer-events-none">
                CORPORATE HEADQUARTERS
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
