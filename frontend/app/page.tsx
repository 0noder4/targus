import React from "react";

// Core sections
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import About from "@/components/main/About/About";
import Footer from "@/components/main/Footer/Footer";
import Partners from "@/components/main/Sponsors/Partners";
import Survey from "@/components/main/Survey/Survey";
import Organization from "@/components/main/Organization/Organization";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Survey />
        <Organization />
      </main>
      <Footer />
    </>
  );
};

export default Index;
