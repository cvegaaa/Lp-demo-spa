import { configSector } from '@/data/configSector';

export default function Galeria() {
  return (
    <section id="galeria" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-clay-500 text-sm tracking-[0.25em] uppercase mb-4">
            El espacio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 text-balance">
            Un ambiente creado para el descanso
          </h2>
          <p className="mt-5 text-stone-600 text-lg font-light max-w-xl mx-auto">
            La luz, las texturas y los aromas se cuidan en cada rincón para que
            la calma comience al entrar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {configSector.galeria.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 || i === 5 ? 'row-span-2 h-full min-h-[300px]' : 'h-48 sm:h-64'
              }`}
            >
              <img
                src={src}
                alt={`Ambiente del spa ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
