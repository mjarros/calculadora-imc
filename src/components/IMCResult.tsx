import { imcAdultData, imcByAgeChild, imcElderData } from "@/utils/dataSets";
type Sex = "female" | "male";

type IMCREsultProps = {
  imcParams: { height: string; weight: string; sex: Sex; age: string };
};

export default function IMCResult({ imcParams }: IMCREsultProps) {
  let result: string | undefined;

  const imc: number = Number((Number(imcParams.weight) / Math.pow(Number(imcParams.height) / 100, 2)).toFixed(2));

  function consultIMCChild(imc: number | null, paramsAge: string): string | undefined {
    const group = imcByAgeChild.find((g) => g.age === Number(paramsAge));

    const range = group?.range.find((f) => {
      const minOk = f.min === null || imc >= f.min;
      const maxOk = f.max === null || imc <= f.max;
      return minOk && maxOk;
    });

    return `${range?.classification}`;
  }

  function consultIMCAdult(imc: number | null): string | undefined {
    const imcRange = imcAdultData.find((range) => imc >= range.min && imc <= range.max);

    return `${imcRange?.classification}`;
  }

  function consultIMCElder(imc: number | null, sexo: Sex): string | undefined {
    const sexRange = imcElderData[sexo];
    const range = sexRange.find((f) => imc >= f.min && imc <= f.max);
    if (!range) {
      return "IMC inválido";
    }
    return `${range.classification}`;
  }

  if (imcParams.age <= "19") {
    result = consultIMCChild(imc, imcParams.age);
  }

  if (imcParams.age > "19" && imcParams.age <= "65") {
    result = consultIMCAdult(imc);
  }

  if (imcParams.age > "65") {
    result = consultIMCElder(imc, imcParams.sex);
  }

  return !!imc && !!imcParams.sex && !!imcParams.age && !!imcParams.height && !!imcParams.weight ? (
    <div>
      <p className="text-center text-3xl underline mt-5">Resultado: IMC = {imc}</p>
      <p className="mt-3 text-lg text-center"> Conforme a ABESO, este valor de IMC está na classificação:</p>
      <p className={"text-3xl text-center mt-2 underline"}>&gt; {result} &lt;</p>
    </div>
  ) : (
    <p className="text-center mt-5">Insira os dados para calcular o IMC!</p>
  );
}
