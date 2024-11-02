import React from "react";

// Core sections
import Header from "@/components/main/Header/Header";
import Hero from "@/components/main/Hero/Hero";
import About from "@/components/main/About/About";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
};

export default Index;
