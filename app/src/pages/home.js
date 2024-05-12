import React from "react";
import WelcomeSection from "../sections/welcome"
import AboutSection from "../sections/about"
import BookingSection from "../sections/booking"

const HomePage = () => {
  return (
    <div>
      <WelcomeSection/>
      <AboutSection/>
      <BookingSection/>
    </div>
  );
};

export default HomePage;
