import React from 'react'
import { Img, interpolate, useCurrentFrame } from 'remotion'
import Card2 from './signs/card2';

export default function CircleSvg({ chart_url }) {
  const frame = useCurrentFrame();

  const scale = interpolate(frame - 30, [0, 20], [0, 1.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className='flex relative w-full h-full items-center justify-center'>
      {chart_url &&
        <>
          <Card2 delay={40} color="text-amber-600" bg="bg-amber-100" position="top-10 left-10" />
          <Card2 delay={53} color="text-rose-600" bg="bg-rose-100" position="top-10 right-10" />
          <Card2 delay={63} color="text-blue-600" bg="bg-blue-100" position="bottom-10 left-10" />
          <Card2 delay={73} color="text-violet-600" bg="bg-violet-100" position="bottom-10 right-10" />
          <Img style={{ transform: `scale(${scale})` }} src={chart_url} alt="natal wheel chart" className="h-[500px] bg-white rounded-full" />
        </>
      }
    </div>
  )
}
