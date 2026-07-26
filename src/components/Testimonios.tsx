import { Quote } from 'lucide-react';
import { configSector } from '@/data/configSector';

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="relative bg-sage-800 py-24 sm:py-32 overflow-hidden"
    >
      {/* Detalle decorativo */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sage-700/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-clay-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sand-300 text-sm tracking-[0.25em] uppercase mb-4">
            Experiencias reales
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 text-balance">
            Lo que se siente después de una sesión
          </h2>
          <p className="mt-5 text-cream-200/70 text-sm italic max-w-lg mx-auto">
            Testimonios de ejemplo — se reemplazan con reseñas reales del negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {configSector.testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="bg-sage-700/30 backdrop-blur-sm rounded-2xl p-8 border border-sage-600/30"
            >
              <Quote
                className="h-8 w-8 text-clay-300 mb-4"
                strokeWidth={1}
              />
              <blockquote className="text-cream-100/90 text-lg font-light leading-relaxed font-serif italic">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-cream-50 font-medium">{t.nombre}</p>
                <p className="text-cream-200/60 text-sm mt-0.5">{t.contexto}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
