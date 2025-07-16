"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type IMCCalculatorProps = {
  imcParams: { person: "child" | "adult" | "elder"; height: string; weight: string; sex?: "male" | "female"; age?: string };
};

export default function IMCCalculator({ imcParams }: IMCCalculatorProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleCalculate = (height: FormDataEntryValue | null, weight: FormDataEntryValue | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("height", String(height));
    params.set("weight", String(weight));
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const weight = formData.get("weight");
    const height = formData.get("height");
    handleCalculate(height, weight);
  };

  const disabled = () => {
    return (imcParams?.person === "child" && !imcParams?.age) || (imcParams?.person === "elder" && !imcParams?.sex);
  };

  const isDisabled = disabled();

  return (
    <div className="mt-5">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 text-center">Preencha os dados de peso e altura.</h2>

      <form onSubmit={onSubmit} className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Peso</label>
          <input disabled={isDisabled} type="number" step={0.01} name="weight" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <label>Altura</label>
          <input disabled={isDisabled} type="number" step={0.01} name="height" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="flex justify-center items-center gap-6">
          <button disabled={isDisabled} type="submit" className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Calcular
          </button>
        </div>
      </form>
    </div>
  );
}
