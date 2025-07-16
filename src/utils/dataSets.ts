type IMCRow = {
  min: number;
  max: number;
  classification: string;
};

const imcAdultData: Array<IMCRow> = [
  { min: 0, max: 18.49, classification: "Abaixo do peso" },
  { min: 18.5, max: 24.99, classification: "Eutrófico (normal)" },
  { min: 25.0, max: 29.99, classification: "Sobrepeso" },
  { min: 30.0, max: 34.99, classification: "Obesidade grau I" },
  { min: 35.0, max: 39.99, classification: "Obesidade grau II" },
  { min: 40.0, max: Infinity, classification: "Obesidade grau III" },
];

type ImcDatasetIdoso = {
  female: Array<IMCRow>;
  male: Array<IMCRow>;
};

const imcElderData: ImcDatasetIdoso = {
  female: [
    { min: 0, max: 21.89, classification: "Baixo peso" },
    { min: 22.0, max: 27.0, classification: "Peso normal" },
    { min: 27.1, max: 32.0, classification: "Sobrepeso" },
    { min: 32.1, max: 37.0, classification: "Obesidade grau I" },
    { min: 37.1, max: 41.9, classification: "Obesidade grau II" },
    { min: 42.0, max: Infinity, classification: "Obesidade grau III" },
  ],
  male: [
    { min: 0, max: 21.89, classification: "Baixo peso" },
    { min: 22.0, max: 27.0, classification: "Peso normal" },
    { min: 27.1, max: 30.0, classification: "Sobrepeso" },
    { min: 30.1, max: 35.0, classification: "Obesidade grau I" },
    { min: 35.1, max: 39.9, classification: "Obesidade grau II" },
    { min: 40.0, max: Infinity, classification: "Obesidade grau III" },
  ],
};

type CategoryImc = "Abaixo do Normal" | "Normal" | "Sobrepeso" | "Obesidade";

type FaixaImc = {
  classification: CategoryImc;
  min: number | null;
  max: number | null;
};

type ImcByAge = {
  age: number;
  range: FaixaImc[];
};

// Valores baseados em tabelas OMS médias para 0 - 19 anos (simplificado e arredondado)
const imcByAgeChild: Array<ImcByAge> = [
  {
    age: 0,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 13.5 },
      { classification: "Normal", min: 13.5, max: 17 },
      { classification: "Sobrepeso", min: 17, max: 18.5 },
      { classification: "Obesidade", min: 18.5, max: null },
    ],
  },
  {
    age: 1,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 14.0 },
      { classification: "Normal", min: 14.0, max: 18.0 },
      { classification: "Sobrepeso", min: 18.0, max: 19.5 },
      { classification: "Obesidade", min: 19.5, max: null },
    ],
  },
  {
    age: 2,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 14.4 },
      { classification: "Normal", min: 14.4, max: 17.9 },
      { classification: "Sobrepeso", min: 17.9, max: 19.7 },
      { classification: "Obesidade", min: 19.7, max: null },
    ],
  },
  {
    age: 6,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 14.5 },
      { classification: "Normal", min: 14.5, max: 16.6 },
      { classification: "Sobrepeso", min: 16.6, max: 18.0 },
      { classification: "Obesidade", min: 18.0, max: null },
    ],
  },
  {
    age: 7,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 15.0 },
      { classification: "Normal", min: 15.0, max: 17.3 },
      { classification: "Sobrepeso", min: 17.3, max: 19.1 },
      { classification: "Obesidade", min: 19.1, max: null },
    ],
  },
  {
    age: 8,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 15.6 },
      { classification: "Normal", min: 15.6, max: 18.1 },
      { classification: "Sobrepeso", min: 18.1, max: 20.3 },
      { classification: "Obesidade", min: 20.3, max: null },
    ],
  },
  {
    age: 9,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 16.1 },
      { classification: "Normal", min: 16.1, max: 18.8 },
      { classification: "Sobrepeso", min: 18.8, max: 21.4 },
      { classification: "Obesidade", min: 21.4, max: null },
    ],
  },
  {
    age: 10,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 16.7 },
      { classification: "Normal", min: 16.7, max: 19.6 },
      { classification: "Sobrepeso", min: 19.6, max: 22.5 },
      { classification: "Obesidade", min: 22.5, max: null },
    ],
  },
  // Para idades maiores (11 a 19), valores baseados em literatura e curva OMS
  {
    age: 11,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 17.2 },
      { classification: "Normal", min: 17.2, max: 20.3 },
      { classification: "Sobrepeso", min: 20.3, max: 23.7 },
      { classification: "Obesidade", min: 23.7, max: null },
    ],
  },
  {
    age: 12,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 17.8 },
      { classification: "Normal", min: 17.8, max: 21.1 },
      { classification: "Sobrepeso", min: 21.1, max: 24.8 },
      { classification: "Obesidade", min: 24.8, max: null },
    ],
  },
  {
    age: 13,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 18.5 },
      { classification: "Normal", min: 18.5, max: 21.9 },
      { classification: "Sobrepeso", min: 21.9, max: 25.9 },
      { classification: "Obesidade", min: 25.9, max: null },
    ],
  },
  {
    age: 14,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 19.2 },
      { classification: "Normal", min: 19.2, max: 22.7 },
      { classification: "Sobrepeso", min: 22.7, max: 26.9 },
      { classification: "Obesidade", min: 26.9, max: null },
    ],
  },
  {
    age: 15,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 19.9 },
      { classification: "Normal", min: 19.9, max: 23.6 },
      { classification: "Sobrepeso", min: 23.6, max: 27.7 },
      { classification: "Obesidade", min: 27.7, max: null },
    ],
  },
  {
    age: 16,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 20.5 },
      { classification: "Normal", min: 20.5, max: 24.3 },
      { classification: "Sobrepeso", min: 24.3, max: 28.7 },
      { classification: "Obesidade", min: 28.7, max: null },
    ],
  },
  {
    age: 17,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 20.9 },
      { classification: "Normal", min: 20.9, max: 24.9 },
      { classification: "Sobrepeso", min: 24.9, max: 29.2 },
      { classification: "Obesidade", min: 29.2, max: null },
    ],
  },
  {
    age: 18,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 21.2 },
      { classification: "Normal", min: 21.2, max: 25.3 },
      { classification: "Sobrepeso", min: 25.3, max: 29.7 },
      { classification: "Obesidade", min: 29.7, max: null },
    ],
  },
  {
    age: 19,
    range: [
      { classification: "Abaixo do Normal", min: null, max: 21.4 },
      { classification: "Normal", min: 21.4, max: 25.7 },
      { classification: "Sobrepeso", min: 25.7, max: 30.1 },
      { classification: "Obesidade", min: 30.1, max: null },
    ],
  },
];

export { imcAdultData, imcByAgeChild, imcElderData };
