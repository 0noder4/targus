import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

import "./OurTeam.scss";

import JULIA from "/public/images/fr/Julia_Dabrowska.jpg";
import JAGODA from "/public/images/fr/Jagoda_Jaszczura.jpg";
import LIZA from "/public/images/fr/Liza_Guta.jpg";
import MICHAL from "/public/images/fr/Michal_Lesny.jpg";
import type { OurTeam as OurTeamSection } from "/interfaces/sections/BusinessSections";
import { getBackendImageUrl } from "/lib/api/navigateBackend";

const DEFAULT_TITLE = "Lub skontaktuj się bezpośrednio";

const DEFAULT_MEMBERS = [
  {
    name: "Julia",
    surname: "Dąbrowska",
    tel: "536-866-700",
    email: "julia.dabrowska@best.pw.edu.pl",
    avatar: JULIA,
  },
  {
    name: "Jagoda",
    surname: "Jaszczura",
    tel: "665-585-909",
    email: "jagoda.jaszczura@best.pw.edu.pl",
    avatar: JAGODA,
  },
  {
    name: "Yelizaveta",
    surname: "Guta",
    tel: "501-394-112",
    email: "yelizaveta.guta@best.pw.edu.pl",
    avatar: LIZA,
  },
  {
    name: "Michał",
    surname: "Leśny",
    tel: "512-961-742",
    email: "michal.lesny@best.pw.edu.pl",
    avatar: MICHAL,
  },
];

const OurTeam = (props?: OurTeamSection) => {
  const sectionTitle = props?.sectionTitle ?? DEFAULT_TITLE;
  const cmsMembers = props?.members?.filter((m) => m.avatar?.url) ?? [];
  const useCms = cmsMembers.length > 0;

  return (
    <section className="itp-business_section--our_team">
      <h2 className="itp-c-section_header itp-c-section_header--our_team">
        {sectionTitle}
      </h2>
      <div className="itp-c-team_container">
        {useCms
          ? cmsMembers.map((member, i) => (
              <PersonCard
                key={i}
                name={member.name}
                surname={member.surname}
                tel={member.tel}
                email={member.email}
                avatar={{
                  url: getBackendImageUrl(
                    member.avatar!.url.startsWith("http")
                      ? new URL(member.avatar!.url).pathname
                      : member.avatar!.url,
                    true
                  ),
                  alternativeText: member.avatar!.alternativeText,
                }}
              />
            ))
          : DEFAULT_MEMBERS.map((member, i) => (
              <PersonCard
                key={i}
                name={member.name}
                surname={member.surname}
                tel={member.tel}
                email={member.email}
                avatar={member.avatar}
              />
            ))}
      </div>
    </section>
  );
};

export default OurTeam;
