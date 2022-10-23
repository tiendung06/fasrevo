import React from 'react';

const Video = () => {
  return (
    <section className='w-full max-h-screen max-w-[1920px] mx-auto my-20 bg-secondary_text'>
      <video
        autoPlay={true}
        width='250'
        loop
        muted
        className='w-full max-h-screen object-cover'
      >
        <source src='/video/video.mp4' type='video/mp4' />
      </video>
    </section>
  );
};

export default Video;
