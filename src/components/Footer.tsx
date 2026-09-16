import { contactLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="py-12 container-main border-t border-stroke-neutral-muted">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sora text-t3 text-fg-neutral-subtle hover:text-fg-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="font-sora text-t2 text-fg-placeholder">
          &copy; 2026 Hyunseo Han
        </span>
      </div>
    </footer>
  );
}
