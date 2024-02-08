import React, { useState, useEffect } from "react";
import Layout from "../components/global/Layout";
import Cta from "../components/home/Cta";
import HomeBanner from "../components/home/HomeBanner";
import Achievements from "../components/home/Achievements";
import Features from "../components/home/Features";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import Blog from "../components/home/Blog";
import DynamicSeo from "../components/global/DynamicSeo";
import Slide from "../components/home/slide";
import Logo from "../components/global/Logo";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="justify-center h-screen items-center flex flex-col gap-10">
          <Logo />
          <progress className="pure-material-progress-linear" />
          </div>
      ) : (
        <>
          <Layout>
            <Slide />
            <Cta />
            <HomeBanner />
            <Features />
            <Services />
            <About />
            <Achievements />
            <Testimonials />
            <Contact />
            <Blog />
          </Layout>
        </>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <DynamicSeo
    title="24 Hours Emergency Dentist in Leeds | Private Affordable Dentistry"
    description="Looking for 24 Hours Emergency Dentist in Leeds? Visit Parish Dental Today! We have more than 25 Years of Experience and offer same day treatment."
  />
);
