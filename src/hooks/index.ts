import { useState, useEffect, useRef } from "react";

export function useTyping(texts: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (lineIdx >= texts.length) return;

    const current = texts[lineIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < current.length) {
        timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
      } else if (lineIdx < texts.length - 1) {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      } else {
        setDeleting(false);
        setLineIdx((l) => l + 1);
      }
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, texts, speed, pause]);

  return display;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);

  return scrolled;
}
