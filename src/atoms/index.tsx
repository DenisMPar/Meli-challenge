import { atom, selector } from "recoil";

export const searchQueryAtom = atom({
  key: "searchQueryAtom",
  default: "",
});
export const itemIdAtom = atom({
  key: "itemIdAtom",
  default: "",
});

export const searchResultsState = atom({
  key: "searchResultsState",
  default: [
    {
      id: "MLA1234567890",
      title: "Apple iPhone 15 128GB - Negro",
      price: 1299999,
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_784557-MLA95493924244_102025-O.webp",
    },
    {
      id: "MLA9876543210",
      title: "Samsung Galaxy S24 Ultra 256GB",
      price: 1899999,
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_928817-MLA99445918686_112025-O.webp",
    },
    {
      id: "MLA1122334455",
      title: "Motorola Edge 40 Neo 256GB",
      price: 549999,
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_950923-MLA100042427767_122025-O.webp",
    },
  ],
});
const mockQuestions = {
  MLA1234567890: [
    { id: 1, text: "¿Viene con cargador incluido?", answer: { text: "Hola, no incluye cargador, solo el cable USB-C. Saludos." } },
    { id: 2, text: "¿Es libre para todas las compañías?", answer: { text: "Sí, es libre para cualquier operador. Gracias por preguntar." } },
    { id: 3, text: "¿Tiene garantía oficial?", answer: { text: "Sí, cuenta con 12 meses de garantía oficial de Apple." } },
  ],
  MLA9876543210: [
    { id: 4, text: "¿Incluye el S Pen?", answer: { text: "Sí, el S Pen viene incluido dentro del dispositivo." } },
    { id: 5, text: "¿Cuánta memoria RAM tiene?", answer: { text: "Tiene 12GB de RAM." } },
    { id: 6, text: "¿Es resistente al agua?", answer: { text: "Sí, tiene certificación IP68." } },
  ],
  MLA1122334455: [
    { id: 7, text: "¿Tiene carga rápida?", answer: { text: "Sí, soporta carga rápida de 68W." } },
    { id: 8, text: "¿Qué procesador tiene?", answer: { text: "Viene con el MediaTek Dimensity 7030." } },
    { id: 9, text: "¿La pantalla es AMOLED?", answer: { text: "Sí, pantalla pOLED de 6.55 pulgadas a 144Hz." } },
  ],
};

export const searchQuestionsState = selector({
  key: "searchQuestionsState",
  get: ({ get }) => {
    const id = get(itemIdAtom);
    if (id != "") {
      return mockQuestions[id] || [];
    }
  },
});
const mockOpinions = {
  MLA1234567890: {
    rating_average: 4.5,
    paging: { total: 3 },
    reviews: [
      { id: 1, rate: 5, title: "Excelente producto", content: "Muy buena calidad, llegó en perfectas condiciones.", likes: 12, dislikes: 1 },
      { id: 2, rate: 4, title: "Muy bueno", content: "Cumple con lo esperado, buena relación precio-calidad.", likes: 8, dislikes: 2 },
      { id: 3, rate: 2, title: "Regular", content: "La batería no dura tanto como esperaba.", likes: 3, dislikes: 5 },
    ],
  },
  MLA9876543210: {
    rating_average: 4.8,
    paging: { total: 3 },
    reviews: [
      { id: 4, rate: 5, title: "El mejor celular", content: "La cámara con zoom de 100x es increíble. Muy recomendable.", likes: 20, dislikes: 0 },
      { id: 5, rate: 5, title: "Pantalla espectacular", content: "La pantalla AMOLED de 6.8 pulgadas es impresionante.", likes: 15, dislikes: 1 },
      { id: 6, rate: 4, title: "Muy bueno pero pesado", content: "Excelente rendimiento, aunque es un poco pesado para uso con una mano.", likes: 6, dislikes: 3 },
    ],
  },
  MLA1122334455: {
    rating_average: 3.7,
    paging: { total: 3 },
    reviews: [
      { id: 7, rate: 5, title: "Relación precio-calidad", content: "Para el precio que tiene, es un excelente celular.", likes: 10, dislikes: 2 },
      { id: 8, rate: 3, title: "Aceptable", content: "Funciona bien para el uso diario, pero la cámara podría ser mejor.", likes: 4, dislikes: 3 },
      { id: 9, rate: 2, title: "Se calienta mucho", content: "Con uso intensivo se calienta bastante. No lo recomiendo para gaming.", likes: 7, dislikes: 4 },
    ],
  },
};

export const searchOpinionsState = selector({
  key: "searchOpinionsState",
  get: ({ get }) => {
    const id = get(itemIdAtom);
    if (id != "") {
      return mockOpinions[id] || { rating_average: 0, paging: { total: 0 }, reviews: [] };
    }
  },
});
const mockDescriptions = {
  MLA1234567890: {
    plain_text: "iPhone 15 con chip A16 Bionic y Dynamic Island. Pantalla Super Retina XDR de 6.1 pulgadas. Sistema de cámara dual de 48MP. Batería que dura todo el día. Resistente al agua y al polvo (IP68). Incluye cable USB-C.",
  },
  MLA9876543210: {
    plain_text: "Samsung Galaxy S24 Ultra con procesador Snapdragon 8 Gen 3. Pantalla Dynamic AMOLED 2X de 6.8 pulgadas con S Pen integrado. Cámara de 200MP con zoom óptico de 5x y Space Zoom de 100x. Batería de 5000mAh con carga rápida de 45W. 12GB de RAM y 256GB de almacenamiento.",
  },
  MLA1122334455: {
    plain_text: "Motorola Edge 40 Neo con procesador MediaTek Dimensity 7030. Pantalla pOLED de 6.55 pulgadas a 144Hz. Cámara principal de 50MP con estabilización óptica. Batería de 5000mAh con carga rápida TurboPower de 68W. 256GB de almacenamiento y 8GB de RAM. Resistente al agua IP68.",
  },
};

export const searchDescriptionState = selector({
  key: "searchDescriptionState",
  get: ({ get }) => {
    const id = get(itemIdAtom);
    if (id != "") {
      return mockDescriptions[id] || { plain_text: "" };
    }
  },
});
