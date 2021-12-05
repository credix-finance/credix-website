import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQComponent = () => {
  return (
    <div className="h-flex-column faq-component">
      <div className="h-flex-row faq-component--row--title">
        <span className="sub-title">All your questions</span>
      </div>
      <div className="h-flex-row faq-component--row--accordion">
        <div className="h-flex-column">
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                Investors and Underwriters
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                Borrowers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Credix works with non-bank financial institutions and lenders in emerging countries to distribute the capital to their end-clients. The borrowers draw down stable coins from our automated smart contract driven credit facilities and convert this into their local currency (fiat).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                What is a reserve pool?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                How do Deals work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                How do repayments work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                Matchmaking & liquidity
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="faq-component--accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="faq-component--accordion--icon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="faq-component--accordion--title">
                Tokens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="faq-component--accordion--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
