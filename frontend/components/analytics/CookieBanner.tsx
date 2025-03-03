"use client";

import { useState, useEffect } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../lib/storage/storageHelper";

import styles from "./CookieBanner.module.scss";
import { Card, CardContent, CardFooter } from "../global/Card/Card";
import Button from "../global/Button/Button";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(
    getLocalStorage("cookie_consent", null)
  );

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`${styles.container} ${
        cookieConsent !== null ? styles.hidden : styles.visible
      }`}
    >
      <div className={styles.overlay} />
      <Card className={styles.card} variant="light">
        <CardContent>
          Aby stale udoskanalać Inżynierskie Targi Pracy korzystamy z plików
          cookies. 🍪 Na podstawie anonimowych danych o Twojej aktywności możemy
          prowadzić statystyki oraz działania marketingowe. Szanujemy twoją
          prywatność! Jeżeli nie życzysz sobie przetwarzania twoich danych
          odrzuć przetwarzanie cookies.
        </CardContent>
        <CardFooter>
          <Button onClick={() => setCookieConsent(false)} variant="dark">
            Odrzuć
          </Button>
          <Button onClick={() => setCookieConsent(true)} variant="orange">
            Akceptuj
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
