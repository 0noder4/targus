import React from "react";

// Core sections
import Header from "@/components/business/Header/Header";
import Footer from "@/components/business/Footer/Footer";
import Hero from "@/components/business/Hero/Hero";
import ForBusiness from "@/components/business/ForBusiness/ForBusiness";
import ContactForm from "@/components/business/ContactForm/ContactForm";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForBusiness />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
