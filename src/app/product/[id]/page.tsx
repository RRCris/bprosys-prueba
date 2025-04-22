import { getProduct } from "@/services/products.services";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    [key: string]: string;
  }>;
}
export default async function PageProduct({ params }: Props) {
  const { id } = await params;
  const id_numeric = parseInt(id);
  if (isNaN(id_numeric)) notFound();

  const product = await getProduct(id_numeric);
  if (!product) notFound();

  return <div>PageProduct {product.nombre}</div>;
}
