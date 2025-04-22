import { z } from "zod";

export interface type_products {
  id: string;
}

export const VALID_TYPE = [
  "Cuenta",
  "Tarjeta",
  "Préstamo",
  "Inversión",
  "Seguro",
] as const;
export const VALID_LEVEL = ["Bajo", "Medio", "Alto"] as const;

export type ValidType = (typeof VALID_TYPE)[number];
export type ValidLevel = (typeof VALID_LEVEL)[number];

// Esquema Zod para productos bancarios
export const ProductoBancarioSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string().min(3).max(100),
  tipo: z.enum(VALID_TYPE),
  tasaInteres: z.number().min(0).max(100).optional(),
  categoria: z.string().min(3).max(50),
  nivelRiesgo: z.enum(VALID_LEVEL).optional(),
  summary: z.string().min(20).max(150), // Descripción corta
  descripcion: z.string().min(100).max(1000), // Descripción larga
});

export type ProductoBancario = z.infer<typeof ProductoBancarioSchema>;
