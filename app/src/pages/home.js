import React from "react";

import HomeSection from "../components/homeSection";
import AboutSection from "../components/aboutSection";
import BeforeAfterSliderSection from "../components/beforeAfterSliderSection";
import ContactSection from "../components/contactSection";
import ContactLinearSection from "../components/contactLinearSection";

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <ContactLinearSection />
      <AboutSection></AboutSection>
      <BeforeAfterSliderSection></BeforeAfterSliderSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default HomePage;
