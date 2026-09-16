import { useScrolled } from "../hooks";
import { navLinks } from "../constants";

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-bg-layer-default/80 backdrop-blur-sm border-b border-stroke-neutral-muted"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <span className="font-sora font-bold text-t5 text-fg-neutral tracking-tight">
        Hyunseo
      </span>

      <div className="flex gap-6">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-t3 font-medium text-fg-neutral-subtle hover:text-fg-brand transition-colors font-sora"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
