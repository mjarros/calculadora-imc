import { imcAdultData, imcByAgeChild, imcElderData } from "@/utils/dataSets";

type IMCREsultProps = {
  imcParams: { person: "child" | "adult" | "elder"; height: string; weight: string; sex?: "male" | "female"; age?: string };
};

type Sex = "female" | "male";

export default function IMCResult({ imcParams }: IMCREsultProps) {
  const imc = Number((Number(imcParams.weight) / Math.pow(Number(imcParams.height), 2)).toFixed(2));
  let result;

  function consultIMCAdult(imc: number): string {
    const imcRange = imcAdultData.find((range) => imc >= range.min && imc <= range.max);

    return `${imcRange?.classification}`;
  }

  function consultIMCElder(imc: number, sexo: Sex): string {
    const sexRange = imcElderData[sexo];
    const range = sexRange.find((f) => imc >= f.min && imc <= f.max);
    if (!range) {
      return "IMC inválido";
    }
    return `${range.classification}`;
  }

  function consultIMCChild(imc: number, paramsAge: string): string {
    const group = imcByAgeChild.find((g) => g.age === Number(paramsAge));

    const range = group?.range.find((f) => {
      const minOk = f.min === null || imc >= f.min;
      const maxOk = f.max === null || imc <= f.max;
      return minOk && maxOk;
    });

    return `${range?.classification}`;
  }

  if (imcParams.person === "adult") {
    result = consultIMCAdult(imc);
  }

  if (imcParams.person === "elder" && !!imcParams?.sex) {
    result = consultIMCElder(imc, imcParams.sex);
  }

  if (imcParams.person === "child" && imcParams.age) {
    result = consultIMCChild(imc, imcParams?.age);
  }

  return !!imc ? (
    <div>
      <p className="text-center text-3xl underline mt-5">Resultado: IMC = {imc}</p>
      <p className="mt-3 text-lg text-center"> Conforme a ABESO, este valor de IMC está na classificação:</p>
      <p className={"text-3xl text-center mt-2 underline"}>&gt; {result} &lt;</p>
    </div>
  ) : (
    <p className="text-center mt-5">Insira os dados para calcular o IMC!</p>
  );
}
