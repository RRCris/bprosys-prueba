import { Icon, IconProps } from "@iconify/react/dist/iconify.js";

interface Props extends IconProps {
  size?: number;
}
export default function Iconify({ size = 30, ...props }: Props) {
  return <Icon width={size} height={size} {...props} />;
}
