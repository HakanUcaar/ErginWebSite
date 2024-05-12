import React from "react";
import Section from "../components/section";

const backgroundImagePath = "/assets/img/sec1.jpg";
const backgroundImg = {
  backgroundImage: `url(${backgroundImagePath})`,
  height: "calc(100vh - 160px)",
  backgroundSize: "cover",
};

const WelcomeSection = () => {
  return (
    <Section style={backgroundImg}>
      <div className="flex flex-column w-full justify-content-center align-items-center h-100">
        <span className="text-800 font-bold text-2xl sm:text-2xl md:text-5xl xl:text-5xl">Op. Dr. Ergin Erdoğan</span>
        <span className="typed font-medium text-4xl sm:text-4xl md:text-7xl xl:text-7xl"/>
        <p className="font-medium font-italic">Her adımda birlikte.</p>
      </div>
    </Section>
  );
};

export default WelcomeSection;
