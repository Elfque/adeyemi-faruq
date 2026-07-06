import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { email, socials } from "../constants/socials";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+234 702 517 5073",
    href: "https://wa.link/avjjsq",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
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

      gsap.from(section.querySelectorAll(".info-card"), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-cards"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(section.querySelectorAll(".social-link"), {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        immediateRender: false,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: section.querySelector(".socials-row"),
          start: "top 90%",
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
      id="contact"
    >
      <div className="section-container max-w-5xl mx-auto">
        <div className="contact-header mb-16 text-center">
          <p className="text-accent mb-3 uppercase tracking-widest text-sm">
            — Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let's Build Something <br />
            <span className="text-accent">Great Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-7">
            Have a project in mind, or just want to say hi? Feel free to reach
            out. I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        {/* ── Grid of Info Cards ── */}
        <div className="contact-cards grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              className="info-card flex flex-col items-center text-center gap-5 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(2,253,201,0.1)] group"
            >
              <span className="text-3xl p-5 rounded-full flex items-center justify-center transition-all duration-300 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black">
                {item.icon}
              </span>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="font-semibold text-white text-lg">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Socials ── */}
        <div className="socials-row flex flex-col items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">
            Find Me Online
          </p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="social-link flex items-center justify-center w-14 h-14 rounded-full text-xl transition-all duration-300 border border-white/10 bg-white/5 text-gray-400 hover:bg-accent hover:border-accent hover:text-black hover:shadow-[0_0_20px_rgba(2,253,201,0.4)] hover:-translate-y-1"
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
