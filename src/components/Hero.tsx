import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  const container = useRef(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      }).from(
        ".hero-image",
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      );
    }, container);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-icon", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, iconsRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".right-part", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });
    }, rightRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="min-h-[90vh] text-white p-8 overflow-hidden flex justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container w-11/12 mx-auto">
        <div className="space-y-6 fade-up">
          <h1 className="text-7xl font-bold leading-tight">
            Adeyemi
            <br />
            Faruq
          </h1>
          <div className="w-20 h-1.5 bg-accent rounded-md"></div>
          <div className="flex space-x-6 text-2xl mt-8" ref={iconsRef}>
            <a href="#" className="hover:text-accent hero-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-accent hero-icon">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-accent hero-icon">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mt-20 fade-up">
            <img
              src="image_18c1bc.jpg"
              alt="Adeyemi Faruq"
              className="hero-image rounded-2xl shadow-2xl"
            />

            <div className="mt-8 space-y-4" ref={rightRef}>
              <h3 className="text-sm tracking-widest text-gray-400 right-part">
                — Introduction
              </h3>
              <h2 className="text-4xl font-semibold right-part max-w-sm leading-12">
                Web Designer & Developer in Nigeria
              </h2>
              <p className="text-gray-400 max-w-sm leading-8 right-part">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </p>
              <a
                href="#"
                className="inline-block text-accent font-semibold hover:underline mt-4 right-part"
              >
                My story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
