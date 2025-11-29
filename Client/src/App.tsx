import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Benefits from './components/Benefits';
import CreativeSection from './components/CreativeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <CreativeSection />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
