import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = (s: string) => [...document.querySelectorAll<HTMLElement>(s)];

for (const btn of $$("[data-copy]")) {
  const label = btn.querySelector("[data-copy-label]");
  const text = label?.textContent ?? "";
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(btn.dataset.copy ?? "");
    if (label) {
      label.textContent = "Copied";
      setTimeout(() => (label.textContent = text), 1600);
    }
  });
}

for (const btn of $$("[data-scroll]")) {
  const strip = document.querySelector<HTMLElement>("#courses-strip");
  btn.addEventListener("click", () => strip?.scrollBy({ left: Number(btn.dataset.scroll) * strip.clientWidth * 0.7, behavior: reduce ? "auto" : "smooth" }));
}

if (!reduce) {
  gsap.to("[data-bob]", { y: -12, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
  for (const [i, el] of $$("[data-float]").entries()) gsap.to(el, { y: i % 2 ? 10 : -10, rotate: i % 2 ? 6 : -6, duration: 2.4 + i * 0.3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.from("[data-hero-in]", { y: 24, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" });
  for (const el of $$("[data-reveal]")) gsap.from(el, { y: 36, opacity: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
}
