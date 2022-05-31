import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../../../hooks/useComponentProps';

enum Quote {
    A55 = 'A55',
    TECREDI = 'TECREDI',
}

export const Quotes = ({ isMobile, isLightTheme }: IComponentProps) => {
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
    }, 5000)

    return () => clearInterval(interval)
  }, [quote])

  return (
    <div className="h-flex-column quotes-component">
      <div className="h-flex-row">
        <span className="quotes-component--title">Borrowers</span>
      </div>
      <div className={`quotes-component--quote-row ${!isMobile && quote === Quote.A55 && 'quotes-component--quote-row--first-visible' || !isMobile && quote === Quote.TECREDI && 'quotes-component--quote-row--second-visible'}`}>
        {
          (!isMobile || isMobile && quote === Quote.A55) && (
            <div className="quotes-component--card">
              <div className="quotes-component--text">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                            "It is exciting to use the new capital markets, leveraged by decentralized finance and blockchain technologies, to help the new economy entrepreneurs. A55 is impressed by Credit's vision and the
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                            already-created technology to rethink global capital markets."
              </div>
              <div className="quotes-component--text--cited-person">
                            Hugo Mathecowitsch - CEO A55
              </div>
              <span className="h-cursor-pointer">
                {
                  isLightTheme ? (<StaticImage className="quotes-component--background-shape quotes-component--background-shape--a55" src="../../../assets/logos/a55-dark.png" alt="a55 logo"/>
                  ) : (<StaticImage className="quotes-component--background-shape quotes-component--background-shape--a55" src="../../../assets/logos/a55-logo.png" alt="a55 logo"/>
                  )
                }
              </span>
            </div>
          )
        }
        {
          (!isMobile || isMobile && quote === Quote.TECREDI) && (
            <div className="quotes-component--card">
              <div className="quotes-component--text">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                          "Credix is a great partner of Tecredi. Their solutions are rewriting the debt venture capital market and creating new possibilities for the whole ecosystem."
              </div>
              <div className="quotes-component--text--cited-person">
                          Gustavo Pulga - CO CEO TECREDI
              </div>
              <span className="h-cursor-pointer">
                {
                  isLightTheme ? (<StaticImage className="quotes-component--background-shape quotes-component--background-shape--tecredi" src="../../../assets/logos/tecredi-dark.png" alt="tecredi logo"/>
                  ) : (<StaticImage className="quotes-component--background-shape quotes-component--background-shape--tecredi" src="../../../assets/logos/tecredi-logo.png" alt="tecredi logo"/>
                  )
                }
              </span>
            </div>
          )
        }
      </div>
      <>
        <div className="h-flex-row h-flex-row--justify-center h-margin-top--triple">
          <hr className="quotes-component--logo-row-mobile--divider h-cursor-pointer" style={{ opacity: quote === Quote.A55 ? 1 : 0.5 }} onClick={() => setQuote(Quote.A55)}/>
          <hr className="quotes-component--logo-row-mobile--divider h-cursor-pointer" style={{ opacity: quote === Quote.TECREDI ? 1 : 0.5 }} onClick={() => setQuote(Quote.TECREDI)}/>
        </div>
      </>
    </div>
  )
}
