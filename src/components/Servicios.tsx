import { configSector } from '@/data/configSector';
import { Clock } from 'lucide-react';

export default function Servicios() {
  return (
    <section id="servicios" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-clay-500 text-sm tracking-[0.25em] uppercase mb-4">
            Nuestros rituales
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 text-balance">
            Servicios pensados para cada necesidad
          </h2>
          <p className="mt-5 text-stone-600 text-lg font-light max-w-xl mx-auto">
            Cada sesión se personaliza según tu momento, tu piel y tu cuerpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {configSector.servicios.map((servicio) => (
            <article
              key={servicio.nombre}
              className="group bg-cream-50 rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-sand-200/50 transition-all duration-500 hover:shadow-xl hover:shadow-sage-900/5 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent opacity-60" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-sage-800 mb-3">
                  {servicio.nombre}
                </h3>
                <p className="text-stone-600 text-[15px] leading-relaxed font-light">
                  {servicio.descripcion}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sand-600 text-sm">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  <span>{servicio.duracion}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
