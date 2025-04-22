import GridProducts from "@/components/products/GridProducts";
import { getSomeProducts } from "@/services/products.services";

export default async function Home() {
  const products = await getSomeProducts();
  return (
    <div>
      <GridProducts products={products} />
    </div>
  );
}
