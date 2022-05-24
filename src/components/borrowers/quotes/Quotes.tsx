import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { QuoteA55 } from './QuoteA55';
import { QuoteTecredi } from './QuoteTecredi';

enum Quote {
    A55 = 'A55',
    TECREDI = 'TECREDI',
}

export const Quotes = () => {
  const [quote, setQuote] = React.useState('a55');

  return (
    <div className="h-flex-column quotes-component">
      <div className="h-flex-row">
        <span className="quotes-component--title">Borrowers</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between quotes-component--text-row">
        <div className="h-flex-column">
          <span className="h-cursor-pointer" onClick={() => setQuote(Quote.A55)}><StaticImage className="quotes-component--background-shape-a55" src="../../assets/logos/a55-logo.png" alt="a55 logo"/></span>
          <span className="h-cursor-pointer" onClick={() => setQuote(Quote.TECREDI)}><StaticImage className="quotes-component--background-shape-tecredi" src="../../assets/logos/tecredi-logo.png" alt="tecredi logo"/></span>
        </div>
        {
          quote === Quote.A55 && <QuoteA55/>
        }
        {
          quote === Quote.TECREDI && <QuoteTecredi/>
        }
      </div>
    </div>
  )
}