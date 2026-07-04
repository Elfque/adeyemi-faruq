import { socials } from "../constants/socials";

const navLinks = ["Services", "Works", "About", "Contact"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-8 pt-16 pb-8 text-white"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="section-container">
        {/* ── Top row ── */}
        <div
          className="grid md:grid-cols-3 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Adeyemi Faruq"
                className="w-10 h-9 object-contain"
              />
              <span className="text-xl font-bold tracking-tight">
                Adeyemi<span style={{ color: "#02fdc9" }}>.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-7 max-w-xs">
              Web Designer &amp; Developer crafting scalable, high-performance
              digital experiences from Lagos, Nigeria.
            </p>
            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(2,253,201,0.1)",
                border: "1px solid rgba(2,253,201,0.25)",
                color: "#02fdc9",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#02fdc9" }}
              />
              Open to new projects
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 text-sm transition-all duration-200 hover:pl-2 inline-block"
                    style={{ transition: "color 0.2s, padding-left 0.2s" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#02fdc9")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
              Say Hello
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <a
                  href="mailto:hello@adeyemif.dev"
                  className="transition-colors duration-200"
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#02fdc9")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "")
                  }
                >
                  hello@adeyemif.dev
                </a>
              </p>
              <p>+234 000 000 0000</p>
              <p className="text-gray-400">Lagos, Nigeria</p>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(2,253,201,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#02fdc9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>
            © {year}{" "}
            <span className="text-gray-300 font-medium">Adeyemi Faruq</span>.
            All rights reserved.
          </p>
          <p>
            Designed &amp; Built with{" "}
            <span style={{ color: "#02fdc9" }}>♥</span> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
