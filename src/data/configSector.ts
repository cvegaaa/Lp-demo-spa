export interface Servicio {
  nombre: string;
  descripcion: string;
  duracion: string;
  imagen: string;
}

export interface Testimonio {
  nombre: string;
  contexto: string;
  texto: string;
}

export interface DatoContacto {
  telefono: string;
  whatsapp: string;
  direccion: string;
  horario: string;
}

export interface ConfigSector {
  sector: string;
  nombre_generico: string;
  eslogan_sugerido: string;
  propuesta_valor: string;
  problema_tipo: string;
  solucion: string;
  cta_principal: string;
  servicios: Servicio[];
  testimonios: Testimonio[];
  galeria: string[];
  datos_contacto_placeholder: DatoContacto;
}

export const configSector: ConfigSector = {
  sector: 'Spas / Estética',
  nombre_generico: 'Spa & Centro de Estética',
  eslogan_sugerido: 'Bienestar que se siente en cada detalle',
  propuesta_valor:
    'Rituales de relajación y cuidado de la piel diseñados para desconectar del ritmo diario y reconectar contigo.',
  problema_tipo:
    'El agendamiento manual por WhatsApp consume tiempo, genera confusiones de horario y hace que cada reserva dependa de responder mensajes a destiempo.',
  solucion:
    'Un espacio digital propio donde cada persona elige su ritual, ve la disponibilidad real y confirma su cita en segundos — sin esperas, sin mensajes cruzados.',
  cta_principal: 'Reservar sesión',
  servicios: [
    {
      nombre: 'Masajes terapéuticos',
      descripcion:
        'Técnicas de descarga muscular y liberación de tensión adaptadas a cada cuerpo, desde descontracturantes hasta de piedra caliente.',
      duracion: '50–80 min',
      imagen:
        'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      nombre: 'Faciales y cuidado de la piel',
      descripcion:
        'Tratamientos faciales personalizados con diagnóstico de piel, limpieza profunda, hidratación y protocolos antiedad.',
      duracion: '45–60 min',
      imagen:
        'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      nombre: 'Manicura y pedicura',
      descripcion:
        'Cuidado completo de manos y pies con técnicas de hidratación, esmaltado semipermanente y detalles de bienestar.',
      duracion: '40–70 min',
      imagen:
        'https://images.pexels.com/photos/3997384/pexels-photo-3997384.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      nombre: 'Tratamientos corporales',
      descripcion:
        'Exfoliaciones, envolturas y masajes modeladores que reactivan la circulación y cuidan la piel de pies a cabeza.',
      duracion: '60 min',
      imagen:
        'https://images.pexels.com/photos/3998011/pexels-photo-3998011.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      nombre: 'Terapias de bienestar',
      descripcion:
        'Rituales que combinan aromaterapia, sonidos y respiración para un descanso profundo de cuerpo y mente.',
      duracion: '90 min',
      imagen:
        'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      nombre: 'Experiencias para dos',
      descripcion:
        'Sesiones compartidas en sala privada ideales para celebrar, regalar o simplemente pausar juntos.',
      duracion: '120 min',
      imagen:
        'https://images.pexels.com/photos/3993092/pexels-photo-3993092.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
  ],
  testimonios: [
    {
      nombre: 'Laura M.',
      contexto: 'Clienta recurrente',
      texto: 'Llegué buscando un descanso y me fui con una rutina de cuidado que por fin puedo mantener. El acompañamiento es cercano de verdad.',
    },
    {
      nombre: 'Andrés R.',
      contexto: 'Primera visita',
      texto: 'Reservé en menos de un minuto y me atendieron justo a mi hora. El masaje descontracturante resolvió una tensión que arrastraba semanas.',
    },
    {
      nombre: 'Valentina C.',
      contexto: 'Cliente de tratamientos faciales',
      texto: 'Me hicieron un diagnóstico de piel real y noté el cambio en pocas sesiones. Se nota que cada protocolo está pensado, no improvisado.',
    },
  ],
  galeria: [
    'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3998011/pexels-photo-3998011.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3997384/pexels-photo-3997384.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3993092/pexels-photo-3993092.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  datos_contacto_placeholder: {
    telefono: '+57 300 000 0000',
    whatsapp: '+57 300 000 0000',
    direccion: 'Ciudad, Colombia',
    horario: 'Lunes a sábado, 8 a.m. – 7 p.m.',
  },
};
