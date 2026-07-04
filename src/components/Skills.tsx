import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVite,
  SiFramer,
  SiFirebase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact />, level: 95 },
  { name: "TypeScript", icon: <SiTypescript />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
  { name: "Framer Motion", icon: <SiFramer />, level: 80 },
  { name: "Vite", icon: <SiVite />, level: 85 },

  { name: "Node.js", icon: <FaNodeJs />, level: 88 },
  { name: "Python", icon: <FaPython />, level: 55 },
  // { name: "PostgreSQL", icon: <SiPostgresql />, level: 82 },
  { name: "MongoDB", icon: <SiMongodb />, level: 80 },
  // { name: "GraphQL", icon: <SiGraphql />, level: 70 },
  { name: "Firebase", icon: <SiFirebase />, level: 85 },

  { name: "Figma", icon: <FaFigma />, level: 87 },
  { name: "Git", icon: <FaGitAlt />, level: 93 },
  // { name: "Docker", icon: <FaDocker />, level: 72 },
];

/* ─── Animated skill bar ─────────────────────────────────────────── */
const SkillBar = ({
  name,
  level,
  icon,
  delay,
}: {
  name: string;
  level: number;
  icon: React.ReactNode;
  delay: number;
}) => {
  const barRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    gsap.set(el, { width: "0%" });

    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      onEnter: () => {
        gsap.to(el, {
          width: `${level}%`,
          duration: 1.4,
          delay: delay * 0.08,
          ease: "power3.out",
        });
      },
    });

    return () => {
      triggerRef.current?.kill();
    };
  }, [level, delay]);

  return (
    <div className="skill-item">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span style={{ color: "#02fdc9" }} className="text-base">
            {icon}
          </span>
          <span>{name}</span>
        </div>
        <span className="text-xs font-semibold" style={{ color: "#02fdc9" }}>
          {level}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,253,201,0.55) 0%, #02fdc9 100%)",
            width: "0%",
          }}
        />
      </div>
    </div>
  );
};

/* ─── Main section ───────────────────────────────────────────────── */
const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* entrance animations */
  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        immediateRender: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(section.querySelectorAll(".skills-tab"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".skills-tabs"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(section.querySelectorAll(".stat-block"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".stats-row"),
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 text-white overflow-hidden"
      id="skills"
    >
      <div className="section-container">
        {/* ── Header ── */}
        <div className="skills-header mb-14">
          <p className="text-gray-400 mb-3">— Skills & Expertise</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl font-bold leading-tight">
              Tools I <span style={{ color: "#02fdc9" }}>Wield Daily</span>
            </h2>
            <p className="text-gray-400 max-w-xs leading-7 md:text-right">
              A curated stack I rely on to build fast, beautiful, and scalable
              products.
            </p>
          </div>
          <div
            className="mt-8 w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* ── Skill Bars Grid ── */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-7 mb-16">
          {skills.map((skill, i) => (
            <SkillBar
              key={`${skill.name}`}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              delay={i}
            />
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div
          className="stats-row grid grid-cols-2 md:grid-cols-4 gap-5 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { value: "5+", label: "Years Experience", sub: "Full-stack dev" },
            {
              value: "20+",
              label: "Projects Shipped",
              sub: "Across industries",
            },
            { value: "15+", label: "Technologies", sub: "In active use" },
            { value: "100%", label: "Passion", sub: "For clean code" },
          ].map((item) => (
            <div
              key={item.label}
              className="stat-block p-6 rounded-2xl text-center transition-all duration-300"
              style={{ background: "#373A44" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(2,253,201,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#373A44";
              }}
            >
              <div
                className="text-4xl font-bold mb-1"
                style={{ color: "#02fdc9" }}
              >
                {item.value}
              </div>
              <p className="font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-gray-400 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
