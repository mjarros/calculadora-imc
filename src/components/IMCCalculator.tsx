"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function IMCCalculator() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleAddURLs = (height: FormDataEntryValue | null, weight: FormDataEntryValue | null, age: FormDataEntryValue | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("height", String(height));
    params.set("weight", String(weight));
    params.set("age", String(age));
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
  };

  const handleAddSexURL = (sex: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sex", String(sex));
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const weight = formData.get("weight");
    const height = formData.get("height");
    const age = formData.get("age");
    handleAddURLs(height, weight, age);
  };

  const isDisabled = false;

  return (
    <div className="mt-5">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 text-center">Preencha os dados abaixo.</h2>

      <form onSubmit={onSubmit} className="bg-primary-900 py-6 px-6 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Idade(apenas ano)</label>
          <input disabled={isDisabled} type="number" step={1} name="age" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>
        <div className="space-y-2">
          <label>Sexo</label>
          <div>
            <select onChange={(e) => handleAddSexURL(e.target.value)} className="px-4 py-3 h-13 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400">
              <option selected value="feminino">
                Feminino
              </option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label>Peso(kg)</label>
          <input disabled={isDisabled} type="number" step={0.01} name="weight" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="space-y-2">
          <label>Altura(cm)</label>
          <input disabled={isDisabled} type="number" step={1} name="height" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
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
