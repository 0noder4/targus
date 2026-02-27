import React, { ReactNode, useEffect, useState } from "react";

import styles from "./Map.module.scss";

const Map = ({
  stand,
  day,
  map,
}: {
  stand: string;
  day: 1 | 2;
  map: ReactNode;
}) => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!stand) return;

    const topLevelSelector = `.map_day_${day}`;

    if (activeGroup) {
      const oldGroupElement = document.querySelector(
        `${topLevelSelector} #${activeGroup}`,
      );
      if (oldGroupElement) {
        oldGroupElement.classList.remove(`active_day_${day}`);
      }
    }

    const newGroupElement = document.querySelector(
      `${topLevelSelector} #${stand}`,
    );
    if (newGroupElement) {
      newGroupElement.classList.add(`active_day_${day}`);
      setActiveGroup(stand);
    }
  }, [stand, day, activeGroup]);

  return (
    <div className={`${styles.container} ${styles[`day_${day}`]}`}>
      <div className={styles.label}>
        <label>Stoisko: {stand}</label>
        <label>dzień {day}</label>
      </div>
      <div className={styles.map}>{stand ? map : "brak stoiska"}</div>
    </div>
  );
};

export default Map;
