import React from "react";

import "./Survey.scss";
import Score from "./components/Score/Score";
import { Card, CardContent, CardTitle } from "@/components/global/Card/Card";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatus.
        </CardContent>
      </Card>
    </section>
  );
};

export default Survey;
