import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";
import SkillsSection from "./Skills";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
