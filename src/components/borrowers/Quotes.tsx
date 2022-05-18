import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { QuoteA55 } from './quotes/QuoteA55';
import { QuoteTecredi } from './quotes/QuoteTecredi';

export const Quotes = () => {
  const [quote, setQuote] = React.useState('a55');

  const handleClickQuote = (quote: string) => {
    console.log('cliecked')
    if (quote === 'a55') {
      setQuote('a55')
    }
    if (quote === 'tecredi') {
      setQuote('tecredi')
    }
  }

  return (
    <div className="h-flex-column quotes-component">
      <div className="h-flex-row">
        <span className="quotes-component--title">Borrowers</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between quotes-component--text-row">
        <div className="h-flex-column">
          <span onClick={() => handleClickQuote('a55')}><StaticImage className="quotes-component--background-shape-a55" src="../../assets/logos/a55-logo.png" alt="a55 logo"/></span>
          <span onClick={() => handleClickQuote('tecredi')}><StaticImage className="quotes-component--background-shape-tecredi" src="../../assets/logos/tecredi-logo.png" alt="tecredi logo"/></span>
          <StaticImage className="quotes-component--background-shape-t" src="../../assets/logos/t-logo.png" alt="t. logo"/>
        </div>
        {
          quote === 'a55' && <QuoteA55/>
        }
        {
          quote === 'tecredi' && <QuoteTecredi/>
        }
      </div>
    </div>
  )
}