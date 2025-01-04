import React from "react";

// Core sections
import Header from "@/components/business/Header/Header";
import Footer from "@/components/business/Footer/Footer";
import Hero from "@/components/business/Hero/Hero";
import ForBusiness from "@/components/business/ForBusiness/ForBusiness";
import ContactForm from "@/components/business/ContactForm/ContactForm";
import OurTeam from "@/components/business/OurTeam/OurTeam";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForBusiness />
        <ContactForm />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
};

export default Index;
