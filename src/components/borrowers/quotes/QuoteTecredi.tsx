import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const QuoteTecredi = () => (
  <>
    <StaticImage className="quotes-component--background-shape-quotation-start" src="../../assets/shapes/quotation-mark-start.png" alt="quotation mark"/>
    <div className="h-flex-column">
      <div className="quotes-component--right-text">
          Credix is a great partner of Tecredi. Their solutions are rewriting the debt venture capital market and creating new possibilities for the whole ecosystem
      </div>
      <div className="quotes-component--right-text--cited-person">
          Gustavo Pulga CO - CEO TECREDI
      </div>
      <StaticImage className="quotes-component--background-shape-quotation-end" src="../../assets/shapes/quotation-mark-end.png" alt="quotation mark"/>
    </div>
  </>
)