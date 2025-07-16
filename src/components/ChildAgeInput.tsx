"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ChildAgeInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleParams = (age: FormDataEntryValue | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("age", String(age));
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const age = formData.get("age");
    handleParams(age);
  };

  return (
    <div className="mt-5">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 text-center">Preencha a idade da criança.</h2>
      <form onSubmit={onSubmit} className="bg-primary-900 py-6 px-6 text-lg flex row gap-6 content-center justify-center">
        <div className="space-y-2">
          <label>Idade</label>
          <input type="number" step={1} min={1} max={19} name="age" className="px-4 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>

        <div className="flex justify-center items-end gap-6">
          <button type="submit" className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
