import React from 'react';

interface IProps {
  video: string
}

export const VideoComponent = ({ video }: IProps) => {
  return (
    <div className="h-flex-column home-component--video">
      <video controls={false} autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}
