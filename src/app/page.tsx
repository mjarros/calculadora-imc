import AdultSelector from "@/components/AdultSelector";
import ChildAgeInput from "@/components/ChildAgeInput";
import ElderSexSelector from "@/components/ElderSexSelector";
import IMCCalculator from "@/components/IMCCalculator";
import IMCResult from "@/components/IMCResult";
import LeftBanner from "@/components/LeftBanner";
import RightBanner from "@/components/RightBanner";
import Link from "next/link";

type PageProps = {
  searchParams: Promise<{ person: "child" | "adult" | "elder"; height: string; weight: string; sex?: "male" | "female"; age?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const imcParams = await searchParams;

  return (
    <main>
      <header className="flex flex-row text-center items-center justify-center py-12">
        <p className="text-4xl">Calculadora de IMC para Adultos, Idosos e Crianças</p>
      </header>
      <p className="text-center mb-4 px-3 sm:mb-12">Faça seus cálucos de IMC conforme estipulado pela ABESO &#40;Associação Brasileira para o Estudo da Obesidade e Síndrome Metabólica&#41;.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 justify-items-center items-center px-3">
        <div className="order-1 sm:order-1">
          <LeftBanner />
        </div>
        <div className="order-2 sm:order-2 items-center content-center">
          <section className="mb-4 sm:mb-10">
            <AdultSelector />
            {imcParams?.person === "elder" && <ElderSexSelector />}
            {imcParams?.person === "child" && <ChildAgeInput />}
          </section>
          <section>{imcParams.person === "child" && imcParams.age === "" ? <p className="text-center">Insira a idade da criança.</p> : <IMCCalculator imcParams={imcParams} />}</section>
          <section>
            <IMCResult imcParams={imcParams} />
          </section>
        </div>
        <div className="order-3 sm:order-3">
          <RightBanner />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <section>
          Fontes:
          <Link target="_blank" href={"https://abeso.org.br/wp-content/uploads/2019/12/552fe98518b8a.pdf"} className={"underline cursor-pointer"}>
            ABESO
          </Link>{" "}
          e{" "}
          <Link target="_blank" href={"https://www.who.int/tools/child-growth-standards"} className={"underline cursor-pointer"}>
            OMC
          </Link>
          .
        </section>
      </div>
      <footer className="text-center pb-5">
        Desenvolvido com Next.JS e Tailwind. Mantido por{" "}
        <Link className={"underline cursor-pointer"} href={"https://www.linkedin.com/in/marciojarros/"}>
          Márcio Jarros
        </Link>
        .
      </footer>
    </main>
  );
}
