import { FilterProducts } from "@/components/products/FilterProducts";

export default async function SearchPage() {
  return (
    <>
      <header className="p-3">
        <h1 className="font-bold text-2xl">
          Encuentra el producto financiero perfecto para ti
        </h1>
        <p className="mt-3 italic">
          En <strong>Banca Peru</strong>, tenemos más que cuentas: tenemos
          herramientas para transformar tus metas en realidad
        </p>

        <p className="text-lg mt-5">
          <strong>Filtra, compara y elige.</strong> Ya sea que quieras
          <strong>
            ahorrar con propósito, invertir con inteligencia o proteger lo que
            amas,
          </strong>
          aquí encontrarás exactamente lo que buscas, con condiciones
          transparentes y a tu medida.
        </p>
        <div className="mt-9">
          <h2 className="font-bold text-xl text-center">Buscador en linea:</h2>
          <FilterProducts />
        </div>
      </header>
    </>
  );
}
