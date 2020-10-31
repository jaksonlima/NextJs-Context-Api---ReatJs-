import React from "react";

import { useContextProvider } from "../Context";

import styles from "../../../styles/Home.module.css";

function MirrorCounter() {
  const { value } = useContextProvider();
  const count = value?.count;

  return (
    <div className={styles.mirror}>
      <span>
        <b>Mirror Count: </b>
        {count}
      </span>
    </div>
  );
}

export default MirrorCounter;
