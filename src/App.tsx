import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemaSolucion from '@/components/ProblemaSolucion';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import Testimonios from '@/components/Testimonios';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemaSolucion />
        <Servicios />
        <Galeria />
        <Testimonios />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
