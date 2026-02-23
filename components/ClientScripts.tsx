"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousePos.current.x}px`;
        cursorRef.current.style.top = `${mousePos.current.y}px`;
      }
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringPos.current.x}px`;
        cursorRingRef.current.style.top = `${ringPos.current.y}px`;
      }
      
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    const interactiveElements = document.querySelectorAll("a, button, [onclick], [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current) {
          cursorRef.current.style.width = "16px";
          cursorRef.current.style.height = "16px";
        }
        if (cursorRingRef.current) {
          cursorRingRef.current.style.width = "48px";
          cursorRingRef.current.style.height = "48px";
          cursorRingRef.current.style.opacity = "0.8";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current) {
          cursorRef.current.style.width = "8px";
          cursorRef.current.style.height = "8px";
        }
        if (cursorRingRef.current) {
          cursorRingRef.current.style.width = "32px";
          cursorRingRef.current.style.height = "32px";
          cursorRingRef.current.style.opacity = "0.5";
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={cursorRingRef} className="cursor-ring" id="cursorRing" />
    </>
  );
}

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleExp = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return { openIndex, toggleExp };
}

export function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

export function ActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((sec) => {
        const htmlSec = sec as HTMLElement;
        const top = htmlSec.offsetTop - 120;
        const bottom = top + htmlSec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          navLinks.forEach((a) => {
            const link = a as HTMLAnchorElement;
            if (link.getAttribute("href") === "#" + htmlSec.id) {
              link.style.color = "var(--green)";
            } else {
              link.style.color = "var(--text-dim)";
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
