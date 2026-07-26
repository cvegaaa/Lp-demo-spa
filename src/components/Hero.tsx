import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { configSector } from '@/data/configSector';

const imagenesHero = [
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=1800',
  'https://images.pexels.com/photos/3998011/pexels-photo-3998011.jpeg?auto=compress&cs=tinysrgb&w=1800',
];

export default function Hero() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((i) => (i + 1) % imagenesHero.length);
    }, 6000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Capas de imagen con crossfade y zoom */}
      <div className="absolute inset-0">
        {imagenesHero.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-crossfade ${
              i === indice ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt="Ambiente de relajación del spa"
              className={`h-full w-full object-cover ${
                i === indice ? 'animate-zoom-slow' : ''
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 via-sage-900/40 to-sage-900/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/50 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-cream-200/90 text-sm tracking-[0.3em] uppercase mb-6">
            {configSector.sector}
          </p>
          <h1 className="animate-fade-up text-cream-50 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            {configSector.nombre_generico}
          </h1>
          <p className="animate-fade-up mt-6 text-cream-100/90 text-lg sm:text-xl font-light leading-relaxed max-w-xl text-balance">
            {configSector.propuesta_valor}
          </p>
          <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-8 py-4 text-base font-medium text-cream-50 transition-all duration-300 hover:bg-clay-600 hover:shadow-xl hover:shadow-clay-500/25"
            >
              {configSector.cta_principal}
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-cream-100/40 px-8 py-4 text-base font-medium text-cream-50 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/10"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {imagenesHero.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            aria-label={`Imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === indice ? 'w-8 bg-cream-50' : 'w-4 bg-cream-50/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
