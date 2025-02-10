import React from "react";

import "./Survey.scss";
import Score from "./components/Score/Score";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "/components/global/Card/Card";
import { LinkButton } from "/components/global/Button/Button";

const Survey = () => {
  return (
    <section className="itp-main_section--survey" id="pdi">
      <div className="itp-c-survey__header">
        <h1 className="itp-c-survey__header__title">Okiem studenta</h1>
        <h2 className="itp-c-survey__header__subtitle">Ranking firm 2024</h2>
      </div>
      <div className="itp-c-survey_results">
        <Score current={100} label="Sieć Badawcza Łukasiewicz - IL" />
        <Score current={90} label="Samsung" />
        <Score current={90} label="Budimex" />
        <Score current={80} label="Orlen" />
        <Score current={70} label="Procter&Gamble" />
        <Score current={70} label="Airbus" />
        <Score current={60} label="TRUMPF Huettinger" />
        <Score current={60} label="Accenture" />
      </div>
      <Card className="itp-c-survey_about">
        <CardTitle>Czym jest badanie?</CardTitle>
        <CardContent>
          Badanie „Pracodawca dla Inżyniera” (PDI) to ankieta przeprowadzana
          wśród polskich uczelni technicznych od wielu lat. Dzięki naszemu
          badaniu pracodawcy mogą dowiedzieć się, czego oczekują pracownicy oraz
          jakie aspekty są dla nich najistotniejsze podczas szukania pracy.
          Wyniki prezentowane są na uroczystej gali, która jest nie tylko dobrą
          zabawą, ale również świetną okazją do nawiązania nowych kontaktów.
        </CardContent>
        <CardFooter>
          <LinkButton href="https://ankieta.pw.edu.pl/index.php/511362?lang=pl">
            Wypełnij ankietę
          </LinkButton>
          <LinkButton href="/docs/Pracodawca_Dla_Inżyniera_2024.pdf">
            Zobacz wyniki 2024 edycji
          </LinkButton>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Survey;
