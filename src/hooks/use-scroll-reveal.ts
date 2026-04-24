import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion + browsers without IntersectionObserver
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const targets: Element[] = [];
    el.querySelectorAll(".reveal").forEach((c) => targets.push(c));
    if (el.classList.contains("reveal")) targets.push(el);

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    targets.forEach((t) => {
      // If already in viewport on mount, reveal immediately (no flash)
      const rect = t.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        t.classList.add("visible");
      } else {
        observer.observe(t);
      }
    });

    // Safety net: ensure nothing stays hidden forever
    const fallback = window.setTimeout(() => {
      targets.forEach((t) => t.classList.add("visible"));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ref;
}
