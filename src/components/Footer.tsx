import { Leaf } from 'lucide-react';
import { configSector } from '@/data/configSector';

const enlaces = [
  { etiqueta: 'Servicios', href: '#servicios' },
  { etiqueta: 'Galería', href: '#galeria' },
  { etiqueta: 'Experiencias', href: '#testimonios' },
  { etiqueta: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-clay-400" strokeWidth={1.5} />
              <span className="font-serif text-xl text-cream-50">
                {configSector.nombre_generico}
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-cream-200/60 max-w-xs">
              {configSector.eslogan_sugerido}
            </p>
          </div>

          <div>
            <p className="text-cream-200/50 text-xs tracking-[0.2em] uppercase mb-4">
              Navegación
            </p>
            <ul className="space-y-3">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="text-sm text-cream-100/70 hover:text-sand-300 transition-colors"
                  >
                    {e.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-cream-200/50 text-xs tracking-[0.2em] uppercase mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-cream-100/70">
              <li>{configSector.datos_contacto_placeholder.telefono}</li>
              <li>{configSector.datos_contacto_placeholder.direccion}</li>
              <li>{configSector.datos_contacto_placeholder.horario}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-sage-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-200/40">
            © {new Date().getFullYear()} {configSector.nombre_generico}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream-200/40">
            Demo diseñada por{' '}
            <a
              href="https://www.vegora.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-300 hover:text-sand-200 transition-colors"
            >
              Vegora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
