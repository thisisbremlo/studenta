import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the reveal animation starts (for stagger effects). */
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  /** Run the animation only once (default true). */
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
}

const hiddenTransforms: Record<RevealVariant, string> = {
  up: "translateY(24px)",
  down: "translateY(-24px)",
  left: "translateX(-24px)",
  right: "translateX(24px)",
  scale: "scale(0.96)",
  fade: "none",
};

/**
 * Scroll-reveal wrapper: children fade/slide in when entering the viewport.
 * Uses IntersectionObserver directly (no animation library needed) and
 * respects prefers-reduced-motion via the global CSS override.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show instantly if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : hiddenTransforms[variant],
    transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: visible ? undefined : "opacity, transform",
  };

  return (
    // @ts-expect-error -- dynamic tag with a polymorphic ref
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
