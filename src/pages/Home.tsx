import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BestSellers from "../components/BestSeller";
import GiftHamper from "../components/GiftHamper";
import TeaTimeDelights from "../components/TeaTimeDelights";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTA";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Menu />
      <BestSellers />
      <GiftHamper />
      <TeaTimeDelights />
      <Testimonials />
      <CTASection />
    </>
  );
};


export default Home;
