import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const QuoteA55 = () => (
  <>
    <StaticImage className="quotes-component--background-shape-quotation-start" src="../../assets/shapes/quotation-mark-start.png" alt="quotation mark"/>
    <div className="h-flex-column">
      <div className="quotes-component--right-text">
        It is exciting to use the new capital markets, leveraged by decentralized finance and blockchain technologies, to help the new economy entrepreneurs. A55 is impressed by Credit`&rsquo;`s vision and the
        already-created technology to rethink global capital markets.
      </div>
      <div className="quotes-component--right-text--cited-person">
        Hugo Mathecowitsch - CEO A55
      </div>
      <StaticImage className="quotes-component--background-shape-quotation-end" src="../../assets/shapes/quotation-mark-end.png" alt="quotation mark"/>
    </div>
  </>
)