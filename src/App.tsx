import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import ConstructionProcess from './components/ConstructionProcess';
import ProjectJourney from './components/ProjectJourney';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <ConstructionProcess />
      <ProjectJourney />
      <BeforeAfter />
      <Testimonials />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}
