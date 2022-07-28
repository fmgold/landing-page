import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Home;
