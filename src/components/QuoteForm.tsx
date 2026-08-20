import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Check, AlertCircle } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Residential',
    area: '',
    budget: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+() \-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) errors.location = 'Project location is required';

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus('loading');
    
    // Simulate API Submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        projectType: 'Residential',
        area: '',
        budget: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border/20">
      {/* Background structural lines */}
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
              <span>GET A QUOTE</span>
            </div>
          </div>

          {/* Form Content Column */}
          <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Title / Info Pane */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <span className="lg:hidden font-sans font-bold text-xs tracking-[0.3em] text-brand-accent uppercase block mb-2">
                  GET A QUOTE
                </span>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-brand-text leading-tight uppercase">
                  Start Your Project <br />
                  <span className="text-brand-accent">With Us.</span>
                </h2>
                <p className="font-sans text-brand-secondary text-sm sm:text-base leading-relaxed">
                  Provide your requirements below and our engineering team will evaluate your layout details and revert with a structural consultation plan.
                </p>
              </div>

              {/* Instant Contact Panels */}
              <div className="space-y-4">
                <p className="font-sans font-bold text-[10px] tracking-widest text-brand-text uppercase">INSTANT ASSISTANCE</p>
                
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 border border-brand-border/30 bg-brand-bg/50 hover:border-brand-accent transition-colors duration-300 group"
                >
                  <Phone size={18} className="text-brand-accent" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-brand-secondary uppercase">CALL OUR OFFICE</p>
                    <p className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-accent transition-colors">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-brand-border/30 bg-brand-bg/50 hover:border-brand-accent transition-colors duration-300 group"
                >
                  <MessageSquare size={18} className="text-emerald-500" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-brand-secondary uppercase">WHATSAPP US</p>
                    <p className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-accent transition-colors">Chat Instantly</p>
                  </div>
                </a>

                <a
                  href="mailto:info@manishbuilders.com"
                  className="flex items-center gap-4 p-4 border border-brand-border/30 bg-brand-bg/50 hover:border-brand-accent transition-colors duration-300 group"
                >
                  <Mail size={18} className="text-brand-accent" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-brand-secondary uppercase">EMAIL ESTIMATION</p>
                    <p className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-accent transition-colors">info@manishbuilders.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Actual Form Pane */}
            <div className="lg:col-span-7 bg-brand-bg/70 border border-brand-border/30 p-8 sm:p-12 shadow-2xl relative">
              {submitStatus === 'success' ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent">
                    <Check size={32} />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-text uppercase tracking-wide">
                    CONSULTATION REQUESTED
                  </h3>
                  <p className="font-sans text-sm text-brand-secondary max-w-sm">
                    Thank you. Your details have been received successfully. Our engineering coordinators will reach out within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-2.5 border border-brand-accent text-brand-accent font-sans font-bold text-xs tracking-widest hover:bg-brand-accent hover:text-brand-bg transition-all"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg border ${
                          formErrors.name ? 'border-red-500' : 'border-brand-border/40 focus:border-brand-accent'
                        } px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg border ${
                          formErrors.phone ? 'border-red-500' : 'border-brand-border/40 focus:border-brand-accent'
                        } px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300`}
                        placeholder="+91 98765 43210"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg border ${
                          formErrors.email ? 'border-red-500' : 'border-brand-border/40 focus:border-brand-accent'
                        } px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {formErrors.email}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <label htmlFor="location" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg border ${
                          formErrors.location ? 'border-red-500' : 'border-brand-border/40 focus:border-brand-accent'
                        } px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300`}
                        placeholder="Adyar, Chennai"
                      />
                      {formErrors.location && (
                        <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {formErrors.location}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Project Type */}
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-brand-border/40 focus:border-brand-accent px-4 py-3 text-sm text-brand-text outline-none transition-colors duration-300"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Civil Work">Civil Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Area */}
                    <div className="space-y-2">
                      <label htmlFor="area" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Approx. Area (sq.ft)
                      </label>
                      <input
                        type="number"
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-brand-border/40 focus:border-brand-accent px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300"
                        placeholder="2400"
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                        Est. Budget (INR)
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-brand-border/40 focus:border-brand-accent px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300"
                        placeholder="50 Lakhs"
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans font-bold text-[10px] tracking-widest text-brand-secondary uppercase block">
                      Message / Project Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border/40 focus:border-brand-accent px-4 py-3 text-sm text-brand-text placeholder-brand-secondary/40 outline-none transition-colors duration-300 resize-none"
                      placeholder="Share details regarding height, material constraints, structural layouts, etc."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full py-4 bg-brand-accent text-brand-bg font-sans font-bold text-xs tracking-widest hover:bg-opacity-95 transition-all duration-300 disabled:opacity-50"
                  >
                    {submitStatus === 'loading' ? 'SUBMITTING REQUEST...' : 'REQUEST A CONSULTATION'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
