import React from "react";

type Props = {
  className?: string;
};

import styles from "./Loading.module.scss";
import { FadeLoader } from "react-spinners";

const Loading = ({ className }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <FadeLoader color="#F55718" />
    </div>
  );
};

export default Loading;
