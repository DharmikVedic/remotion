import React from 'react'
import { Lottie } from "@remotion/lottie";
import animationData from "../../../public/arrow.json";
import { Sign } from '../../utils/zodiac-sign-font';
import { getDMS } from '../../utils/getdms';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
export default function Card2({ position, color, bg, delay }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig()

  const springConfig = {
    damping: 10,
    mass: 0.1,
    stiffness: 100,
    overshootClamping: false,
  };
  const scale = spring({
    frame: frame - 30 - delay, fps, from: 0,
    to: 1,
    config: springConfig
  })

  return (
    <div
      style={{ transform: `scale(${scale})` }}
      className={`flex ${position} flex-col justify-between p-7 font-cera_regular text-[45px] rounded-2xl absolute w-[530px] h-[310px] ${bg}`}>
      <p>
        Ascendant in Pisces
      </p>
      <div className={`flex items-center gap-5 justify-center`}>
        <Sign color={color} size="text-[90px]" name={'ascendant'} />
        <span className={color}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </span>
        <Sign color={color} size="text-[90px]" name={"pisces"} />
      </div>
      <p className='text-right font-cera_medium'>
        {getDMS(5.5772)}
      </p>
    </div>
  )
}





export function MyAnimation() {
  return <Lottie className='w-[170px] bg-red-100' animationData={animationData} />;
};
