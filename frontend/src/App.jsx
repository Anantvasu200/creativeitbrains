import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import TechStack from './components/TechStack.jsx';
import FeatureShowcase from './components/FeatureShowcase.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import ExecutiveTeam from './components/ExecutiveTeam.jsx';
import BlogPlaceholder from './components/BlogPlaceholder.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

import TechMarquee from './components/TechMarquee.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090b10] text-white relative">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Metrics />
        <Services />
        <WhyChooseUs />
        <TechStack />
        <FeatureShowcase />
        <Process />
        <Testimonials />
        <ExecutiveTeam />
        <BlogPlaceholder />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
