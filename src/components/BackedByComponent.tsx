import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const BackedByComponent = () => {
  return (
    <div className="h-flex-column backed-by-component">
      <div className="h-flex-row h-flex-row--space-between backed-by-component--title-row">
        <span className="sub-title">Backed by</span>
      </div>
      <div className="h-flex-row h-flex-row--space-between backed-by-component--logo-row">
        <StaticImage src={'../assets/logos/parafi.png'} alt={'parafi'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/fuse.png'} alt={'fuse'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/cumberland.png'} alt={'cumberland'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/mgnr.png'} alt={'mgnr'} className="backed-by-component--logo"/>
      </div>
      <div className="h-flex-row h-flex-row--space-between backed-by-component--logo-row">
        <StaticImage src={'../assets/logos/petrock.png'} alt={'petrock'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/brz.png'} alt={'brz'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/share.png'} alt={'share'} className="backed-by-component--logo"/>
        <StaticImage src={'../assets/logos/solana.png'} alt={'solana'} className="backed-by-component--logo"/>
      </div>
    </div>
  )
}
