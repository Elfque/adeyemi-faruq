import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        ".hero-pill",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 },
      )
        .fromTo(
          ".hero-title-line span",
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.15 },
          "-=0.6",
        )
        .fromTo(
          ".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6",
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "-=0.8",
        )
        .fromTo(
          ".hero-social",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.8",
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="relative min-h-screen text-white overflow-hidden flex flex-col justify-center items-center px-6"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center mt-10 z-10">
        {/* Pill introduction */}
        <div className="hero-pill inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
          <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">
            Available for new projects
          </span>
        </div>

        {/* Main Typography */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6">
          <div className="hero-title-line overflow-hidden pb-2">
            <span className="block">Adeyemi</span>
          </div>
          <div className="hero-title-line overflow-hidden pb-2">
            <span className="block text-accent">Faruq.</span>
          </div>
        </h1>

        {/* Subtitle & Description */}
        <p className="hero-desc text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          I'm a Web Designer & Developer based in Nigeria, focused on crafting
          premium, engaging, and highly performant web applications. Let's
          create something extraordinary together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <a
            href="#works"
            className="hero-cta group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-accent rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative flex items-center gap-2">
              View My Work{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#about"
            className="hero-cta inline-flex items-center justify-center px-8 py-4 font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
          >
            My Story
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="#"
            className="hero-social p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-all text-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hero-social p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-all text-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hero-social p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-all text-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* Background glowing effects */
}
{
  /* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 md:w-150 h-100 md:h-150 bg-accent opacity-20 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none"></div> */
}
