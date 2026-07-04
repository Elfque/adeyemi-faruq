import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub, FiArrowRight, FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: "Full-Stack" | "Frontend" | "Mobile";
  tags: string[];
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  liveLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Justis Law firm website",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
    image: "/imgs/justis.jpg",
    description:
      "A high-performance analytics dashboard designed for SaaS platforms, featuring interactive charts, real-time metrics, and dark mode optimizations.",
    longDescription:
      "Apex Analytics is a premium administrative and reporting dashboard designed to give SaaS enterprises actionable insights into user behavior, system performance, and financial metrics. Built with React and TypeScript, it incorporates a highly responsive dashboard grid, custom interactive widgets, and advanced data visualization filters for seamless data analysis.",
    features: [
      "Dynamic charting with Recharts supporting zooming and panning",
      "Real-time data streaming simulation for system health metrics",
      "Highly responsive grid layout with custom widgets",
      "Advanced date range and multi-metric filter query builder",
      "Fluid state transitions and animations powered by GSAP",
    ],
    liveLink: "https://justis-website.vercel.app/",
    githubLink: "https://github.com/elfque/justis",
  },
  {
    id: 2,
    title: "Vantage - Portfolio Builder",
    category: "Full-Stack",
    tags: ["Next.js", "Node.js", "SQLite", "Tailwind CSS", "TypeScript"],
    image: "/imgs/vantage.jpg",
    description:
      "A modern e-commerce solution featuring headless checkout, instant product search, dynamic inventory management, and a sleek payment flow.",
    longDescription:
      "Novakart is a next-generation shopping platform engineered to demonstrate the capabilities of modern headless web architectures. By decoupling the frontend user experience (Next.js) from the backend transactional APIs (Node/Express/PostgreSQL), Novakart achieves near-instant page load speeds, robust inventory state sync, and high-performance server-side rendering.",
    features: [
      "Decoupled headless storefront built on Next.js App Router",
      "Stripe payment gateway integration with webhooks for order verification",
      "Full-text fuzzy search and smart catalog filtering systems",
      "Admin control center for real-time inventory and sales tracking",
      "Image optimization pipeline for immediate loading speeds",
    ],
    liveLink: "https://vantage-ten.vercel.app/",
    githubLink: "https://github.com/elfque/vantage",
  },
  {
    id: 3,
    title: "ResuTailor",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "AI"],
    image: "/imgs/resu-tailor.jpg",
    description:
      "A secure cross-platform mobile banking concept featuring peer-to-peer transfers, savings tracking, and biometrics integration.",
    longDescription:
      "Paymora is a modern fintech application conceptualized to bridge the gap between traditional banking and seamless peer-to-peer micro-transactions. Developed for cross-platform mobile environments using React Native and Expo, it features instant secure transfers, interactive budget plotting, and multi-factor biometric authentication.",
    features: [
      "Secure peer-to-peer instant digital wallet transfers",
      "Multi-currency account management with live conversion rates",
      "Interactive budget planner and automated savings goals",
      "Biometric security (FaceID/TouchID) integrations",
      "Automated monthly spend categorization and notification triggers",
    ],
    liveLink: "https://resu-tailor-client.vercel.app/",
    githubLink: "https://github.com/elfque/resu-tailor",
  },
];

const categories = ["All", "Full-Stack", "Frontend"];

const WorksSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Initial scroll entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".works-header", {
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

      // Filter tabs animation
      gsap.from(section.querySelectorAll(".works-filter-tab"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".works-filter-tabs"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Initial project cards animation
      gsap.from(section.querySelectorAll(".project-card"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".projects-grid"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      );
    }
  }, [activeCategory]);

  // Modal animations
  useEffect(() => {
    if (selectedProject) {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";

      const ctx = gsap.context(() => {
        // Fade in overlay
        gsap.fromTo(
          modalOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" },
        );
        // Slide & scale up modal panel
        gsap.fromTo(
          modalRef.current,
          { y: 50, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.4,
            delay: 0.1,
            ease: "power3.out",
          },
        );
      });
      return () => {
        ctx.revert();
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  const closeModal = () => {
    gsap.context(() => {
      gsap.to(modalRef.current, {
        y: 30,
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(modalOverlayRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.05,
        ease: "power2.in",
        onComplete: () => {
          setSelectedProject(null);
        },
      });
    });
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 text-white overflow-hidden bg-[#242730]"
      id="works"
    >
      <div className="section-container">
        {/* ── Header ── */}
        <div className="works-header mb-14">
          <p className="text-gray-400 mb-3">— Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl font-bold leading-tight">
              Selected <span style={{ color: "#02fdc9" }}>Works</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-7 md:text-right">
              A curated collection of web applications and mobile projects,
              combining high performance with functional aesthetics.
            </p>
          </div>
          <div
            className="mt-8 w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* ── Category Filters ── */}
        <div className="works-filter-tabs flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className="works-filter-tab px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
              style={
                activeCategory === cat
                  ? { background: "#02fdc9", color: "#000" }
                  : {
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Project Cards Grid ── */}
        <div
          ref={cardsContainerRef}
          className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card flex flex-col rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group"
              style={{
                background: "#373A44",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = "rgba(2,253,201,0.3)";
                el.style.boxShadow = "0 20px 40px -15px rgba(2,253,201,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20">
                    Learn More &rarr;
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex flex-col grow">
                <span
                  className="text-xs font-semibold tracking-wider uppercase mb-2 block"
                  style={{ color: "#02fdc9" }}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6 mb-5 grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#242730]/60 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#242730]/60 text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Card CTA */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold mt-auto pt-3 border-t transition-colors duration-300"
                  style={{
                    borderTopColor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <span>View Case Study</span>
                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#02fdc9" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Case Study Detailed Modal ── */}
        {selectedProject && (
          <div
            ref={modalOverlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 cursor-default"
            style={{
              background: "rgba(10, 11, 14, 0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={closeModal}
          >
            <div
              ref={modalRef}
              className="w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto cursor-default shadow-2xl relative no-scrollbar"
              style={{
                background: "#242730",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 bg-black/40 hover:bg-black/60 border border-white/10 cursor-pointer"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>

              {/* Banner Image */}
              <div className="relative aspect-video w-full max-h-95 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#242730] via-[#242730]/30 to-transparent" />

                {/* Float Category */}
                <div className="absolute bottom-6 left-6 md:left-10">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(2, 253, 201, 0.15)",
                      color: "#02fdc9",
                      border: "1px solid rgba(2, 253, 201, 0.3)",
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="px-6 pb-10 pt-6 md:px-10 md:pb-12 grid md:grid-cols-3 gap-10">
                {/* Left Description Column (2/3 width) */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 leading-8 text-sm md:text-base font-light">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Key Features & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm md:text-base text-gray-300 font-light"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "#02fdc9" }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Metadata Column (1/3 width) */}
                <div className="space-y-6 md:border-l md:border-white/5 md:pl-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#373A44] text-white/90 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-black transition-all duration-300"
                      style={{ background: "#02fdc9" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = "0.85";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = "1";
                      }}
                    >
                      <span>Live Preview</span>
                      <FiExternalLink />
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255, 255, 255, 0.1)";
                        el.style.borderColor = "rgba(255, 255, 255, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255, 255, 255, 0.05)";
                        el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <FiGithub />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
