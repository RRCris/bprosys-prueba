import { ProductoBancario } from "@/@types/products.types";

const productosBancarios: ProductoBancario[] = [
  {
    id: 1,
    nombre: "Cuenta Corriente Básica",
    tipo: "Cuenta",
    categoria: "Cuentas de depósito",
    summary: "Cuenta para operaciones diarias sin costo de mantenimiento",
    descripcion: `La Cuenta Corriente Básica es la solución perfecta para manejar tus finanzas diarias sin complicaciones. 
      Ofrece transferencias ilimitadas, acceso a banca móvil y en línea, chequera gratuita y retiros en más de 5,000 cajeros 
      automáticos a nivel nacional. Sin costos de mantenimiento con un saldo promedio mensual de $500. Ideal para estudiantes, 
      jóvenes profesionales o quienes buscan una cuenta sencilla sin cargos ocultos. Incluye protección contra fraudes y 
      notificaciones instantáneas de transacciones.`,
  },
  {
    id: 2,
    nombre: "Cuenta de Ahorros Plus",
    tipo: "Cuenta",
    tasaInteres: 1.5,
    categoria: "Cuentas de ahorro",
    nivelRiesgo: "Bajo",
    summary: "Cuenta de ahorros con interés anual y acceso ilimitado",
    descripcion: `La Cuenta de Ahorros Plus te ayuda a hacer crecer tu dinero con una tasa de interés competitiva del 1.5% anual. 
      Diseñada para quienes quieren comenzar a ahorrar con flexibilidad, permite hasta 6 retiros mensuales sin penalización. 
      Ofrece banca en línea 24/7, programación de metas de ahorro y la opción de crear subcuentas para organizar tus objetivos 
      financieros. Protección FDIC hasta por $250,000. Sin cargos mensuales con un depósito mínimo inicial de $100. Perfecta 
      para fondos de emergencia o ahorros a corto plazo.`,
  },
  {
    id: 3,
    nombre: "Tarjeta de Crédito Gold",
    tipo: "Tarjeta",
    tasaInteres: 24.5,
    categoria: "Tarjetas de crédito",
    nivelRiesgo: "Medio",
    summary: "Tarjeta con beneficios en viajes y seguros incluidos",
    descripcion: `La Tarjeta de Crédito Gold ofrece un límite de crédito inicial de hasta $15,000 con beneficios premium. 
      Gana 2 puntos por cada dólar gastado en viajes y 1.5 puntos en compras diarias, canjeables por vuelos, hoteles o efectivo. 
      Incluye seguro de viaje, protección de compras extendida y acceso a salas VIP en aeropuertos. Tasa APR variable del 24.5%. 
      Sin cargo anual el primer año ($95 a partir del segundo año). Características de seguridad avanzadas incluyendo alertas 
      instantáneas y bloqueo temporal desde la app. Ideal para viajeros frecuentes que buscan recompensas valiosas.`,
  },
  {
    id: 4,
    nombre: "Préstamo Personal Express",
    tipo: "Préstamo",
    tasaInteres: 12.75,
    categoria: "Préstamos personales",
    summary: "Préstamo rápido con desembolso en 24 horas",
    descripcion: `El Préstamo Personal Express ofrece desde $1,000 hasta $50,000 con desembolso en tan solo 24 horas hábiles. 
      Plazos flexibles de 12 a 60 meses con tasa fija del 12.75% APR. Sin garantías requeridas y uso libre para consolidación de deudas, 
      mejoras del hogar, gastos médicos o cualquier necesidad. Proceso de aprobación 100% online con respuesta en minutos. 
      Pagos mensuales fijos sin cargos por pago anticipado. Requisitos mínimos: puntaje crediticio de 650+, ingresos comprobables 
      de $2,000/mes y antigüedad laboral de 6 meses. La solución rápida para tus proyectos personales.`,
  },
  {
    id: 5,
    nombre: "Fondo de Inversión Moderado",
    tipo: "Inversión",
    tasaInteres: 6.2,
    categoria: "Fondos de inversión",
    nivelRiesgo: "Medio",
    summary: "Fondo balanceado con rendimiento histórico estable",
    descripcion: `Nuestro Fondo de Inversión Moderado ofrece un balance ideal entre crecimiento y seguridad, con un rendimiento 
      histórico promedio del 6.2% anual. Portafolio diversificado en 60% bonos corporativos y gubernamentales, 30% acciones de 
      grandes empresas y 10% instrumentos del mercado monetario. Inversión mínima de $1,000 sin comisiones de gestión por los 
      primeros 12 meses. Liquidez con retiros en 3-5 días hábiles. Ideal para inversionistas con horizonte a 3-5 años que buscan 
      superar la inflación sin asumir riesgos elevados. Incluye asesoría personalizada y reportes trimestrales detallados.`,
  },
  {
    id: 6,
    nombre: "Seguro de Vida Integral",
    tipo: "Seguro",
    categoria: "Seguros de vida",
    summary: "Cobertura amplia para protección familiar",
    descripcion: `El Seguro de Vida Integral proporciona protección financiera para tus seres queridos con cobertura desde 
      $100,000 hasta $2 millones. Póliza a término renovable con primas fijas por 20 años. Cubre muerte por cualquier causa 
      después del primer año, además de beneficios por accidente (doble indemnización) y enfermedad terminal (50% anticipado). 
      Opción de agregar cobertura por invalidez total y permanente sin examen médico para menores de 40 años. Flexibilidad para 
      aumentar cobertura en eventos como matrimonio o nacimiento de hijos. Incluye asistencia funeraria y apoyo psicológico 
      para beneficiarios. La tranquilidad de saber que tu familia estará protegida.`,
  },
  {
    id: 7,
    nombre: "CDT 90 días",
    tipo: "Inversión",
    tasaInteres: 7.8,
    categoria: "Certificados de depósito",
    nivelRiesgo: "Bajo",
    summary: "Certificado a término fijo con alta rentabilidad",
    descripcion: `El Certificado de Depósito a Término (CDT) a 90 días ofrece una tasa fija garantizada del 7.8% anual, 
      una de las más competitivas del mercado. Inversión mínima de $5,000 con interés compuesto que se capitaliza diariamente. 
      Protección FDIC hasta $250,000. Sin riesgo de mercado - conoces exactamente cuánto ganarás al vencimiento. Opción de 
      renovación automática con actualización de tasas. Penalización del 1% solo si retiras antes del vencimiento. Excelente 
      alternativa para el excedente de tus ahorros que no necesites inmediatamente, ofreciendo mayor rendimiento que una cuenta 
      tradicional con similar seguridad.`,
  },
  {
    id: 8,
    nombre: "Tarjeta Débito Universal",
    tipo: "Tarjeta",
    categoria: "Tarjetas de débito",
    summary: "Acceso a tu dinero en cajeros y comercios a nivel mundial",
    descripcion: `La Tarjeta Débito Universal te da acceso inmediato a los fondos de tu cuenta corriente o de ahorros en 
      millones de establecimientos y cajeros automáticos a nivel mundial. Tecnología contactless para pagos rápidos y seguros, 
      chip EMV y tokenización para compras online. Sin cargos por uso en nuestra red de más de 15,000 cajeros. Reembolsos 
      automáticos por cargos no reconocidos y alertas instantáneas de todas las transacciones. Compatible con Apple Pay, Google 
      Pay y Samsung Pay. Límite diario configurable hasta $5,000. La herramienta perfecta para manejar tu dinero diario con 
      total seguridad y conveniencia, sin deudas ni intereses.`,
  },
  {
    id: 9,
    nombre: "Préstamo Hipotecario",
    tipo: "Préstamo",
    tasaInteres: 8.3,
    categoria: "Préstamos hipotecarios",
    summary: "Financiamiento para vivienda a largo plazo",
    descripcion: `Nuestro Préstamo Hipotecario hace realidad el sueño de tu casa propia con tasas competitivas desde 8.3% 
      fijo por 30 años. Financiamiento hasta el 90% del valor de la propiedad con plazos de 15, 20 o 30 años. Sin cargos por 
      prepago después de 5 años. Opciones para primera vivienda, inversión o refinanciamiento. Proceso simplificado con 
      precalificación online en 10 minutos y cierre en tan solo 21 días. Incluye seguro de desempleo opcional que cubre hasta 
      6 meses de pagos. Asesoría gratuita durante toda la vida del crédito. Requisitos: ingresos mínimos de $3,500/mes, 
      puntaje crediticio 680+ y deuda máxima del 43% de ingresos. Tu hogar ideal está más cerca de lo que piensas.`,
  },
  {
    id: 10,
    nombre: "Fondo de Alto Riesgo",
    tipo: "Inversión",
    tasaInteres: 15.2,
    categoria: "Fondos de inversión",
    nivelRiesgo: "Alto",
    summary: "Fondo agresivo con potencial de altos rendimientos",
    descripcion: `El Fondo de Alto Riesgo está diseñado para inversionistas experimentados que buscan maximizar rendimientos 
      a largo plazo (5+ años), con un promedio histórico del 15.2% anual. Portafolio agresivo: 80% acciones de crecimiento 
      (40% EE.UU., 30% mercados emergentes, 30% internacional desarrollado), 15% capital privado y 5% criptoactivos. 
      Inversión mínima de $25,000. Volatilidad esperada del 25-30% anual. Posibilidad de pérdida del capital. Incluye acceso 
      exclusivo a reportes de investigación, reuniones trimestrales con el equipo gestor y herramientas avanzadas de análisis. 
      Recomendado solo para quienes tienen alta tolerancia al riesgo y diversificación en otros activos. Oportunidad para 
      capitalizar tendencias del mercado con gestión profesional activa.`,
  },
];

export default productosBancarios;
