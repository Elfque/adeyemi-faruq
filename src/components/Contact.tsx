import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { socials } from "../constants/socials";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hello@adeyemif.dev",
    href: "mailto:hello@adeyemif.dev",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+234 000 000 0000",
    href: "tel:+2340000000000",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

// const socials = [
//   { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
//   { icon: <FaInstagram />, href: "#", label: "Instagram" },
//   { icon: <FaTiktok />, href: "#", label: "TikTok" },
//   { icon: <FaGithub />, href: "#", label: "GitHub" },
// ];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      /* Header */
      gsap.from(".contact-header", {
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

      /* Left column — entire block */
      gsap.from(".contact-left", {
        x: -40,
        opacity: 0,
        duration: 1,
        immediateRender: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      /* Right column — entire block */
      gsap.from(".contact-right", {
        x: 40,
        opacity: 0,
        duration: 1,
        immediateRender: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      /* Info cards stagger */
      gsap.from(section.querySelectorAll(".info-card"), {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-left"),
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      /* Social icons pop */
      gsap.from(section.querySelectorAll(".social-link"), {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        immediateRender: false,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: section.querySelector(".socials-row"),
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#fff",
    padding: "14px 18px",
    width: "100%",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "Poppins, sans-serif",
    boxSizing: "border-box",
  };

  const focusStyle = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => ((e.target as HTMLElement).style.borderColor = "rgba(2,253,201,0.6)");
  const blurStyle = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)");

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 text-white overflow-hidden"
      id="contact"
    >
      <div className="section-container">
        {/* ── Header ── */}
        <div className="contact-header mb-16">
          <p className="text-gray-400 mb-3">— Get In Touch</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl font-bold leading-tight">
              Let's Build Something{" "}
              <span style={{ color: "#02fdc9" }}>Great Together</span>
            </h2>
            <p className="text-gray-400 max-w-xs leading-7 md:text-right">
              Have a project in mind? Drop me a message — I usually reply within
              24 hours.
            </p>
          </div>
          <div
            className="mt-8 w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* ── Grid ── */}
        <div className="contact-grid grid md:grid-cols-2 gap-14 items-start">
          {/* ── Left: Info + Socials ── */}
          <div className="contact-left space-y-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="info-card flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 group"
                style={{ background: "#373A44" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(2,253,201,0.08)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#373A44")
                }
              >
                <span
                  className="text-xl p-4 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(2,253,201,0.12)",
                    color: "#02fdc9",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-white text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="socials-row pt-4">
              <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="social-link flex items-center justify-center w-11 h-11 rounded-xl text-lg transition-all duration-300"
                    style={{
                      background: "#373A44",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(2,253,201,0.15)";
                      (e.currentTarget as HTMLElement).style.color = "#02fdc9";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "#373A44";
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)";
                    }}
                  >
                    <s.Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-right">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-20 px-10 rounded-2xl"
                style={{ background: "#373A44" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6"
                  style={{
                    background: "rgba(2,253,201,0.15)",
                    color: "#02fdc9",
                  }}
                >
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-400 leading-7">
                  Thanks for reaching out. I'll get back to you very soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: "rgba(2,253,201,0.12)",
                    color: "#02fdc9",
                    border: "1px solid rgba(2,253,201,0.3)",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Adeyemi Faruq"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-400 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Collaboration / Hello"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or just say hi…"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...inputBase, resize: "vertical" }}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-black transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ background: "#02fdc9" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  Send Message
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
                      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
