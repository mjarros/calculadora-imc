"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function AdultSelector() {
  const [isAdult, setIsAdult] = useState<"child" | "adult" | "elder">("adult");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (person: "child" | "adult" | "elder") => {
    const params = new URLSearchParams(searchParams);
    params.set("person", person);
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
    setIsAdult(person);
  };

  return (
    <div className="flex flex-col content-center justify-center gap-4 sm:flex-row">
      <div className="flex row content-center justify-center gap-1">
        <input onChange={() => handleFilter("elder")} id="default-radio-elder" type="radio" checked={isAdult === "elder"} name="default-elder" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-radio-elder" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Idoso
        </label>
      </div>
      <div className="flex row content-center justify-center gap-1">
        <input onChange={() => handleFilter("adult")} id="default-radio-adult" type="radio" checked={isAdult === "adult"} name="default-adult" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-radio-adult" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Adulto
        </label>
      </div>
      <div className="flex row content-center justify-center gap-1">
        <input onChange={() => handleFilter("child")} id="default-radio-child" type="radio" checked={isAdult === "child"} name="default-child" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-radio-child" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Criança
        </label>
      </div>
    </div>
  );
}
