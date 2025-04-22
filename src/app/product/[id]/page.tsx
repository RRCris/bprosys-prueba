// app/productos/[id]/page.tsx

import { getProduct } from "@/services/products.services";
import Button from "@/UI/button/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const id_numeric = parseInt(id);
  if (isNaN(id_numeric)) notFound();

  const product = await getProduct(id_numeric);
  if (!product) notFound();

  // Función para determinar el color del badge según el nivel de riesgo
  const getRiskColor = (nivel?: string) => {
    switch (nivel) {
      case "Alto":
        return "bg-red-100 text-red-800";
      case "Medio":
        return "bg-yellow-100 text-yellow-800";
      case "Bajo":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="container mx-auto py-8 px-4 grow">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Columna izquierda - Información principal */}
        <div className="md:col-span-2 space-y-6">
          {/* Detalles principales */}
          <div>
            <header className="pb-2">
              <h2 className="text-xl font-semibold">Detalles del producto</h2>
            </header>
            <main className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {product.tasaInteres && (
                  <div>
                    <p className="text-sm text-gray-500">Tasa de interés</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {product.tasaInteres}%
                    </p>
                  </div>
                )}

                {product.nivelRiesgo && (
                  <div>
                    <p className="text-sm text-gray-500">Nivel de riesgo</p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(
                        product.nivelRiesgo
                      )}`}
                    >
                      {product.nivelRiesgo}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm text-gray-500">Categoría</p>
                <p className="font-medium">{product.categoria}</p>
              </div>
            </main>
          </div>

          {/* Descripción completa */}
          <div>
            <header className="pb-2">
              <h2 className="text-xl font-semibold">Descripción</h2>
            </header>
            <main>
              <div className="prose max-w-none text-gray-700">
                {product.descripcion.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </main>
          </div>
        </div>

        {/* Columna derecha - CTA y información adicional */}
        <div className="space-y-6">
          <div className="sticky top-6">
            <main className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">
                ¿Te interesa este producto?
              </h3>

              <Button className="w-full">Solicitar ahora</Button>

              <Button className="w-full">Contactar a un asesor</Button>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-2">¿Necesitas ayuda?</h4>
                <p className="text-sm text-gray-600">
                  Llámanos al{" "}
                  <Link
                    href="tel:+123456789"
                    className="text-blue-600 hover:underline"
                  >
                    123-456-789
                  </Link>{" "}
                  o visita una{" "}
                  <Link
                    href="/sucursales"
                    className="text-blue-600 hover:underline"
                  >
                    sucursal cercana
                  </Link>
                  .
                </p>
              </div>
            </main>
          </div>

          {/* Productos relacionados (opcional) */}
          <div>
            <header>
              <h3 className="font-semibold">También podría interesarte</h3>
            </header>
            <main>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Cuenta Corriente Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Tarjeta de Crédito Platinum
                  </a>
                </li>
              </ul>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
