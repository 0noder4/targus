import React from "react";

import "./Aside.scss";

const DEFAULT_LETTERS = [
  "3", "2", ".", "i", "n", "ż", "y", "n", "i", "e", "r", "s", "-",
  "k", "i", "e", "t", "a", "r", "g", "i", "p", "r", "a", "c", "y",
];

interface AsideProps {
  letters?: string[];
}

function Aside({ letters }: AsideProps) {
  const chars = letters?.length ? letters : DEFAULT_LETTERS;

  return (
    <aside className="itp-business_section__aside">
      {chars.map((char, i) => (
        <div key={i} className="itp-business_section__aside__letter">
          {char}
        </div>
      ))}
    </aside>
  );
}

export default Aside;
