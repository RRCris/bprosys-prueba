import {
  ProductoBancario,
  ValidLevel,
  ValidType,
} from "@/@types/products.types";
import Iconify from "@/UI/iconify/Iconify";

interface Props {
  product: ProductoBancario;
}
export default function CardProduct({ product }: Props) {
  return (
    <div className="bg-gray-100 w-[300px] h-[200px] rounded-2xl overflow-ellipsis p-3 ">
      <h3 className="text-center font-bold text-xl">{product.nombre}</h3>
      <div className="m-3 flex justify-center items-center gap-2">
        <TagLevel level={product.nivelRiesgo} />
        <TagType validType={product.tipo} />
      </div>
      <p className="mt-4">{product.summary}</p>
      <TagRate rate={product.tasaInteres} />
    </div>
  );
}

const colorForLevel: Record<ValidLevel, string> = {
  Alto: "#FF919A",
  Bajo: "#D4FEFF",
  Medio: "#FFD3BA",
};

interface PropsTagLevel {
  level: ValidLevel | undefined;
}
function TagLevel({ level }: PropsTagLevel) {
  if (!level) return null;
  return (
    <p
      style={{ background: colorForLevel[level] }}
      className="rounded-2xl w-fit px-2 font-bold flex gap-1 items-center"
    >
      <Iconify icon="healthicons:high-level-outline" size={20} />
      {level}
    </p>
  );
}

const colorForType: Record<ValidType, string> = {
  Cuenta: "#D9DBDE",
  Inversión: "#FFB65C",
  Préstamo: "#FFE0FA",
  Seguro: "#A6AAFF",
  Tarjeta: "#A6FFAF",
};

interface PropsTagType {
  validType: ValidType | undefined;
}
function TagType({ validType }: PropsTagType) {
  if (!validType) return null;
  return (
    <p
      style={{ background: colorForType[validType] }}
      className="rounded-2xl w-fit px-2 font-bold flex gap-1 items-center"
    >
      <Iconify icon="solar:card-line-duotone" size={20} />
      {validType}
    </p>
  );
}
interface PropsTagRate {
  rate: number | undefined;
}
function TagRate({ rate }: PropsTagRate) {
  if (!rate) return null;
  const good = rate > 15;
  const color = good ? "#FF2432" : "#0DA822";
  const icon = good ? "lucide:move-down" : "lucide:move-up";
  return (
    <p className="mt-3 px-2 font-bold flex gap-1 items-center justify-center">
      <Iconify icon={icon} size={20} color={color} />
      {rate}%
    </p>
  );
}
