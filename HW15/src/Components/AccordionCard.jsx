import React, { useState } from "react"
import styles from "./AccordionCard.module.css"
import AccordionItem from "./AccordionItem"
import { items } from "../Items"
import Logo from "../assets/Logo.png"
import Background from "../assets/Group2.svg"
import Shadow from "../assets/Shadow.svg"


export default function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(2)

  function handleClick(accordionNumber) {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber)
    }
  }

  return (

    <main className={styles.AccordionCard}>
      
             
      <div className={styles.Image}>
        <img src={Background} alt="background" className={styles.bg} />
        <img src={Logo} alt="main" className={styles.mainImg} />
        <img src={Shadow} alt="shadow" className={styles.shadow} />
      </div>


      <div className={styles.AccordionText}>
         <h1>FAQ</h1>
        {items.map((el) => (
          <AccordionItem
            key={el.randomNum}
            handleClick={handleClick}
            title={el.question}
            desc={el.answer}
            activeAccordionNumber={activeAccordionNumber}
            randomNum={el.randomNum}
          />
        ))}
      </div>

    </main>
  );
}