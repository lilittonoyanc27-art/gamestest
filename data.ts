import { QuizQuestion, NumberQuestion, TenseQuestion, ClockQuestion } from './types';

export const PREPOSITIONS_QUIZ: QuizQuestion[] = [
  { id: 1, sentence: "Voy ___ la escuela.", options: ["a", "en", "de"], correctAnswer: "a", translation: "Գնում եմ դպրոց:" },
  { id: 2, sentence: "Estamos ___ casa.", options: ["en", "a", "por"], correctAnswer: "en", translation: "Մենք տանն ենք:" },
  { id: 3, sentence: "El libro es ___ María.", options: ["de", "con", "a"], correctAnswer: "de", translation: "Գիրքը Մարիայինն է:" },
  { id: 4, sentence: "Camino ___ el parque.", options: ["por", "en", "con"], correctAnswer: "por", translation: "Քայլում եմ այգով:" },
  { id: 5, sentence: "Hablo ___ Juan.", options: ["con", "de", "en"], correctAnswer: "con", translation: "Խոսում եմ Խուանի հետ:" },
  { id: 6, sentence: "Este regalo es ___ ti.", options: ["para", "por", "de"], correctAnswer: "para", translation: "Այս նվերը քեզ համար է:" },
  { id: 7, sentence: "Vengo ___ Armenia.", options: ["de", "desde", "en"], correctAnswer: "de", translation: "Ես Հայաստանից եմ:" },
  { id: 8, sentence: "El gato está ___ la mesa.", options: ["sobre", "en", "bajo"], correctAnswer: "sobre", translation: "Կատուն սեղանի վրա է:" },
  { id: 9, sentence: "Trabajo ___ lunes a viernes.", options: ["de", "a", "desde"], correctAnswer: "de", translation: "Աշխատում եմ երկուշաբթիից ուրբաթ:" },
  { id: 10, sentence: "Pienso ___ mi familia.", options: ["en", "de", "con"], correctAnswer: "en", translation: "Մտածում եմ ընտանիքիս մասին:" }
];

export const TENSE_QUIZ: TenseQuestion[] = [
  { id: 1, sentence: "Ես ուտում եմ", options: ["Como", "He comido", "Comeré"], correctAnswer: "Como" },
  { id: 2, sentence: "Ես կերել եմ", options: ["He comido", "Como", "Comí"], correctAnswer: "He comido" },
  { id: 3, sentence: "Դու խոսում ես", options: ["Hablas", "Has hablado", "Habla"], correctAnswer: "Hablas" },
  { id: 4, sentence: "Դու խոսել ես", options: ["Has hablado", "Hablas", "Habló"], correctAnswer: "Has hablado" },
  { id: 5, sentence: "Մենք ապրում ենք", options: ["Vivimos", "Hemos vivido", "Viven"], correctAnswer: "Vivimos" },
  { id: 6, sentence: "Մենք ապրել ենք", options: ["Hemos vivido", "Vivimos", "Habíamos vivido"], correctAnswer: "Hemos vivido" },
  { id: 7, sentence: "Նա գրում է", options: ["Escribe", "Ha escrito", "Escribió"], correctAnswer: "Escribe" },
  { id: 8, sentence: "Նա գրել է", options: ["Ha escrito", "Escribe", "Escrito"], correctAnswer: "Ha escrito" },
  { id: 9, sentence: "Նրանք անում են", options: ["Hacen", "Han hecho", "Hicieron"], correctAnswer: "Hacen" },
  { id: 10, sentence: "Նրանք արել են", options: ["Han hecho", "Hacen", "He hecho"], correctAnswer: "Han hecho" },
  { id: 11, sentence: "Ես տեսնում եմ", options: ["Veo", "He visto", "Visto"], correctAnswer: "Veo" },
  { id: 12, sentence: "Ես տեսել եմ", options: ["He visto", "Veo", "He vistas"], correctAnswer: "He visto" },
  { id: 13, sentence: "Նրանք վերադառնում են", options: ["Vuelven", "Han vuelto", "Volvieron"], correctAnswer: "Vuelven" },
  { id: 14, sentence: "Նրանք վերադարձել են", options: ["Han vuelto", "Vuelven", "Vuelto"], correctAnswer: "Han vuelto" },
  { id: 15, sentence: "Նա դնում է", options: ["Pone", "Ha puesto", "Puso"], correctAnswer: "Pone" },
  { id: 16, sentence: "Նա դրել է", options: ["Ha puesto", "Pone", "Puesto"], correctAnswer: "Ha puesto" },
  { id: 17, sentence: "Դուք ուտում եք", options: ["Coméis", "Habéis comido", "Comen"], correctAnswer: "Coméis" },
  { id: 18, sentence: "Դուք կերել եք", options: ["Habéis comido", "Coméis", "Comisteis"], correctAnswer: "Habéis comido" },
  { id: 19, sentence: "Ես գնում եմ", options: ["Voy", "He ido", "Vaya"], correctAnswer: "Voy" },
  { id: 20, sentence: "Ես գնացել եմ", options: ["He ido", "Voy", "Iba"], correctAnswer: "He ido" }
];

// Helper to generate 20 questions for numbers 100-2000 with more variety
const generateNumbers = () => {
  const values = [120, 1997, 1990, 2020, 100, 555, 777, 888, 1000, 1500, 1111, 1234, 1985, 2000, 2024, 150, 333, 999, 1010, 1999];
  const names = [
    "ciento veinte", "mil novecientos noventa y siete", "mil novecientos noventa", "dos mil veinte", 
    "cien", "quinientos cincuenta y cinco", "setecientos setenta y siete", "ochocientos ochenta y ocho",
    "mil", "mil quinientos", "mil ciento once", "mil doscientos treinta y cuatro", "mil novecientos ochenta y cinco",
    "dos mil", "dos mil veinticuatro", "ciento cincuenta", "trescientos treinta y tres", "novecientos noventa y nueve",
    "mil diez", "mil novecientos noventa y nueve"
  ];

  const nums: NumberQuestion[] = [];
  for (let i = 0; i < values.length; i++) {
    const correct = names[i];
    const options = [correct];
    while(options.length < 3) {
      const rand = names[Math.floor(Math.random() * names.length)];
      if(!options.includes(rand)) options.push(rand);
    }
    nums.push({
      id: i + 1,
      number: values[i],
      spanish: correct,
      options: options.sort(() => Math.random() - 0.5)
    });
  }
  return nums;
};

export const NUMBERS_QUIZ = generateNumbers();

export const CLOCK_QUIZ: ClockQuestion[] = [
  { id: 1, time: "01:00", options: ["Es la una", "Son las dos", "Es la una y media"], correctAnswer: "Es la una" },
  { id: 2, time: "02:15", options: ["Son las dos y cuarto", "Son las dos y diez", "Son las tres"], correctAnswer: "Son las dos y cuarto" },
  { id: 3, time: "03:30", options: ["Son las tres y media", "Son las tres menos cuarto", "Es la una"], correctAnswer: "Son las tres y media" },
  { id: 4, time: "04:45", options: ["Son las cinco menos cuarto", "Son las cuatro y cuarto", "Son las cinco"], correctAnswer: "Son las cinco menos cuarto" },
  { id: 5, time: "12:00", options: ["Es mediodía", "Es medianoche", "Son las doce"], correctAnswer: "Es mediodía" },
  { id: 6, time: "06:00", options: ["Son las seis", "Son las siete", "Es la una"], correctAnswer: "Son las seis" },
  { id: 7, time: "07:10", options: ["Son las siete y diez", "Son las siete menos diez", "Son las ocho"], correctAnswer: "Son las siete y diez" },
  { id: 8, time: "08:20", options: ["Son las ocho y veinte", "Son las ocho y cuarto", "Son las nueve"], correctAnswer: "Son las eight y veinte" },
  { id: 9, time: "09:40", options: ["Son las diez menos veinte", "Son las nueve y veinte", "Son las diez"], correctAnswer: "Son las diez menos veinte" },
  { id: 10, time: "10:50", options: ["Son las once menos diez", "Son las diez", "Son las once"], correctAnswer: "Son las once menos diez" },
  { id: 11, time: "11:05", options: ["Son las once y cinco", "Son las doce", "Es la una"], correctAnswer: "Son las once y cinco" },
  { id: 12, time: "05:15", options: ["Son las cinco y cuarto", "Son las seis", "Es la una"], correctAnswer: "Son las cinco y cuarto" },
  { id: 13, time: "04:30", options: ["Son las cuatro y media", "Son las cinco", "Son las tres"], correctAnswer: "Son las cuatro y media" },
  { id: 14, time: "01:45", options: ["Son las dos menos cuarto", "Es la una y cuarto", "Son las dos"], correctAnswer: "Son las dos menos cuarto" },
  { id: 15, time: "00:00", options: ["Es medianoche", "Es mediodía", "Son las doce"], correctAnswer: "Es medianoche" }
];
