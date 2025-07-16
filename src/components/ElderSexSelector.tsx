"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function ElderSexSelector() {
  const [isMale, setIsMale] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (isMale: boolean) => {
    const params = new URLSearchParams(searchParams);
    const isMaleAssigned = isMale === true ? "male" : "female";
    params.set("sex", isMaleAssigned);
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
    setIsMale(isMale);
  };

  return (
    <div className="flex row py-4 content-center justify-center gap-4 sm:flex-row mt-5 border-1">
      <div className="flex row content-center justify-center gap-1">
        <input onChange={() => handleClick(true)} id="default-radio-male" type="radio" checked={isMale} name="default-male" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-radio-male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Homem
        </label>
      </div>
      <div className="flex row content-center justify-center gap-1">
        <input onChange={() => handleClick(false)} id="default-radio-female" type="radio" checked={!isMale} name="default-female" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-radio-female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Mulher
        </label>
      </div>
    </div>
  );
}
