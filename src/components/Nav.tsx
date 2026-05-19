import { useScrolled } from "../hooks";
import { navLinks } from "../constants";

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <span className="font-sora font-bold text-base text-gray-900 tracking-tight">
        Hyunseo
      </span>

      <div className="flex gap-6">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] font-medium text-gray-500 hover:text-emerald-600 transition-colors font-sora"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
