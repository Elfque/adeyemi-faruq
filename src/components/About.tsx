import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  "Problem Solver",
  "Clean Code Advocate",
  "Performance Obsessed",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Detail-Oriented",
];

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left image + decorative elements
      gsap.from(".about-image-wrap", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-blob", {
        scale: 0.6,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Right content lines
      gsap.from(".about-line", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });

      // Stat counters
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      });

      // Trait pills
      gsap.from(".trait-pill", {
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: pillsRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 text-white overflow-hidden"
      id="about"
    >
      <div className="section-container">
        {/* ── Section Label ── */}
        <p className="text-gray-400 mb-4 about-line">— About Me</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* ── LEFT: Image block ── */}
          <div ref={imageRef} className="relative flex justify-center">
            {/* Decorative glow blob */}
            <div
              className="about-blob absolute w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(2,253,201,0.18) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            <div className="about-image-wrap relative z-10">
              {/* Accent border frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 opacity-40"
                style={{ borderColor: "#02fdc9" }}
              />
              <img
                src="image_18c1bc.jpg"
                alt="Adeyemi Faruq"
                className="w-full max-w-sm rounded-2xl object-cover shadow-2xl relative z-10"
                style={{ aspectRatio: "3/4", objectPosition: "top" }}
              />

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 z-20 px-5 py-3 rounded-xl shadow-xl flex items-center gap-3"
                style={{ background: "#373A44" }}
              >
                <span
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: "#02fdc9" }}
                />
                <span className="text-sm font-semibold">
                  Available for Work
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight about-line">
              I Build Things{" "}
              <span style={{ color: "#02fdc9" }}>for the Web</span>
            </h2>

            <p className="text-gray-400 leading-8 about-line">
              I'm{" "}
              <span className="text-white font-semibold">Adeyemi Faruq</span>, a
              full-stack Web Designer &amp; Developer based in Nigeria. I
              specialise in crafting high-performance web applications that
              marry beautiful design with robust, scalable code.
            </p>

            <p className="text-gray-400 leading-8 about-line">
              From pixel-perfect interfaces to resilient backend systems, I care
              deeply about every layer of the stack. I believe great software
              isn't just functional — it should feel effortless to use.
            </p>

            {/* Trait pills */}
            <div
              ref={pillsRef}
              className="flex flex-wrap gap-3 pt-2 about-line"
            >
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="trait-pill text-sm font-medium px-4 py-2 rounded-full cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(2,253,201,0.08)",
                    border: "1px solid rgba(2,253,201,0.25)",
                    color: "#02fdc9",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(2,253,201,0.18)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(2,253,201,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(2,253,201,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(2,253,201,0.25)";
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-4 about-line">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all duration-300"
                style={{ background: "#02fdc9" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@dev.com"
                className="font-semibold transition-all duration-300"
                style={{ color: "#02fdc9" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "none")
                }
              >
                Let's Talk →
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#02fdc9" }}
              >
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
