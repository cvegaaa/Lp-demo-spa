import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { configSector } from '@/data/configSector';

const enlaces = [
  { etiqueta: 'Servicios', href: '#servicios' },
  { etiqueta: 'Galería', href: '#galeria' },
  { etiqueta: 'Experiencias', href: '#testimonios' },
  { etiqueta: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [abierta, setAbierta] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className={`flex items-center gap-2 transition-colors ${
            scrolled ? 'text-sage-800' : 'text-cream-50'
          }`}
        >
          <Leaf className="h-6 w-6 text-clay-400" strokeWidth={1.5} />
          <span className="font-serif text-xl tracking-tight">
            {configSector.nombre_generico}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-clay-400 ${
                  scrolled ? 'text-stone-600' : 'text-cream-100/90'
                }`}
              >
                {enlace.etiqueta}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-clay-500 px-6 py-2.5 text-sm font-medium text-cream-50 transition-all duration-300 hover:bg-clay-600 hover:shadow-lg hover:shadow-clay-500/20"
        >
          {configSector.cta_principal}
        </a>

        <button
          className="md:hidden"
          onClick={() => setAbierta(!abierta)}
          aria-label="Abrir menú"
        >
          {abierta ? (
            <X
              className={`h-6 w-6 ${scrolled ? 'text-sage-800' : 'text-cream-50'}`}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${scrolled ? 'text-sage-800' : 'text-cream-50'}`}
              strokeWidth={1.5}
            />
          )}
        </button>
      </nav>

      {abierta && (
        <div className="md:hidden bg-cream-50 border-t border-sand-200/60">
          <ul className="px-6 py-6 space-y-4">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  onClick={() => setAbierta(false)}
                  className="block text-stone-700 text-base font-medium"
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setAbierta(false)}
                className="inline-flex items-center rounded-full bg-clay-500 px-6 py-2.5 text-sm font-medium text-cream-50"
              >
                {configSector.cta_principal}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
