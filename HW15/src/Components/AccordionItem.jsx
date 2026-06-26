import React from "react"
import styles from "./AccordionItem.module.css"

export default function AccordionItem({handleClick,activeAccordionNumber,randomNum,title,desc,}) {
  const isOpen = activeAccordionNumber === randomNum;

  return (
    <div className={styles.item}>
      <div className={styles.header} onClick={() => handleClick(randomNum)}>
        <h2 className={`${styles.title} ${isOpen ? styles.active : ""}`}>
          {title}
        </h2>

        <span className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}>
          ⌵
        </span>
      </div>

      <div className={`${styles.descWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.descInner}>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
}