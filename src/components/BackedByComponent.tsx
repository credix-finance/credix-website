import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { IWidthProps } from '../pages';

export const BackedByComponent = ({ isMobile }: IWidthProps) => {
  return (
    <div className="h-flex-column backed-by-component">
      <div className="h-flex-row h-flex-row--space-between backed-by-component--title-row">
        <span className="sub-title">Backed by</span>
      </div>
      {
        !isMobile ?
          <>
            <div className="h-flex-row h-flex-row--space-between backed-by-component--logo-row">
              <StaticImage src={'../assets/logos/cumberland.png'} alt={'cumberland'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/parafi.png'} alt={'parafi'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/fuse.png'} alt={'fuse'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/mgnr.png'} alt={'mgnr'} className="backed-by-component--logo"/>
            </div>
            <div className="h-flex-row h-flex-row--space-between backed-by-component--logo-row">
              <StaticImage src={'../assets/logos/petrock.png'} alt={'petrock'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/brz.png'} alt={'brz'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/share.png'} alt={'share'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/solana.png'} alt={'solana'} className="backed-by-component--logo--solana"/>
            </div>
          </>
          :
          <>
            <div className="h-flex-row h-flex-row--space-around backed-by-component--logo-row">
              <StaticImage src={'../assets/logos/cumberland.png'} alt={'cumberland'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/parafi.png'} alt={'parafi'} className="backed-by-component--logo--parafi"/>
              <StaticImage src={'../assets/logos/mgnr.png'} alt={'mgnr'} className="backed-by-component--logo"/>
            </div>
            <div className="h-flex-row h-flex-row--space-around backed-by-component--logo-row">
              <StaticImage src={'../assets/logos/fuse.png'} alt={'fuse'} className="backed-by-component--logo--fuse"/>
              <StaticImage src={'../assets/logos/share.png'} alt={'share'} className="backed-by-component--logo"/>
              <StaticImage src={'../assets/logos/brz.png'} alt={'brz'} className="backed-by-component--logo--brz"/>
            </div>
            <div className="h-flex-row h-flex-row--space-around backed-by-component--logo-row">
              <StaticImage src={'../assets/logos/solana.png'} alt={'solana'} className="backed-by-component--logo--solana"/>
              <StaticImage src={'../assets/logos/petrock.png'} alt={'petrock'} className="backed-by-component--logo"/>
            </div>
          </>

      }


    </div>
  )
}
