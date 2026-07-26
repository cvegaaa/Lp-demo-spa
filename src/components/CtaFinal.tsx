import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import { configSector } from '@/data/configSector';

export default function CtaFinal() {
  const { datos_contacto_placeholder: c, cta_principal } = configSector;
  const waLink = `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`;

  const tarjetas = [
    {
      icon: Phone,
      etiqueta: 'Teléfono',
      valor: c.telefono,
      href: `tel:${c.telefono.replace(/[^0-9+]/g, '')}`,
    },
    {
      icon: MessageCircle,
      etiqueta: 'WhatsApp',
      valor: c.whatsapp,
      href: waLink,
    },
    {
      icon: MapPin,
      etiqueta: 'Dirección',
      valor: c.direccion,
      href: '#',
    },
    {
      icon: Clock,
      etiqueta: 'Horario',
      valor: c.horario,
      href: '#',
    },
  ];

  return (
    <section id="contacto" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-sage-800 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-sage-900/80 to-sage-800/90" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-cream-50 text-balance">
              Tu próxima pausa está a un mensaje de distancia
            </h2>
            <p className="mt-5 text-cream-100/80 text-lg font-light max-w-xl mx-auto">
              Reserva tu sesión y déjanos cuidar del resto.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-8 py-4 text-base font-medium text-cream-50 transition-all duration-300 hover:bg-clay-600 hover:shadow-xl hover:shadow-clay-500/25"
              >
                {cta_principal}
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href={`tel:${c.telefono.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center rounded-full border border-cream-100/40 px-8 py-4 text-base font-medium text-cream-50 transition-all duration-300 hover:bg-cream-50/10"
              >
                Llamar ahora
              </a>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {tarjetas.map((t) => (
                <a
                  key={t.etiqueta}
                  href={t.href}
                  target={t.href.startsWith('http') ? '_blank' : undefined}
                  rel={t.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 rounded-xl bg-sage-700/30 p-4 border border-sage-600/20 transition-colors hover:border-clay-400/40"
                >
                  <t.icon className="h-5 w-5 text-sand-300 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-cream-200/60 text-xs tracking-wide uppercase">
                      {t.etiqueta}
                    </p>
                    <p className="text-cream-50 text-sm font-medium mt-1">{t.valor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
