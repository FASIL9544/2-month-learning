
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const revealTargets = [
  ".hero-copy",
  ".hero-portrait",
  "main > .section .section-label",
  "main > .section .section-title",
  "main > .section .section-subtitle",
  ".final-cta",
  ".audience-card",
  ".learning-card",
  ".curriculum-card",
  ".outcome-card",
  ".mentor-visual",
  ".mentor-copy",
  ".testimonial-card",
  ".pricing-copy",
  ".pricing-card",
  ".faq-item",
  ".booking-intro",
  ".booking-info",
  ".booking-card",
  ".site-footer .footer-contact",
  ".site-footer .footer-disclaimer",
  ".site-footer .footer-bottom",
].join(", ");

const parallaxTargets = [
  { selector: ".hero-chart", distance: 28 },
  { selector: ".mentor-section .mentor-visual", distance: 18 },
];

export default function ScrollReveal() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealTargets)
    );

    const animations = new Set<Animation>();

    if (reduceMotion) {
      setScrollProgress(0);
      return;
    }

    const revealed = new WeakSet<Element>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealed.has(entry.target)) {
            return;
          }

          const element = entry.target as HTMLElement;
          revealed.add(element);

          const siblings = Array.from(
            element.parentElement?.children ?? []
          );

          const index = Math.max(0, siblings.indexOf(element));

          const animation = element.animate(
            [
              {
                opacity: 0,
                transform: "translate3d(0, 24px, 0)",
              },
              {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
              },
            ],
            {
              duration: 700,
              delay: Math.min(index, 4) * 65,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both",
            }
          );

          animations.add(animation);
          revealObserver.unobserve(element);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((element) => {
      revealObserver.observe(element);
    });

    const parallaxAnimations = parallaxTargets.flatMap(
      ({ selector, distance }) =>
        Array.from(
          document.querySelectorAll<HTMLElement>(selector),
          (element) => {
            const zoom = element.matches(".hero-chart")
              ? "1.03"
              : "1";

            const animation = element.animate(
              [
                {
                  translate: `0 ${-distance}px`,
                  scale: zoom,
                },
                {
                  translate: `0 ${distance}px`,
                  scale: zoom,
                },
              ],
              {
                duration: 1000,
                fill: "both",
              }
            );

            animation.pause();
            animations.add(animation);

            return { element, animation };
          }
        )
    );

    let animationFrame = 0;

    const updateScrollEffects = () => {
      animationFrame = 0;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      setScrollProgress(progress);

      const viewportCenter = window.innerHeight / 2;

      parallaxAnimations.forEach(({ element, animation }) => {
        const target = element.matches(".hero-chart")
          ? element.closest(".hero") ?? element
          : element;

        const bounds = target.getBoundingClientRect();
        const elementCenter = bounds.top + bounds.height / 2;

        const viewProgress = Math.min(
          1,
          Math.max(
            0,
            0.5 +
              0.5 *
                ((viewportCenter - elementCenter) / viewportCenter)
          )
        );

        animation.currentTime = viewProgress * 1000;
      });
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(
          updateScrollEffects
        );
      }
    };

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);

    scheduleUpdate();

    return () => {
      revealObserver.disconnect();

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return (
    <div
      className="scroll-progress"
      aria-hidden="true"
      style={{
        transform: `scaleX(${scrollProgress})`,
      }}
    />
  );
}
