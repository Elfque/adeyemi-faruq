import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";
import SkillsSection from "./Skills";
import WorksSection from "./Works";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
