import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IWidthProps } from '../pages';

export const BackedByComponent = () => {
  return (
    <div className="h-flex-column backed-by-component">
      <div className="h-flex-row h-flex-row--space-between backed-by-component--title-row">
        <span className="sub-title">Backed by</span>
      </div>
      {        
        <div className="h-flex-row h-flex-row--space-between backed-by-component--logo-row">
          <a href="https://www.cumberland.io/" target="_blank">
            <StaticImage src={'../assets/logos/cumberland-logo.png'} alt={'cumberland'} className="backed-by-component--logo"/>
          </a>
          <a href="https://www.parafi.capital/" target="_blank">
            <StaticImage src={'../assets/logos/parafi.png'} alt={'parafi'} className="backed-by-component--logo"/>
          </a>
          <a href="https://solana.ventures/" target="_blank">
            <StaticImage src={'../assets/logos/solana_ventures.png'} alt={'solana_ventures'} className="backed-by-component--logo"/>
          </a>
          <a href="https://www.transferoswiss.ch/" target="_blank">
            <StaticImage src={'../assets/logos/transfero.png'} alt={'transfero'} className="backed-by-component--logo"/>
          </a>
          <a href="https://mgnr.io/" target="_blank">
            <StaticImage src={'../assets/logos/mgnr.png'} alt={'mgnr'} className="backed-by-component--logo"/>
          </a>
          <a href="http://www.fuse.capital/" target="_blank">
            <StaticImage src={'../assets/logos/fuse.png'} alt={'fuse'} className="backed-by-component--logo"/>
          </a>
          <a href="https://www.petrock.capital/" target="_blank">
            <StaticImage src={'../assets/logos/petrock_capital.png'} alt={'petrock'} className="backed-by-component--logo"/>
          </a>
          <a href="https://parrot.fi/" target="_blank">
            <StaticImage src={'../assets/logos/parrot_finance.png'} alt={'parrot_finance'} className="backed-by-component--logo"/>
          </a>
          <a href="https://mercurial.finance/" target="_blank">
            <StaticImage src={'../assets/logos/mercurial_finance.png'} alt={'mercurial_finance'} className="backed-by-component--logo"/>
          </a>
        </div>
      }
    </div>
  )
}
