import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IComponentProps } from '../../../hooks/useComponentProps';

export const Quotes = ({ isTablet, isLightTheme }: IComponentProps) => {
  const [index, setIndex] = useState<number>(0);
  const amountOfScroll = 1146
  const amountOfItems = 2

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index < amountOfItems - 1 ? index + 1 : 0)
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="h-flex-column quotes-component">
      <div className="h-flex-row">
        <span className="quotes-component--title">Borrowers</span>
      </div>
      <div
        className={'quotes-component--quote-row'}
        style={{ transform: `translateX(-${!isTablet && amountOfScroll * index}px)` }}
      >
        {
          (!isTablet || isTablet && index === 0) && (
            <div className="quotes-component--card h-cursor-pointer" onClick={() => setIndex(0)}>
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
          (!isTablet || isTablet && index === 1) && (
            <div className="quotes-component--card h-cursor-pointer" onClick={() => setIndex(1)}>
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
          <hr className="quotes-component--logo-row-mobile--divider h-cursor-pointer" style={{ opacity: index === 0 ? 1 : 0.5 }} onClick={() => setIndex(0)}/>
          <hr className="quotes-component--logo-row-mobile--divider h-cursor-pointer" style={{ opacity: index === 1 ? 1 : 0.5 }} onClick={() => setIndex(1)}/>
          {/* <hr className="quotes-component--logo-row-mobile--divider h-cursor-pointer" style={{ opacity: index === 2 ? 1 : 0.5 }} onClick={() => setIndex(2)}/> */}
        </div>
      </>
    </div>
  )
}
