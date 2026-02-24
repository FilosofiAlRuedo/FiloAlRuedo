export type Level = "Principiante" | "Intermedio" | "Avanzado";

export interface DailyRec {
  id: string;
  title: string;
  memeUrl: string;
  concept: string;
  philosopher: string;
  explanation: string;
  application: string;
  level: Level;
}

export const dailyRecommendations: Record<Level, DailyRec> = {
  Principiante: {
    id: "1",
    title: "El Mito de la Caverna... pero en TikTok",
    memeUrl: "https://picsum.photos/seed/caverna/800/600?blur=2",
    concept: "El Mito de la Caverna",
    philosopher: "Platón",
    explanation:
      "Platón decía que vivimos viendo sombras en una pared, creyendo que son la realidad. Hoy, esas sombras son los videos de 15 segundos que scrolleas a las 3 AM.",
    application:
      "Cuestiona si lo que ves en redes es toda la verdad o solo una sombra de la realidad de alguien más. Tómate un descanso de la pantalla hoy.",
    level: "Principiante",
  },
  Intermedio: {
    id: "2",
    title: "El Absurdo de madrugar",
    memeUrl: "https://picsum.photos/seed/sisifo/800/600?blur=2",
    concept: "El Absurdo",
    philosopher: "Albert Camus",
    explanation:
      "Camus imaginó a Sísifo feliz empujando una piedra por la montaña por toda la eternidad. Es como tú levantándote todos los días a las 6 AM para ir a trabajar.",
    application:
      "Encuentra significado en la repetición de tu rutina diaria. La rebeldía está en disfrutar el proceso, no solo la meta final.",
    level: "Intermedio",
  },
  Avanzado: {
    id: "3",
    title: "El Panóptico de tu jefe",
    memeUrl: "https://picsum.photos/seed/foucault/800/600?blur=2",
    concept: "El Panóptico",
    philosopher: "Michel Foucault",
    explanation:
      'Foucault hablaba de una prisión donde los reclusos no saben si los están mirando, así que se portan bien siempre. Básicamente, el software de monitoreo de tu empresa o el "en línea" de WhatsApp.',
    application:
      "Reflexiona sobre cómo modificas tu comportamiento cuando sientes que eres observado, incluso en espacios digitales. ¿Quién eres cuando nadie te ve?",
    level: "Avanzado",
  },
};

export const feedPosts = [
  {
    id: "101",
    memeUrl: "https://picsum.photos/seed/nietzsche/600/600",
    text: '"Dios ha muerto" - Nietzsche. \n"Nietzsche ha muerto" - Dios.',
    concept: "Nihilismo Activo",
    philosopher: "Friedrich Nietzsche",
    likes: 342,
  },
  {
    id: "102",
    memeUrl: "https://picsum.photos/seed/descartes/600/600",
    text: "Yo tratando de saber si estoy despierto o en un sueño muy realista después de una siesta de 3 horas.",
    concept: "Duda Metódica",
    philosopher: "René Descartes",
    likes: 891,
  },
  {
    id: "103",
    memeUrl: "https://picsum.photos/seed/diogenes/600/600",
    text: "Diógenes viendo cómo te endeudas por 5 años para comprar el último iPhone.",
    concept: "Cinismo",
    philosopher: "Diógenes de Sinope",
    likes: 1205,
  },
  {
    id: "104",
    memeUrl: "https://picsum.photos/seed/kant/600/600",
    text: "Cuando mientes para no ir a la fiesta pero recuerdas el Imperativo Categórico.",
    concept: "Imperativo Categórico",
    philosopher: "Immanuel Kant",
    likes: 567,
  },
];

export const libraryTopics = [
  {
    category: "Corrientes",
    items: ["Estoicismo", "Existencialismo", "Cinismo", "Nihilismo"],
  },
  {
    category: "Filósofos Top",
    items: ["Sócrates", "Platón", "Nietzsche", "Camus", "Foucault"],
  },
  {
    category: "Conceptos Clave",
    items: ["Amor Fati", "Duda Metódica", "El Absurdo", "Superhombre"],
  },
];

export const libraryData: Record<
  string,
  { description: string; memeUrl: string; quote: string }
> = {
  Estoicismo: {
    description:
      "El arte de que todo te resbale (pero con elegancia). Se trata de diferenciar entre lo que puedes controlar (tus reacciones) y lo que no (el clima, lo que piensan de ti, el tráfico).",
    memeUrl: "https://picsum.photos/seed/estoico/800/600",
    quote:
      '"No nos afecta lo que nos sucede, sino lo que nos decimos acerca de lo que nos sucede." - Epicteto',
  },
  Existencialismo: {
    description:
      "La vida no tiene un sentido predeterminado, así que te toca inventarte uno. Sí, es mucha presión, pero también significa que eres totalmente libre.",
    memeUrl: "https://picsum.photos/seed/existencialismo/800/600",
    quote: '"El hombre está condenado a ser libre." - Sartre',
  },
  Cinismo: {
    description:
      "Originalmente no significaba ser un amargado, sino vivir de acuerdo a la naturaleza, rechazando la riqueza, el poder y la fama. Diógenes vivía en un barril y le dijo a Alejandro Magno que se quitara porque le tapaba el sol.",
    memeUrl: "https://picsum.photos/seed/cinismo/800/600",
    quote:
      '"Busco a un hombre honesto." - Diógenes (con una lámpara a plena luz del día)',
  },
  Nihilismo: {
    description:
      'La creencia de que nada tiene un significado o valor intrínseco. Suena deprimente, pero el "nihilismo optimista" dice: si nada importa, ¡puedes disfrutar la vida sin presión!',
    memeUrl: "https://picsum.photos/seed/nihilismo/800/600",
    quote:
      '"Si miras fijamente al abismo, el abismo también mira dentro de ti." - Nietzsche',
  },
  Sócrates: {
    description:
      "El abuelo de la filosofía occidental. No escribió nada, todo lo sabemos por su alumno Platón. Su pasatiempo era hacer preguntas incómodas a la gente en la calle hasta que se daban cuenta de que no sabían nada.",
    memeUrl: "https://picsum.photos/seed/socrates/800/600",
    quote: '"Solo sé que no sé nada."',
  },
  Platón: {
    description:
      "Alumno de Sócrates. Creía que este mundo es solo una copia barata (el mundo sensible) de un mundo perfecto (el mundo de las ideas).",
    memeUrl: "https://picsum.photos/seed/platon/800/600",
    quote: '"La ignorancia es la raíz y el tallo de todos los males."',
  },
  Nietzsche: {
    description:
      'El del bigote épico. Famoso por decir que "Dios ha muerto" (se refería a que la sociedad moderna ya no necesita la religión como base moral).',
    memeUrl: "https://picsum.photos/seed/nietzsche2/800/600",
    quote:
      '"Aquel que tiene un porqué para vivir se puede enfrentar a todos los cómos."',
  },
  Camus: {
    description:
      "Filósofo, escritor y portero de fútbol. Dijo que la vida es absurda, pero que debemos rebelarnos contra ese absurdo viviendo apasionadamente.",
    memeUrl: "https://picsum.photos/seed/camus/800/600",
    quote:
      '"En medio del invierno, aprendí por fin que había en mí un verano invencible."',
  },
  Foucault: {
    description:
      "Estudió cómo el poder y el conocimiento están conectados. Analizó prisiones, hospitales y escuelas, y cómo las instituciones nos controlan.",
    memeUrl: "https://picsum.photos/seed/foucault2/800/600",
    quote: '"Donde hay poder, hay resistencia."',
  },
  "Amor Fati": {
    description:
      'Amor al destino. No es solo "aceptar" lo que te pasa, sino abrazarlo como si lo hubieras elegido. ¿Te despidieron? Amor Fati. ¿Se te cayó el café? Amor Fati.',
    memeUrl: "https://picsum.photos/seed/amorfati/800/600",
    quote:
      '"Mi fórmula para la grandeza en el ser humano es el amor fati." - Nietzsche',
  },
  "Duda Metódica": {
    description:
      'Dudar de absolutamente todo para ver si queda algo de lo que no se pueda dudar. Descartes dudó de sus sentidos, de la realidad, hasta que llegó a: "Pienso, luego existo".',
    memeUrl: "https://picsum.photos/seed/duda/800/600",
    quote: '"Pienso, luego existo." - Descartes',
  },
  "El Absurdo": {
    description:
      "El conflicto entre nuestra tendencia a buscar un sentido a la vida y la incapacidad del universo para darnos uno. La solución de Camus: aceptar el absurdo y tomarse un café.",
    memeUrl: "https://picsum.photos/seed/absurdo/800/600",
    quote:
      '"No hay más que un problema filosófico verdaderamente serio: el suicidio." - Camus',
  },
  Superhombre: {
    description:
      'El "Übermensch" de Nietzsche. Alguien que crea sus propios valores y da sentido a su vida sin depender de religiones o dogmas. No, no es Superman.',
    memeUrl: "https://picsum.photos/seed/superhombre/800/600",
    quote:
      '"El hombre es una cuerda tendida entre el animal y el superhombre."',
  },
};
