import React from "react";
import styles from "./show.module.css";
const Show = ({ title, desc, check, status }) => {
  return (
    <div className={styles.show}>
      <div style={check ? { backgroundColor: "#7c7b7ba1" } : null}>
        <div>
          <input onChange={(e) => e.target.checked} type="checkbox" checked={check ? true : false} />
          <div>
            <h2 className={check ? styles.line : styles.textt}>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div>
          <button className={status ? styles.green : styles.red} >{status ? "T" : "F"}</button>
          <button>X</button>
        </div>
      </div>
    </div>
  );
};

export default Show;