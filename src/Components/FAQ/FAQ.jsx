import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactComponent as ExpandIcon } from "../../assets/expand-icon.svg";
import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <p className={styles.brand}>FAQs</p>
      <div className={styles["FAQs-section"]}>
        <Accordion className={styles.FAQs}>
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Is QTify free to use?</p>
          </AccordionSummary>
          <AccordionDetails className={styles.answer}>
            <p>Yes! It is 100% free, and has 0% ads!</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.FAQs}>
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p>Can I download and listen to songs offline?</p>
          </AccordionSummary>
          <AccordionDetails className={styles.answer}>
            <p>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
