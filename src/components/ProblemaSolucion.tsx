import { configSector } from '@/data/configSector';

export default function ProblemaSolucion() {
  return (
    <section className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-clay-500 text-sm tracking-[0.25em] uppercase mb-6">
          Por qué cambiar
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sage-800 leading-tight text-balance">
          Reservar un momento de descanso no debería ser otra fuente de estrés
        </h2>

        <p className="mt-8 text-stone-600 text-lg leading-relaxed font-light max-w-2xl mx-auto">
          {configSector.problema_tipo}
        </p>

        <div className="mt-12 mx-auto max-w-xl h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent" />

        <p className="mt-12 text-stone-700 text-xl sm:text-2xl font-serif italic leading-relaxed text-balance">
          {configSector.solucion}
        </p>
      </div>
    </section>
  );
}
