import React from 'react'
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const springConfig = {
  damping: 10,
  mass: 0.4,
  stiffness: 100,
  overshootClamping: false,
};


export default function BirthDetail() {
  const data = ["Dharmik Rathod", "May 3, 2000 at 04:04 AM", " New York, New York,United States"];

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // const headingOpacity = interpolate(frame, [0, 5, 15], [0, 1, -100]);

  return (
    <div className='bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 h-full w-full flex flex-col pb-[80px] -col items-center justify-around'>
      <div className='flex  w-full items-center justify-center h-full'>
        <h1 className=" font-cera_medium  text-center text-[120px] text-white">
          Bitrh Detail
        </h1>
      </div>
      <div className="flex  h-full w-full p-[100px] flex-col gap-3 items-center justify-center">
        {data.map((item, i) => (
          <Text key={i} color="text-zinc-100" delay={(i + 1) * 5} frame={frame} fps={fps} text={item} size="70px" />
        ))}
      </div>
    </div>
  )
}



export function Text({ text, frame, fps, delay, size, color }) {
  const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame: frame - delay,
    config: springConfig
  });



  return (
    <span className={`${color} font-cera_regular`} style={{
      fontSize: size,
      transform: `scale(${scale})`
    }}>
      {text}
    </span>
  )
}