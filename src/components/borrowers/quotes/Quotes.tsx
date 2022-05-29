import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../../../hooks/useComponentProps';

enum Quote {
    A55 = 'A55',
    TECREDI = 'TECREDI',
}

export const Quotes = ({ isMobile }: IComponentProps) => {
  const [quote, setQuote] = React.useState(Quote.A55);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (quote) {
      case Quote.A55:
        setQuote(Quote.TECREDI);
        break;
      case Quote.TECREDI:
        setQuote(Quote.A55);
        break;
      default:
        setQuote(Quote.A55);
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [quote])

  return (
    <div className="h-flex-column quotes-component">
      <div className="h-flex-row">
        <span className="quotes-component--title">Borrowers</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between quotes-component--text-row">
        {
          !isMobile &&
          <div className="h-flex-column">
            <span className="h-cursor-pointer" onClick={() => setQuote(Quote.A55)} style={{ opacity: quote === Quote.A55 ? 1 : 0.5 }}>
              <StaticImage className="quotes-component--background-shape-a55" src="../../../assets/logos/a55-logo.png" alt="a55 logo"/>
            </span>
            <span className="h-cursor-pointer" onClick={() => setQuote(Quote.TECREDI)} style={{ opacity: quote === Quote.TECREDI ? 1 : 0.5 }}>
              <StaticImage className="quotes-component--background-shape-tecredi" src="../../../assets/logos/tecredi-logo.png" alt="tecredi logo"/>
            </span>
          </div>
        }
        <div className="h-flex-row">
          <div className="h-flex-column quotes-component--background-shape-quotation-column">
            <StaticImage src="../../../assets/shapes/quotation-mark-start.png" alt="quotation mark"/>
          </div>
          <div className="h-flex-column quotes-component--quote-text">
            {
              quote === Quote.A55 &&
                <>
                  <div className="quotes-component--right-text">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It is exciting to use the new capital markets, leveraged by decentralized finance and blockchain technologies, to help the new economy entrepreneurs. A55 is impressed by Credit's vision and the
                    already-created technology to rethink global capital markets.
                  </div>
                  <div className="quotes-component--right-text--cited-person">
                    Hugo Mathecowitsch - CEO A55
                  </div>
                </>
            }
            {
              quote === Quote.TECREDI &&
                <>
                  <div className="quotes-component--right-text">
                    Credix is a great partner of Tecredi. Their solutions are rewriting the debt venture capital market and creating new possibilities for the whole ecosystem.
                  </div>
                  <div className="quotes-component--right-text--cited-person">
                    Gustavo Pulga CO - CEO TECREDI
                  </div>
                </>
            }
          </div>
          <div className="h-flex-column quotes-component--background-shape-quotation-column">
            <StaticImage src="../../../assets/shapes/quotation-mark-end.png" alt="quotation mark" style={{ marginTop: 'auto' }}/>
          </div>
        </div>
        {
          isMobile &&
            <>
              <div className="h-flex-row quotes-component--logo-row-mobile">
                <span className="h-cursor-pointer" onClick={() => setQuote(Quote.A55)} style={{ opacity: quote === Quote.A55 ? 1 : 0.5 }}>
                  <StaticImage className="quotes-component--background-shape-a55" src="../../../assets/logos/a55-logo.png" alt="a55 logo"/>
                </span>
                <span className="h-cursor-pointer" onClick={() => setQuote(Quote.TECREDI)} style={{ opacity: quote === Quote.TECREDI ? 1 : 0.5 }}>
                  <StaticImage className="quotes-component--background-shape-tecredi" src="../../../assets/logos/tecredi-logo.png" alt="tecredi logo"/>
                </span>
              </div>
              <div className="h-flex-row h-flex-row--justify-center h-margin-top--double">
                <hr className="quotes-component--logo-row-mobile--divider" style={{ opacity: quote === Quote.A55 ? 1 : 0.5 }}/>
                <hr className="quotes-component--logo-row-mobile--divider" style={{ opacity: quote === Quote.TECREDI ? 1 : 0.5 }}/>
              </div>
            </>


        }
      </div>
    </div>
  )
}
