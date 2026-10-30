import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Pega aquí la información de tu archivo .txt
const INFORMACION_SAMBERIS = `
At Samberis A.C. es una organización enfocada en proyectos de impacto social, cursos y voluntariado.
Contactos de atención inmediata por WhatsApp:
- WhatsApp 1: 9991277803
- WhatsApp 2: 9999900036
FUENTE: https://www.atsamberis.org/
========================================

At samberis
Ir al contenido principal
Conoce la historia detrás de At Samberis
Descubre nuestros orígenes, nuestra pasión por la educación y el compromiso que nos impulsa a transformar vidas en el Sur-Sureste y Noreste de México.
Nuestros inicios y evolución
En el año 2000, nació Samberis Corporation, una empresa dedicada a la capacitación y consultoría en diversificación de riesgos y proyectos de inversión, con un enfoque principal en micro, pequeñas y medianas empresas del sureste de México. La Asociación Civil At Samberis, surgió de esta base sólida en 2011, inicialmente para apoyar a poblaciones vulnerables del sureste, como los Chontales en Tabasco y los mayas en la península de Yucatán. Hoy, hemos expandido nuestro alcance para servir a la población urbana del noreste, iniciando en Monterrey, México, llevando nuestra experiencia a un público más amplio y diverso.
Nuestro orgullo: un impacto que trasciende
Lo que más nos enorgullece en At Samberis es nuestra capacidad de entender la interacción de los factores macro y microeconómicos, tanto internos como externos, a nivel nacional e internacional. Como parte de Samberis Corporation, aplicamos este conocimiento para crear sinergias, ventajas competitivas y cadenas de valor robustas. Esta filosofía la trasladamos a la educación de los más jóvenes, sembrando semillas para un futuro mejor. Nuestra visión incluye la formación de individuos conscientes y amigables con el medio ambiente, marcando una diferencia significativa en el mundo educativo.
Conoce a nuestro equipo
Detrás de cada logro de At Samberis, se encuentra un equipo apasionado y dedicado. Nos enorgullece presentar a tres de nuestras personas clave: Samara Guzman Enríquez, Juan Carlos Roldan del Moral y Juan Licona Carrión. Esta terna de profesionistas cuenta con una vasta experiencia, son consultores reconocidos y académicos comprometidos. Su inspiración radica en la transformación educativa y en la creación de oportunidades para todos, impulsando a At Samberis a alcanzar nuevas metas y a seguir impactando positivamente en la comunidad.
"La dedicación de At Samberis a la educación es inspiradora y su enfoque en el impacto social es admirable. Son un verdadero pilar en la comunidad."
Un testimonio de nuestra comunidad
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/proyectos-e-impactos
========================================

Proyectos e Impactos | At samberis
Ir al contenido principal
Proyectos e impactos
En At Samberis impulsamos el desarrollo comunitario y educativo a través de iniciativas estratégicas, colaboración voluntaria y aprendizajes transparentes en cada territorio.
Iniciativas comunitarias y voluntariado
Damos voz a las propuestas de voluntarios y comunidades en etapas de pretotipo y prototipo. Cada proyecto está alineado con los Objetivos de Desarrollo Sostenible (ODS) de la ONU para validar soluciones locales que fomentan el bienestar colectivo.
Conoce las iniciativas
Proyectos en incubación e ideación
Diseñamos programas estratégicos orientados a fortalecer el tejido social y productivo. Con estas iniciativas en fase de estructura, buscamos convocar a mentores, aliados institucionales y fuentes de financiamiento temprano para maximizar su alcance futuro.
Conoce los proyectos
Trayectoria, memorias y aprendizajes
Nuestra experiencia abarca capacitaciones a productores chontales en Tabasco para consolidar su visión estratégica, formación a apicultores mayas en Yucatán para dar valor agregado a su miel en canales formales e impulso a mujeres rurales en Molas y Yaxnic con invernaderos de traspatio. Estas experiencias nos brindan aprendizajes esenciales sobre la importancia del acompañamiento continuo a largo plazo.
Visita nuestro portafolio de evidencias
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/pilares-educativos-y-comunidad
========================================

Pilares Educativos y Comunidad | At samberis
Ir al contenido principal
Transforma tu futuro con At Samberis
Bienvenido a At Samberis, donde la educación se encuentra con la paz interior y exterior. Descubre cómo nuestro enfoque único desarrolla competencias y fomenta la transparencia. Únete a nuestra comunidad y sé parte del cambio.
Regístrate ahora
Nuestros pilares educativos
En At Samberis, nos dedicamos a ofrecer una experiencia educativa que va más allá del aula. Nuestro compromiso es desarrollar tu paz interior y exterior, fortaleciendo competencias de manera cuantificable y cualificable.
Paz interior y exterior
Fomentamos un ambiente de aprendizaje que promueve la tranquilidad personal y la armonía con el entorno, clave para un desarrollo integral.
Competencias medibles
Desarrollamos habilidades prácticas y teóricas con un enfoque cuantitativo y cualitativo, preparando para los desafíos del mundo real.
Transparencia y honestidad
Nuestros valores se centran en la integridad académica y profesional, creando una base sólida para el éxito personal y colectivo.
Explora nuestros cursos
¿Quién puede unirse a At Samberis?
Nuestra comunidad está abierta a todos. Buscamos estudiantes, padres, docentes, personal administrativo, empresas que deseen invertir en sus empleados, y voluntarios comprometidos con el cambio.
Comunidad académica y empresas
Beneficiamos a escuelas públicas y privadas, ofreciendo cursos para estudiantes, padres, docentes y personal administrativo. También colaboramos con empresas como patrocinadores o beneficiarios, con cursos adaptados para sus empleados.
Voluntarios y donativos
Invitamos a voluntarios a sumarse con su tiempo, esfuerzo y especie. Aceptamos donativos para impulsar nuestras campañas y metas, construyendo juntos una sociedad más educada y pacífica. Tu apoyo hace la diferencia.
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/aprende-con-nosotros
========================================

Aprende con nosotros | At samberis
Ir al contenido principal
Aprende, crea y crece con At samberis
En At samberis, encontrarás cursos para desarrollar habilidades, impulsar tus proyectos y llevar tus ideas más lejos. Conoce nuestra propuesta formativa, explora trabajos de nuestra comunidad y agenda una orientación para elegir tu siguiente paso.
Ver nuestros cursos
Formación pensada para tus metas
Elige la experiencia que mejor se adapte a tu nivel, disponibilidad y objetivos. Desde los primeros fundamentos hasta el acompañamiento para proyectos, At samberis te ayuda a aprender con claridad y confianza.
Fundamentos para comenzar
Da tus primeros pasos con cursos diseñados para construir una base sólida. Aprende conceptos esenciales, practica a tu ritmo y descubre el camino de formación ideal para ti.
Habilidades para avanzar
Profundiza en conocimientos aplicables a tus metas académicas, profesionales o creativas. Encuentra contenidos que te ayuden a perfeccionar tu técnica y fortalecer tu portafolio.
Capacitación para equipos
Impulsa el aprendizaje de tu equipo con opciones de formación que pueden adaptarse a las necesidades de tu organización. Contáctanos para agendar una cita de orientación y conocer alternativas.
Proyecto y acompañamiento
Convierte lo aprendido en resultados con orientación para desarrollar tus proyectos. Revisa ejemplos de trabajos, resuelve tus dudas y encuentra la modalidad que mejor responda a tus objetivos.
Tu siguiente aprendizaje comienza hoy
Conoce los cursos de At samberis, elige el que se ajuste a tus objetivos y da el siguiente paso. También puedes contactarnos para agendar una cita de orientación en Monterrey.
Explorar cursos
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/blog-y-redes-sociales
========================================

Blog y redes sociales | At samberis
Ir al contenido principal
Nuestro blog y redes sociales
Descubre un espacio lleno de conocimiento, inspiración y bienestar. En At Samberis, compartimos contenido valioso para nutrir tu mente, cuerpo y espíritu. Únete a nuestra comunidad y explora temas que te ayudarán a crecer personal y profesionalmente.
Youtube
At Samberis University
@AtSamberis
Spotify
At Samberis
Capacitación Bromelias _2015
2015 Capacitación Bromelias en Molas y MayaFlora con Derose
2015 Ponente en Colores Aromas y Sabores del Campo de Yucatán
2015 Ponente en Colores Aromas y Sabores del Campo de Yucatán
2016 Fortalecimiento Invernadero
2016 Fortalecimiento Invernadero
2016 Moderadora Evento Importadores Univ Marista
2016 Moderadora Evento Importadores Univ Marista
2016 Proyecto miel Yokdzonot Hu
2016 Proyecto miel Yokdzonot Hu
2017 Fortalecimiento en practicas de campo
2017 Fortalecimiento en practicas de campo
2017 Participación en Expocampo
2017 Participación en Expocampo
2017 Proyectos productivos Yokdzonot hu
2017 Proyectos productivos Yokdzonot hu
2018 Fortalecimiento de la OSC Vision Compartida
2018 Fortalecimiento de la OSC Vision Compartida
2020 Yokdzonot-Hu Apoyo por Covid y Cristobal
2020 Yokdzonot-Hu Apoyo por Covid y Cristobal
2022 Observación de enseñanza CSE en escuela normal y preescolar
2022 Observación de enseñanza CSE en escuela normal y preescolar
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/testimonios
========================================

Testimonios | At samberis
Ir al contenido principal
Historias que inspiran: Nuestras voces
En At Samberis, creemos firmemente en el poder de la experiencia compartida. Cada testimonio aquí es un reflejo del impacto real que generamos juntos. Queremos que te sientas inspirado por las voces de nuestros voluntarios y beneficiarios, y que descubras cómo At Samberis puede transformar vidas y comunidades. Estas historias son el corazón de lo que hacemos, demostrando el compromiso, la dedicación y los resultados que alcanzamos.
"Ser voluntario en At Samberis me abrió los ojos a la importancia de la conciencia social. La experiencia fue tan enriquecedora que incluso generé material motivacional para redes, algo que nunca imaginé hacer. ¡Es un multiplicador de bienestar!"
[[Nombre del Voluntario 1]]
"Gracias a At Samberis, en nuestra prepa pudimos conversar abiertamente sobre el termómetro de la violencia. Aprendimos a identificar y etiquetar situaciones de riesgo, y lo más importante, a pedir ayuda. Fue un cambio enorme para todos."
[[Nombre del Estudiante de Preparatoria]]
"Las mejoras visibles en nuestras comunidades mayas y chontales son innegables. Los programas de At Samberis realmente entienden nuestras necesidades y nos dan las herramientas para crecer. ¡Estamos muy agradecidos!"
[[Nombre del Beneficiario Comunitario]]
Tu voz cuenta: Comparte tu experiencia con At Samberis
Queremos escuchar tu historia. ¿Cómo At Samberis ha impactado tu vida, tu desarrollo o tu comunidad? Ya sea como voluntario o beneficiario, tu testimonio es valioso y ayuda a otros a conocer el alcance de nuestro trabajo. Nos encantaría recibir tus comentarios en el formato que mejor te represente: desde unas líneas escritas, un video corto, o un mensaje de audio.
Envía tu testimonio
"La comunicación que lograron en una prepa mixta pública fue fundamental para que se conversara sobre el termómetro de la violencia."
Testimonio de un participante
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/preguntas-frecuentes
========================================

Preguntas Frecuentes | At samberis
Ir al contenido principal
Información esencial
En At Samberis, nos comprometemos a ofrecer capacitación de la más alta calidad y un servicio excepcional. Explora nuestras preguntas frecuentes para conocer más sobre nuestros cursos, servicios y cómo podemos ayudarte a alcanzar tus metas. Queremos que te sientas seguro y bien informado al elegirnos.
Preguntas frecuentes
Aquí respondemos a las preguntas más comunes que recibimos sobre nuestros programas de capacitación, servicios y productos de nutrición. Nuestro objetivo es aclarar cualquier duda que puedas tener y proporcionarte toda la información necesaria para que tomes la mejor decisión.
¿Cómo beneficia At Samberis a nuestra comunidad educativa?
En At Samberis, ofrecemos capacitaciones presenciales y virtuales que complementan el desarrollo de alumnos, docentes, administrativos y padres de familia. Nuestras colaboraciones buscan enriquecer su experiencia educativa sin afectar negativamente a la comunidad, sino aportando valor y nuevas perspectivas.
¿Son realmente gratuitos los webinars y masterclass que ofrecen?
Sí, nuestros webinars y masterclass introductorios son completamente gratuitos. Están diseñados para generar curiosidad intelectual y mostrar el valor de nuestra capacitación, permitiendo a los participantes aprender y aprovechar el contenido sin costo. Posteriormente, pueden optar por cursos adicionales con un costo si desean profundizar.
¿Cómo funcionan los productos de nutrición o suplementos alimenticios?
Ofrecemos tips gratuitos sobre nutrición y suplementos. Además, buscamos patrocinadores para programas como "adopta un niño" para proporcionar alimentos o suplementos. También incentivamos a los padres de familia a notar los cambios positivos en ellos y sus hijos, animándolos a convertirse en distribuidores para adquirir los productos, generando así una fuente de ingresos para sus familias y para nosotros.
¿At Samberis tiene un costo para las escuelas?
El costo de nuestros programas para escuelas depende del tipo de capacitación y el alcance del proyecto. Estamos comprometidos a encontrar soluciones que se adapten a las necesidades y presupuestos de cada institución, ofreciendo tanto opciones gratuitas como planes personalizados.
¿Cuál es la ventaja de elegir At Samberis?
Nuestra principal ventaja es nuestra experiencia de más de 25 años en capacitación para adultos. Nos especializamos en talleres, cursos, certificados, licenciaturas y posgrados en áreas clave como administración, comercio internacional, finanzas, recursos humanos, negocios digitales y liderazgo. Esta trayectoria nos permite ofrecer programas de alta calidad y relevancia.
¿Qué áreas específicas cubren sus capacitaciones?
Hemos trabajado en diversos sectores como turismo (restaurantes, hotelería, ecoturismo), agropecuario (ganadería, horticultura, silvicultura, acuacultura, piscicultura), industrial (brazos robóticos, agronegocios), servicios (hotelería) y comercio nacional e internacional, incluyendo grandes cadenas como Soriana, Walmart, Costco y Sams.
¿Qué me diferenciará si me inscribo en At Samberis?
La experiencia y conocimiento que adquirirás con nosotros te proporcionarán una ventaja competitiva significativa. Nuestra capacitación, basada en años de experiencia y adaptada a las necesidades del mercado, te preparará para afrontar los desafíos y sobresalir en tu campo profesional, ya sea en áreas administrativas, financieras o de liderazgo.
¿Cómo puedo empezar mi capacitación o colaboración?
Puedes contactarnos a través de nuestro email: samberisuniversity@gmail.com o enviando un mensaje escrito al WhatsApp 9991277803. Estamos listos para resolver tus dudas, ofrecerte más detalles sobre nuestros programas y ayudarte a iniciar tu camino hacia el éxito profesional. ¡Esperamos poder colaborar contigo pronto!
Tu éxito es nuestro objetivo
En At Samberis, estamos comprometidos con tu crecimiento y desarrollo profesional. Con más de 25 años de experiencia, ofrecemos programas de capacitación de excelencia que te ayudarán a alcanzar tus metas. Conócenos y descubre cómo podemos impulsarte.
Explora nuestros cursos
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/proyectos-en-incubacion
========================================

Proyectos en Incubación | At samberis
Ir al contenido principal
Compromisos
En 2011 nuestra misión fue facilitar la paz interior y exterior, así comenzó nuestro viaje. Posteriormente nos inspiramos en los 17 objetivos de desarrollo sostenible que la ONU propuso en la Agenda 2030. Estamos comprometidos con cada uno de ellos. Únete a nosotros mientras crecemos y triunfamos juntos. Nos alegra que estés aquí para ser parte de nuestra historia.
A. Fortalecimiento institucional
El Origen: Escuchando a la Comunidad
(Diciembre 2025)
Durante el cierre de 2025, un grupo de voluntarios identificó la oportunidad de renovar nuestra presencia digital para ampliar el alcance de nuestra causa. A través de sesiones colaborativas, surgieron las primeras propuestas e ideas para modernizar la forma en que nos conectamos con el mundo.
Co-diseño y Prototipado
(2026)
En 2026,
nuevos equipos de voluntarios llevaron esas ideas a la práctica.
Mediante la metodología de pretotipos y prototipos,
se evaluaron distintas alternativas visuales y de interacción.
De este proceso colaborativo nació nuestra
nueva identidad gráfica
(actualización de logotipo,
paleta de colores y línea tipográfica),
así como el diseño conceptual de nuestra plataforma web.
Fase 1: Nuestra Nueva Plataforma Web
(En Ejecución - Presente)
En octubre 2026, marcamos un hito con el lanzamiento de este sitio web,
diseñado bajo los principios de accesibilidad,
transparencia y colaboración que caracterizan a nuestra asociación.
Este espacio es el centro neurálgico de nuestras iniciativas,
convocatorias y proyectos.
Próximos Pasos en Incubación
(Cierre 2026 y 2027)
Nuestra transformación digital continúa.
Actualmente estamos trabajando en la integración de nuevas herramientas desarrolladas por y para la comunidad:
Tienda Virtual Solidaria:
Un espacio de sostenibilidad financiera para apoyar nuestros programas sociales.
Asistente Virtual (Chatbot):
Para orientar de forma rápida a nuevos voluntarios,
aliados y beneficiarios.
Estrategia de Redes Sociales Renovada:
Para difundir el impacto de nuestras acciones en tiempo real.
Este sitio web y nuestra nueva imagen son prueba de que cada propuesta cuenta. Gracias a cada voluntario y voluntaria que dedicó su talento en 2025 y 2026 para hacer este proyecto realidad.
Conoce las propuestas para el fortalecimiento institucional
B. Causas y Programas para la Comunidad
Proyecto B1: Desarrollo y Fortalecimiento de Competencias Socioemocionales (CSE)
Sembrando paz interior y exterior para transformar comunidades.
¿De qué se trata el proyecto?
En nuestra asociación creemos que la verdadera transformación social comienza desde adentro. Este programa está diseñado para acompañar a niños, jóvenes y comunidades en el cultivo de la
paz interior y exterior
, dotándoles de herramientas prácticas basadas en la educación socioemocional para gestionar sus emociones, tomar decisiones responsables y construir una convivencia armónica
.
Inspirados en los pilares del desarrollo integral y modelos pedagógicos (SEP, 2018; Bisquerra, 2006), nuestro enfoque trabaja de manera integral cinco dimensiones fundamentales
:
Autoconocimiento
:
Aprender a reconocer y comprender las propias emociones, fortalezas y áreas de oportunidad (Aprender a ser
).
Autorregulación
:
Desarrollar la capacidad de gestionar los estados emocionales de forma constructiva ante los retos diarios.
Autonomía
:
Fomentar la iniciativa personal, la confianza y la toma de decisiones con sentido ético.
Empatía
:
Conectar profundamente con las necesidades y vivencias de los demás, clave para la paz social (Aprender a convivir
).
Colaboración
:
Construir redes de apoyo comunitarias y trabajar
en equipo para resolver problemas comunes (Aprender a hacer
).
¿Cuál es nuestro objetivo?
A nivel individual (Paz Interior):
Fortalecer la resiliencia,
la autoestima y el bienestar emocional de cada participante.
A nivel comunitario (Paz Exterior):
Disminuir la conflictividad social,
fomentar entornos seguros y pacíficos,
y consolidar comunidades solidarias y participativas.
¿Cómo puedes sumarte o apoyar esta causa?
🤝
Súmate como Voluntario Facilitador:
Si tienes experiencia en pedagogía,
psicología,
coaching o bienestar,
aporta tu talento para impartir talleres en campo.
💡
Propón una Comunidad:
¿Conoces un espacio,
escuela o centro comunitario que necesite este programa?
Envíanos tu propuesta.
💛
Dona a la Causa:
Ayúdanos a llevar materiales didácticos y talleres vivenciales a más comunidades que lo necesitan.
Proyecto B2: Honestidad, Ética y Transparencia Académica en la era del Posplagio con la Inteligencia Artificial
Gobernanza, pensamiento crítico y uso responsable de la tecnología en el aprendizaje
¿De qué se trata el proyecto?
Vivimos una transformación sin precedentes impulsada por la Inteligencia Artificial Generativa.
Si bien ofrece enormes ventajas pedagógicas,
también plantea retos críticos como el "posplagio",
la automatización acrítica del pensamiento y los sesgos algorítmicos.
Este proyecto busca guiar a estudiantes, docentes y profesionales para navegar esta nueva era sin perder la agencia cognitiva ni la integridad. Basado en marcos de gobernanza institucional y pedagógica (Guzmán-Enríquez et al., 2026), abordamos tres interrogantes clave:
¿Qué mueve al posplagio?
Analizamos los factores de presión, eficiencia mal dirigida y automatización de ideas que llevan a la pérdida de la autoría original.
¿Cómo prevenirlo en el aula y como egresado?
Desarrollamos mediaciones pedagógicas y éticas que fomentan el desarrollo cognitivo superior, evitando la parálisis del pensamiento crítico
.
¿Cómo generar una cultura de transparencia sostenible?
Construimos anillos de gobernanza (desde lo macro regulatorio hasta el micro entorno del aula) para asegurar que la tecnología potencie el aprendizaje en lugar de erosionar la honestidad
¿Cuál es nuestro objetivo?
Lograr un resultado positivo condicionado por una gobernanza robusta
: un ecosistema donde la IA se utilice para potenciar la autonomía, la comprensión conceptual profunda y la eficiencia transparente, previniendo escenarios de riesgo como la atrofia crítica y el plagio automatizad
o
.
Proyecto B3: Red de Vida: Prevención y Atención de la Ideación Suicida
Cuidando la salud mental, tejiendo redes de apoyo y salvando vidas desde la comunidad.
¿De qué se trata el proyecto?
Este proyecto surge como una extensión vital de nuestro programa de Competencias Socioemocionales (CSE).
La paz interior no es solo una meta de desarrollo personal,
sino una cuestión de supervivencia y salud pública.
La ideación suicida en jóvenes y comunidades vulnerables requiere una respuesta humana,
cercana,
informada y libre de estigmas.
A través de esta iniciativa,
buscamos:
Sensibilización y Prevención Temprana:
Capacitar a líderes comunitarios,
docentes y voluntarios para identificar señales de alerta en el entorno cotidiano.
Primeros Auxilios Emocionales:
Proveer herramientas prácticas de contención y escucha activa basadas en la empatía y la autorregulación emocional.
Canalización y Redes de Apoyo:
Construir un puente seguro entre las personas que atraviesan una crisis y los servicios de atención profesional especializados.
¿Cuál es nuestro objetivo?
Transformar el dolor silencioso en una comunidad de acogida. Queremos que ningún miembro de las comunidades que atendemos se sienta solo frente a la desesperanza, ofreciendo contención, escucha y alternativas reales de vida.
Proyecto B4: Bienestar y Desarrollo Integral para la Población Maya
Preservando la identidad, dignificando el presente y construyendo futuro desde el sureste.
¿De qué se trata el proyecto?
Este programa de impacto social está dedicado a generar oportunidades de desarrollo sostenible, rescate cultural y bienestar integral para las comunidades mayas. Reconocemos que el verdadero progreso se construye de la mano con las tradiciones, el tejido comunitario y la voz activa de sus habitantes (Carrión, 2027; López, Reyes y Pinkus, 2018)
.
A través de acciones colaborativas,
impulsamos iniciativas enfocadas en:
Fortalecimiento económico y productivo:
Impulso a proyectos locales y cadenas de valor sustentables.
Educación y capacitación comunitaria:
Creación de espacios de aprendizaje que respetan la cosmovisión y potencian el liderazgo local.
Salud integral y cohesión social:
Promoción de entornos comunitarios seguros,
participativos y con mejor calidad de vida.
¿Cuál es nuestro objetivo?
Generar un impacto medible y respetuoso de la cultura maya, cerrando brechas de desigualdad y fomentando el bienestar colectivo a largo plazo mediante la vinculación directa con la comunidad.
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/propuestas-de-voluntariado
========================================

Propuestas de Voluntariado | At samberis
Ir al contenido principal
A. Propuestas para el fortalecimiento institucional
Las propuestas de parte de los voluntarios, para el fortalecimiento institucional se ha visto enriquecido con las siguientes categorías:
Presencia digital y la accesibilidad en la web: permite que la oferta formativa y los cursos de desarrollo humano sean accesibles sin barreras, democratizando el acceso a la información y apoyando el crecimiento económico digital. Estas impactan en cinco ODS: 4 (Educación), 8 (Trabajo), 9 (Innovación), 10 (Desigualdad) y 17 (Alianzas)
Identidad institucional y rebranding: facilita la construcción de una imagen sólida y profesional que refleja la misión de la A.C., fortaleciendo la confianza institucional ante donantes, aliándose con la academia y el sector privado. Estas propuestas impactan en tres ODS: 4 (educación), 16 (Paz e instituciones) y 17 (Alianzas)
Estrategia de Contenidos, Difusión y Comunidad: permite que se difunda contenidos y testimonios sobre salud emocional, mindfulness, liderazgo consciente y cultura de paz, creando comunidad mediante redes sociales y formatos dinámicos (video/podcast). Estas impactan en siete ODS: 4 (Educación), 3 (Salud), 8 (Trabajo), 9 (Innovación), 10 (Desigualdad), 16 (Paz e instituciones)  y 17 (Alianzas)
Gestión de Datos, Métricas de Impacto y Automatización: facilita la generación de datos oportunos, confiables y medibles en tiempo real para evaluar el impacto social (Meta 17.18) y automatiza la atención 24/7 a usuarios con herramientas tecnológicas. Estas propuestas impactan en cuatro ODS: 4 (educación), 9 (Innovación), 16 (Paz e instituciones) y 17 (Alianzas)
1. ID de las Propuestas para la Presencia Digital y Accesibilidad Web
Nombre de las Propuestas  Incluidas
Voluntarios de  1er. Semestre de Licenciatura
Formato del  concepto
Líder  Académica del Proyecto de Voluntariado
Status de la  Propuesta
2026.F3.NM.DIG.WEB01-3
•  At Samberis al Alcance de Todos
Julia  Pérez, Ximena Mejía, Verónica Cisneros, Rene Aguirre,  Alejandro Ramos, Emilio Ramirez.
F3.  Pretotipo: Fotos e ilustraciones
Mtra. Nahomí Martínez
3.  Integrada con otra Propuesta (Sinergia)
2026.F9.NM.DIG.WEB02-3
• Conectando  Impacto (L. Saro)
Leslie Salazar,  Romina Manguy, Luis Saro, Álvaro Báez, Adolfo Trujillo, Adrián Ancer
F9: Prototipo  Operacional
Mtra.  Nahomí Martínez
3. Integrada con  otra Propuesta (Sinergia)
2026.F9.NM.DIG.WEB03-3
• Renovación y  visibilidad digital
Alejandro  Manrique, Jose Luis Gallegos, Daniel   Zúñiga, David Greene.
F3. Pretotipo:  Fotos e ilustraciones
Mtra.  Nahomí Martínez
3. Integrada con  otra Propuesta (Sinergia)
2. ID de las Propuestas para la Presencia Digital y Accesibilidad Web
Nombre de las Propuestas  Incluidas
Voluntarios de  1er. Semestre de Licenciatura
Formato del  concepto
Líder  Académica del Proyecto de Voluntariado
Status de la  Propuesta
2026.F3.NM.IDN.REB01a-2
• Rebranding  Digital Integral: Manual identidad Logo
Ana López, Luis  Mogas, Roberto Treviño, Dario Garza, Esteban Pazmiño, Renata García
F3. Pretotipo:  Fotos e ilustraciones
Mtra. Nahomí  Martínez
2. En  Desarrollo
2026.F3.NM.IDN.REB01b-5
•  Rebranding Digital Integral: Plantilla para publicaciones en redes sociales
Ana López, Luis  Mogas, Roberto Treviño, Dario Garza, Esteban Pazmiño, Renata García
F3. Pretotipo:  Fotos e ilustraciones
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
3. ID de las Propuestas de Estrategia de Contenidos, Difusión y Comunidad
Nombre de las Propuestas  Incluidas
Voluntarios de  1er. Semestre de Licenciatura
Formato del  concepto
Líder  Académica del Proyecto de Voluntariado
Status de la  Propuesta
2026.F1.NM.COM.REB01c-5
• Embajadores  digitales
Ana López, Luis  Mogas, Roberto Treviño, Dario Garza, Esteban Pazmiño, Renata García
F1: Descripción Verbal
Mtra. Nahomí Martínez
5. Factible /  Banco de Ideas
2026.F9.NM.COM.INSTAG01-5
•  Mejora de Redes Sociales
Fernanda  González, María Luisa Navarro, Suri Segura, Marcos Ortega, Diana Elizondo,  Pablo Valladares
F9: Prototipo  Operacional
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
2026.F3.NM.COM.POD&BLOG-5
• At Samberis  Online: Podcast y Blogs: Voces que construyen paz
F3. Pretotipo:  Fotos e ilustraciones
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
4. ID de las Propuestas para Gestión de Datos, Métricas de Impacto y Automatización
Nombre de las Propuestas  Incluidas
Voluntarios de  1er. Semestre de Licenciatura
Formato del  concepto
Líder  Académica del Proyecto de Voluntariado
Status de la  Propuesta
2026.F3.NM.DAT.DASHB01-5
• Base de Datos  y Dashboard ODS (S. Milmo)
Lucila Velarde,  Daniela Fernández, Victoria González, Sabina Milmo, Blanca Martínez, Linette  Ferraris
F3. Pretotipo:  Fotos e ilustraciones
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
2026.F9.NM.DAT.BOT&BLOG-5
• Acompañabot y  Blog
Leopoldo  Vázquez, Derek Silva, Adrián González, Rodolfo Guerrero, Rubén Ramírez,  Francisco Ceja
F9: Prototipo  Operacional
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
2026.F3.NM.DAT.BOT-5
• Chatbot con  IA y Buscador (L. C. Vázquez)
Raquel Boone,  Catalina Sandoval, Galia Roffe, Valeria Esponda, Camila Moreno, Luis  Vázquez.
F3. Pretotipo:  Fotos e ilustraciones
Mtra. Nahomí  Martínez
5. Factible /  Banco de Ideas
B. Propuestas para la Comunidad
Esta sección todavía se encuentra en construcción, a manera de ejemplo, se listan algunas propuestas
Categoría  de Necesidad / Problema al exterior de la Asociación
Nombre de las Propuestas  Incluidas (Voluntarios que las idearon)
5. Prevención de Adicciones y Bienestar  Comunitario Intercultural
•  Campaña Cuidemos la vida, cuidemos la comunidad (R. Maldonado, A. Becerra, C. Rodríguez, D. Ortega, J. P.  Leal, L. R. López, R. F. Araki)
• Conecta en Maya: Comunicación Visual (M. Vela, A. Ávila, M. García, M. Valdés, I. Ruiz, E. Soules)
6. Salud Mental Infantil y Regulación  Socioemocional
•  Regulación Socioemocional en Escuelas: Kit y Diarios (P. Caballero, R. López, I. Gutiérrez, A. Ramírez, M. López,  I. Fraustro, I. Cantú)
• Señales de Alerta e Infografías Bilingües  en Maya (S. Russell / N. Enciso)
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/portafolio-de-evidencias
========================================

Portafolio de Evidencias | At samberis
Ir al contenido principal
Nuestros logros en acción
Explora una colección de nuestros proyectos más significativos. Aquí, cada imagen cuenta una historia de impacto, dedicación y el compromiso inquebrantable de At Samberis con las comunidades que servimos.
Impacto en comunidades rurales
Descubre el alcance de nuestra labor en el sureste de México. Presentamos imágenes de entregas de kits de alimentos y útiles, así como el primer evento con patrocinio del gobierno de Yucatán, beneficiando directamente a la población maya. Nos enorgullece ser una de las pocas AC que ha logrado un impacto tan profundo en estas regiones.
Empoderamiento y desarrollo sostenible
Testigo de nuestros proyectos de empoderamiento femenino, como la implementación de invernaderos que ofrecen nuevas oportunidades de desarrollo económico y autosuficiencia. Estas iniciativas son un pilar de nuestro compromiso con los Objetivos de Desarrollo Sostenible (ODS).
Campañas con impacto joven
Explora nuestras campañas innovadoras, donde estudiantes universitarios de Monterrey colaboran activamente en proyectos vitales. Desde prevención del suicidio y educación socioemocional hasta iniciativas pro paz y anti-violencia/bullying, cada esfuerzo refleja la energía y el compromiso de las nuevas generaciones.
Únete a nuestra misión
Después de ver nuestro trabajo, esperamos que sientas la confianza de sumarte a At Samberis. Ya sea como voluntario, asociado, patrocinador o usuario, tu apoyo es fundamental para seguir construyendo una sociedad más justa y sostenible. Juntos, podemos lograr aún más.
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/nuestros-cursos
========================================

Nuestros Cursos | At samberis
Ir al contenido principal
Nuestros cursos en At Samberis
Descubre las oportunidades de crecimiento y desarrollo que tenemos para ti. En At Samberis, nos dedicamos a ofrecer educación de calidad para todas las edades y necesidades. Conoce nuestra oferta y únete a nuestra comunidad.
Conoce más
¿Para quién son nuestros cursos?
Nuestros cursos están diseñados para una amplia gama de personas, desde preescolares hasta universitarios, docentes, directivos y padres de familia. Nos enfocamos en los Objetivos de Desarrollo Sostenible (ODS), la paz, la salud, el empoderamiento femenino y la empatía hacia la neurodivergencia. No importa tu nivel de experiencia, tenemos algo para ti.
Educación para todas las edades
Desde preescolar hasta la universidad, ofrecemos programas adaptados a cada etapa educativa, fomentando el desarrollo integral de los estudiantes.
Desarrollo para profesionales y padres
Cursos de educación continua para docentes, directivos y herramientas para padres de familia que buscan fortalecer sus habilidades.
Empoderamiento y empatía
Fomentamos el empoderamiento femenino, la igualdad de género y la inclusión, promoviendo la empatía hacia la neurodivergencia y diversas competencias.
Preguntas frecuentes
Lo que nos hace únicos
Nuestra metodología y compromiso social nos distinguen. No solo enseñamos, sino que también transformamos vidas a través de proyectos productivos y apoyo comunitario. Conoce nuestras iniciativas y el impacto que generamos.
Impacto en el sector rural
En el sureste de México, nos hemos enfocado en apoyar a productores de piña, miel y mujeres emprendedoras en áreas como meliponas, derivados de miel, costura e hidroponía. Ofrecemos acompañamiento en capacitación, creación e implementación de proyectos productivos, generando un cambio tangible en sus vidas.
Innovación y alcance digital
En el noreste, estamos lanzando minicursos en línea, tiktoks, blogs y minicredenciales gratuitas para población urbana vulnerable. Creemos en la accesibilidad a la educación y en el uso de herramientas digitales para llegar a más personas y ofrecer contenido valioso.
Solidaridad en acción
Cuando un huracán devastó colmenas y casas en una localidad maya, nos aliamos con otras asociaciones y personas para donar ropa, alimentos no perecederos, pañales, lácteos para bebés, medicamentos y útiles escolares. Organizamos eventos de promoción con aliados para ofrecer diversos servicios a la comunidad, demostrando nuestro compromiso social más allá de la educación.
Transformación que perdura
Nuestros cursos buscan desarrollar y fortalecer habilidades socioemocionales, fomentar la transparencia, el emprendimiento y la legalidad. Queremos formar ciudadanos globales mejor preparados para generar ingresos, identificar y prevenir la violencia, y contribuir a una sociedad más justa.
¿Cómo inscribirse?
Actualmente, en el sureste, nuestros programas se han realizado de manera gratuita. Diseñamos las ofertas y las aplicamos a los grupos de interés. Próximamente, en el noreste, lanzaremos blogs y material gratuito en redes sociales, así como campañas con instituciones educativas públicas y privadas. A partir de 2027, ofreceremos cursos más profundos con costo. Mantente atento a nuestras redes para conocer las novedades.
Contáctanos para más información
Crea tu propia página web con
Webador

========================================
FUENTE: https://www.atsamberis.org/podcasts
========================================

Podcasts | At samberis
Ir al contenido principal
Aprende escuchando
Explora nuestras series de podcasts en Spotify diseñadas para estudiantes y jóvenes profesionistas. Profundiza en temas especializados, adquiere herramientas clave y da el siguiente paso integrándote a nuestros cursos presenciales y en línea desde Monterrey.
A. Educación financiera
La educación financiera es el proceso de aprender a manejar el dinero de forma informada y responsable. Te da los conocimientos y las habilidades para tomar buenas decisiones sobre cómo ganar, gastar, ahorrar, invertir y endeudarte.
A1. Punto equilibrio presupuesto TIR
Tres herramientas clave: el presupuesto proyecta ingresos y gastos, el punto de equilibrio indica las ventas en las que no se gana ni se pierde, y la TIR mide el rendimiento de la inversión para saber si conviene. Responden: cuánto necesito, cuánto debo vender y si vale la pena invertir.
A2. Proyectos de inversión
La importancia de la educación financiera, el ahorro y los proyectos de inversión. Explicaría cómo administrar el dinero, evaluar riesgos y tomar decisiones responsables para alcanzar metas económicas y tener un futuro financiero más estable.
A3. Ingeniería financiera
La ingeniería financiera es el diseño de soluciones y productos financieros, como créditos, inversiones o instrumentos para reducir riesgos, usando matemáticas y herramientas de análisis. Su objetivo es resolver necesidades de financiamiento y obtener el mejor rendimiento con el menor riesgo posible.
A4.Planeación financiera
La planeación financiera es definir tus metas económicas y armar un plan para lograrlas, calculando cuánto dinero necesitas, de dónde saldrá y cómo lo vas a usar. Así, las decisiones se toman con una guía clara y no sobre la marcha.
Recursos
Podcasts:
At Samberis
Crea tu propia página web con
Webador
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Eres el asistente virtual oficial de "At Samberis A.C.". 
Tu misión es resolver dudas sobre la asociación de forma breve y clara (máximo 2 párrafos).

INFORMACIÓN OFICIAL:
${INFORMACION_SAMBERIS}

REGLA DE ORO:
Responde ÚNICAMENTE usando la información oficial. Si la pregunta no se puede responder con este texto, di estrictamente:
"Por el momento no cuento con el registro de esa información. Por favor ponte en contacto directo por WhatsApp:
- 📲 WhatsApp 1: 9991277803
- 📲 WhatsApp 2: 9999900036"`,
      },
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}