import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3, HiX } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── Show/hide background on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Entrance animation ── */
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".nav-brand", {
        y: -20,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        immediateRender: false,
        ease: "power2.out",
      });

      gsap.from(".nav-link", {
        y: -15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        immediateRender: false,
        ease: "power2.out",
      });

      gsap.from(".nav-cta", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        delay: 0.9,
        immediateRender: false,
        ease: "back.out(1.5)",
      });
    }, navRef.current);

    return () => ctx.revert();
  }, []);

  /* ── Track active section via ScrollTrigger ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const triggers: ScrollTrigger[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) setActiveSection(id);
          },
        }),
      );
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  /* ── Smooth scroll handler ── */
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(36, 39, 48, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="section-container flex items-center justify-between h-18 px-8">
        {/* ── Brand ── */}
        <a
          href="#"
          className="nav-brand flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/logo.png"
            alt="Adeyemi Faruq"
            className="w-9 h-8 object-contain"
          />
          <span className="text-white text-lg font-bold tracking-tight">
            Adeyemi<span style={{ color: "#02fdc9" }}>.</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="nav-link relative text-sm font-medium transition-colors duration-300 cursor-pointer bg-transparent border-none"
                style={{
                  color: isActive ? "#02fdc9" : "rgba(255,255,255,0.55)",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)";
                }}
              >
                {link.label}
                {/* Active indicator dot */}
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: "#02fdc9",
                    opacity: isActive ? 1 : 0,
                    transform: `translateX(-50%) scale(${isActive ? 1 : 0})`,
                  }}
                />
              </button>
            );
          })}

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="nav-cta px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: "rgba(2,253,201,0.12)",
              color: "#02fdc9",
              border: "1px solid rgba(2,253,201,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#02fdc9";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(2,253,201,0.12)";
              (e.currentTarget as HTMLElement).style.color = "#02fdc9";
            }}
          >
            Let's Talk
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-2xl text-white bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          opacity: mobileOpen ? 1 : 0,
          background: "rgba(36, 39, 48, 0.96)",
          backdropFilter: "blur(20px)",
          borderTop: mobileOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="flex flex-col gap-1 px-8 py-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 bg-transparent border-none cursor-pointer font-inherit"
                style={{
                  color: isActive ? "#02fdc9" : "rgba(255,255,255,0.6)",
                  background: isActive ? "rgba(2,253,201,0.08)" : "transparent",
                }}
              >
                {link.label}
              </button>
            );
          })}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="mt-4 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 block no-underline"
            style={{
              background: "#02fdc9",
              color: "#000",
            }}
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
