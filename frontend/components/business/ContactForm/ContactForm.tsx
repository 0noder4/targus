"use client";

import React, { FormEvent, useState } from "react";
import TextInput from "@/components/global/TextInput/TextInput";
import Checkbox from "@/components/global/Checkbox/Checkbox";

import "./ContactForm.scss";
import Button from "@/components/global/Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const req = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, surname, companyName, email, tel }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <section className="itp-business_section--contact_form">
      <aside className="itp-c-memorials"></aside>
      <div className="itp-c-contact_form_container">
        <h3 className="itp-c-contact_form_header"></h3>
        <form className="itp-c-contact_form" onSubmit={onSubmit}>
          <TextInput
            label="Imie"
            placeholder="Twoje imie"
            value={name}
            onChange={(e) => setName(e)}
          />
          <TextInput
            label="Nazwisko"
            placeholder="Twoje nazwisko"
            value={surname}
            onChange={(e) => setSurname(e)}
          />
          <TextInput
            label="Nazwa Firmy"
            placeholder="Nazwa firmy"
            value={companyName}
            onChange={(e) => setCompanyName(e)}
          />
          <TextInput
            label="Email"
            placeholder="example@example.com"
            value={email}
            type="email"
            onChange={(e) => setEmail(e)}
          />
          <TextInput
            label="Telefon"
            placeholder="+48 000 000 000"
            value={tel}
            type="tel"
            onChange={(e) => setTel(e)}
          />
          <Checkbox label="wyrażam zgodę na przetwarzanie danych osobowych" />
          <Button
            type="submit"
            variant="secondary"
            className="itp-c-form__submit_button"
          >
            Wyślij
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
