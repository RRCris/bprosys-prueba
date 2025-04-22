"use client";
import { FormEventHandler, useState } from "react";
import Iconify from "../iconify/Iconify";
import { redirect } from "next/navigation";

interface Props {
  onSubmit?: (param: string) => void;
}
export default function SearchField({ onSubmit }: Props) {
  const [searchParam, setSearchParam] = useState("");
  const handleSearch: FormEventHandler = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(searchParam);
    else redirect(`/search?param=${searchParam}`);
  };
  return (
    <form className="flex" onSubmit={handleSearch}>
      <label>
        <input
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          type="text"
          className="border-b-2 border-white outline-none"
          placeholder="Buscar..."
        />
      </label>
      <button className="rounded-md bg-[#0099CC]" type="submit">
        <Iconify icon="ic:baseline-search" />
      </button>
    </form>
  );
}
