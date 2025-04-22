// app/not-found.tsx
import Button from "@/UI/button/Button";
import Link from "next/link";

interface Props {
  message?: string;
}
export default function NotFoundPage({
  message = "¡Página no encontrada!",
}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 text-center">
      <div className="mx-auto max-w-md animate-fade-up">
        {/* Logo/Empresa */}
        <Link href="/" className="mb-8 inline-block">
          <span className="text-2xl font-bold text-blue-600">Banca Peru</span>
        </Link>

        {/* Ilustración/Animación */}
        <div className="relative mb-10 h-60">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-blue-100 opacity-60"></div>
          </div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <span className="text-8xl font-bold text-blue-500">404</span>
          </div>
        </div>

        {/* Texto principal */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          {message}
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Acciones */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button>
            <Link href="/" className="shadow-lg">
              Volver al inicio
            </Link>
          </Button>
          <Button>
            <Link href="#" className="border-blue-300">
              Contactar soporte
            </Link>
          </Button>
        </div>

        {/* Enlace útil adicional */}
        <div className="mt-10 text-sm text-gray-500">
          ¿Buscas algo específico? Prueba nuestro{" "}
          <Link
            href="/search"
            className="font-medium text-blue-600 hover:underline"
          >
            buscador de productos
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
