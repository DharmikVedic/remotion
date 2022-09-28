import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';



export function BgTransition({ type, children, bgcolor, title }) {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();
  const springConfig = {
    damping: 100,
    mass: 1,
    stiffness: 100,
    overshootClamping: type === "in" ? false : true,
  };
  const firstFrame = videoConfig.durationInFrames - 4;
  const progress = spring({
    config: springConfig,
    from: type === 'in' ? 1.5 : 0,
    to: type === 'in' ? 0 : 1.5,
    fps: videoConfig.fps,
    frame: type === 'in' ? frame - 20 : Math.max(0, frame - firstFrame)
  });

  return (
    <div className="absolute bg-white flex justify-center items-center top-0 left-0 right-0 bottom-0 w-full h-full">
      <div
        className={`${bgcolor} absolute p-[1000px] flex justify-center items-center w-full h-full`}
        style={{
          transform: `scale(${type === 'in' ? progress : 0 - progress})`,
          borderRadius: "50%"
        }}
      >
        <h1 className='text-white absolute font-cera_bold text-center text-[100px]'>
          {title ? title : "Natal Chart Report"}
        </h1>
      </div>
      {children}
    </div>
  );
};
