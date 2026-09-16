import { useState, useEffect, useRef } from "react";

export function useTyping(texts: string[], speed = 60, pause = 1800) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = texts[lineIdx] ?? "";

  useEffect(() => {
    if (lineIdx >= texts.length) return;

    const line = texts[lineIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (deleting) {
      timer = setTimeout(() => {
        if (charIdx > 0) {
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setLineIdx((l) => l + 1);
        }
      }, speed / 2);
    } else if (charIdx < line.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (lineIdx < texts.length - 1) {
      timer = setTimeout(() => setDeleting(true), pause);
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, texts, speed, pause]);

  return current.slice(0, charIdx);
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
