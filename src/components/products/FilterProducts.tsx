"use client";

import { ProductoBancario } from "@/@types/products.types";
import { getCategories, searchProduct } from "@/services/products.services";
import { FormEventHandler, useEffect, useState } from "react";
import GridProducts from "./GridProducts";
import Button from "@/UI/button/Button";

export function FilterProducts() {
  const [products, setProducts] = useState<ProductoBancario[]>([]);
  const [categories, setCategories] = useState<string[]>();
  const [categorySelected, setCategory] = useState<string>("sin filtro");
  const [nameText, setNameText] = useState<string>("");

  useEffect(() => {
    searchProduct("").then((products) => {
      setProducts(products);
    });
    getCategories().then((categories) => {
      setCategories(categories.map((cat) => cat.categoria));
    });
  }, []);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    searchProduct(nameText, categorySelected).then((products) => {
      setProducts(products);
    });
  };
  return (
    <>
      <form
        className="bg-[#0A4DA3] flex justify-center py-6 text-white mb-7  flex-col gap-3 px-3"
        onSubmit={onSubmit}
      >
        <input
          onChange={(e) => setNameText(e.target.value)}
          value={nameText}
          type="text"
          className="bg-green-50 text-black py-3 rounded-lg hover:border-amber-500 hover:border-2"
          placeholder="Nombre a buscar"
        />
        <select
          className="bg-green-50 text-black py-3 rounded-lg"
          onChange={(e) => setCategory(e.target.value)}
          value={categorySelected || ""}
        >
          <option value={"sin filtro"}>Todas Las Categorias</option>
          {categories &&
            categories.map((cat) => (
              <option
                key={cat}
                value={cat}
                className="text-black hover:bg-blue-200"
              >
                {cat}
              </option>
            ))}
        </select>
        <Button className="w-fit" type="submit">
          Buscar
        </Button>
      </form>
      <GridProducts products={products} />
    </>
  );
}
