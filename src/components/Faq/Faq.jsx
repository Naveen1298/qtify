import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faq.module.css'

export default function Faq() {
  return (

    <div className={styles.Wrapper}>
        <h1 className={styles.faqTitle}>FAQs</h1>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
           Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Download and listen to songs offline is a premium feature where you can choose a subscription pack.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <br />
      
    </div>
  );
}