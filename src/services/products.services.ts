"use server";
import { ProductoBancario } from "@/@types/products.types";
import productosBancarios from "@/mock/products.mock";
import { delay } from "@/utils/time";

export async function getSomeProducts(): Promise<ProductoBancario[]> {
  // await delay(1); // Espera 1 segundo
  return productosBancarios.slice(1, 5); // Retorna el array de productos
}

export async function getProductForName(
  searchTerm: string,
  listProducts?: ProductoBancario[]
): Promise<ProductoBancario[]> {
  await delay(1);
  const products: ProductoBancario[] = listProducts || productosBancarios;

  if (!searchTerm.trim()) {
    return products; // Si no hay término de búsqueda, retorna todos
  }

  const term = searchTerm.toLowerCase();

  return products.filter((producto) => {
    const nombreProducto = producto.nombre.toLowerCase();

    return nombreProducto.includes(term) || term.includes(nombreProducto);
  });
}

export async function getCategories(): Promise<
  { categoria: string; count: number }[]
> {
  // await delay(1);

  const conteoCategorias: Record<string, number> = {};

  productosBancarios.forEach((producto) => {
    conteoCategorias[producto.categoria] =
      (conteoCategorias[producto.categoria] || 0) + 1;
  });

  return Object.entries(conteoCategorias)
    .map(([categoria, count]) => ({ categoria, count }))
    .sort((a, b) => a.categoria.localeCompare(b.categoria));
}

export async function filterCategory(
  categoria: string
): Promise<ProductoBancario[]> {
  // await delay(1);

  // Si no se especifica categoría, retorna todos los productos
  if (!categoria.trim()) {
    return productosBancarios;
  }

  const categoriaLower = categoria.toLowerCase();

  return productosBancarios.filter((producto) =>
    producto.categoria.toLowerCase().includes(categoriaLower)
  );
}

export async function getProduct(id: number): Promise<ProductoBancario | null> {
  // await delay(1);

  const productoEncontrado = productosBancarios.find(
    (producto) => producto.id === id
  );

  // Retorna el producto o null si no se encuentra
  return productoEncontrado || null;
}

export async function searchProduct(param: string, category?: string) {
  console.log(category);
  if (category && category !== "sin filtro") {
    const productsWithCategory = await filterCategory(category);
    return await getProductForName(param, productsWithCategory);
  } else {
    return await getProductForName(param);
  }
}
