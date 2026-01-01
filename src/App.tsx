import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
