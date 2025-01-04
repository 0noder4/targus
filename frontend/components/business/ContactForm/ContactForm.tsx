"use client";

import React, { FormEvent, useState } from "react";
import TextInput from "@/components/global/TextInput/TextInput";
import Checkbox from "@/components/global/Checkbox/Checkbox";

import "./ContactForm.scss";
import Button from "@/components/global/Button/Button";
import Notification from "@/components/global/Notification/Notification";
import {
  Memorial,
  MemorialAuthor,
  MemorialContent,
} from "./components/Memorial/Memorial";
import Masonry from "react-layout-masonry";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

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

      if (req.status === 200) {
        setIsSubmitted(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <section className="itp-business_section--contact_form">
      {isSubmitted ? (
        <Notification
          title="Formularz został wysłany"
          message="odezwiemy się w ciągu 24h..."
          onClose={() => setIsSubmitted(false)}
        />
      ) : null}
      <aside className="itp-c-memorials_container">
        <Masonry columns={2} gap={10}>
          <Memorial>
            <MemorialContent>
              Jako Orange Polska już od kilku lat bierzemy udział w
              Inżynierskich Targach Pracy w poszukiwaniu najlepszych talentów na
              rynku.
            </MemorialContent>
            <MemorialAuthor>Orange Polska</MemorialAuthor>
          </Memorial>
          <Memorial>
            <MemorialContent>
              Z przyjemnością rokrocznie wracamy na Inżynierskie Targi Pracy.
              Przede wszystkim frekwencja nigdy nie zawodzi, co jest pewnie
              zasługą intensywnej promocji i prowadzi do dużej liczby
              interesujących kandydatów...
            </MemorialContent>
            <MemorialAuthor>Schneider Electric</MemorialAuthor>
          </Memorial>
          <Memorial>
            <MemorialContent>
              Podczas współpracy przy Targach zawsze cenimy sobie profesjonalne
              podejście, komunikację i zaangażowanie organizatorów.
            </MemorialContent>
            <MemorialAuthor>Orange Polska</MemorialAuthor>
          </Memorial>
        </Masonry>
      </aside>
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
