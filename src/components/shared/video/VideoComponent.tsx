import React from 'react';

interface IProps {
  video: string
}

export const VideoComponent = ({ video }: IProps) => {
  return (
    <div className="gradient">
      <video controls={false} autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}
