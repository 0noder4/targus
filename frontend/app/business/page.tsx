import React from "react";

// Core sections
import Header from "@/components/global/Header/Header";
import Footer from "@/components/global/Footer/Footer";
import Hero from "@/components/business/Hero/Hero";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Index;
