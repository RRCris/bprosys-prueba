import Link from "next/link";
import SearchField from "../search-field/SearchField";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-[40px] bg-[#0A4DA3] flex items-center justify-between px-1 md:px-4 text-white">
      {/* logo */}
      <div className="hidden sm:block">BANCA PERU</div>

      {/* opciones */}
      <div className="flex justify-between gap-2">
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/search">
          <button>Productos</button>
        </Link>
        <SearchField />
      </div>
    </nav>
  );
}
