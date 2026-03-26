import { useScrolled } from "../hooks";
import { navLinks } from "../constants";

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <span className="font-sora font-bold text-lg text-emerald-600 tracking-tight">
        HS.
      </span>

      <div className="flex gap-8">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors font-sora tracking-wide"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
