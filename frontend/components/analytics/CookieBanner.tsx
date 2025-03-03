"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "/lib/storage/storageHelper";

import styles from "./CookieBanner.module.scss";
import { Card, CardContent, CardFooter } from "../global/Card/Card";
import Button from "../global/Button/Button";

type cookieConsent = null | boolean;

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<cookieConsent>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve cookie consent status from local storage on component mount
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  // Update local storage and Google Analytics consent status when cookieConsent changes
  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  // Do not render the banner if loading or consent is already given
  if (isLoading || cookieConsent !== null) {
    return null;
  }

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
