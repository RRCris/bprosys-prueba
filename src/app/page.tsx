import GridProducts from "@/components/products/GridProducts";
import { getSomeProducts } from "@/services/products.services";
import Button from "@/UI/button/Button";
import Link from "next/link";

export default async function Home() {
  const products = await getSomeProducts();
  return (
    <>
      <header className="p-4">
        <h1 className="text-4xl text-center">Bienvenido a Banca Peru</h1>
        <span className="font-bold italic">
          Tu aliado financiero para cada etapa de la vida
        </span>
        <p>
          <strong>Dinero simple, oportunidades grandes.</strong> En Banca Peru,
          diseñamos soluciones a medida para que administres, crezcas y protejas
          lo que más importa.
        </p>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-bold text-center">
          Mira algunos de nuestro productos:
        </h2>
        <GridProducts products={products} />
        <Link href="/search" className="flex justify-center mt-5">
          <Button className="w-full">Ver más</Button>
        </Link>
      </main>
    </>
  );
}
