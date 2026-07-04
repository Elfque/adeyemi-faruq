import { FaLinkedin, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const links = {
  instagram: "https://instagram.com/wirbking",
  x: "https://x.com/WirbKing",
  github: "https://github.com/elfque",
  linkedin: "https://www.linkedin.com/in/adeyemifaruqfrontendwebdeveloper/",
  tiktok: "https://www.tiktok.com/@wirbking",
};

export const socials = [
  { Icon: FaLinkedin, href: links.linkedin, label: "LinkedIn" },
  { Icon: FaInstagram, href: links.instagram, label: "Instagram" },
  { Icon: FaTiktok, href: links.tiktok, label: "TikTok" },
  { Icon: FaGithub, href: links.github, label: "GitHub" },
  { Icon: FaXTwitter, href: links.x, label: "X" },
];
