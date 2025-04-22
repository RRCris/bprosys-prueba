import { ProductoBancario } from "@/@types/products.types";
import CardProduct from "./CardProduct";

interface Props {
  products: ProductoBancario[];
}
export default function GridProducts({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 place-items-center">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
