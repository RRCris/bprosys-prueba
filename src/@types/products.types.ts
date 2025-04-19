import { z } from "zod";

export interface type_products {
  id: string;
}

// Esquema Zod para productos bancarios
export const ProductoBancarioSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string().min(3).max(100),
  tipo: z.enum(["Cuenta", "Tarjeta", "Préstamo", "Inversión", "Seguro"]),
  tasaInteres: z.number().min(0).max(100).optional(),
  categoria: z.string().min(3).max(50),
  nivelRiesgo: z.enum(["Bajo", "Medio", "Alto"]).optional(),
  summary: z.string().min(20).max(150), // Descripción corta
  descripcion: z.string().min(100).max(1000), // Descripción larga
});

export type ProductoBancario = z.infer<typeof ProductoBancarioSchema>;
