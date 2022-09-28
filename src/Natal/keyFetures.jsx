import React from 'react'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'
import { ElementPhase } from './phases/element';
import { HemiPhase } from './phases/hemispere';
import { ModesPhase } from './phases/modes';

import { MoonPhase } from './phases/moon';

export default function KeyFetures({ data, chart_url, type }) {
  switch (type) {
    case "moon":
      return (
        <MoonPhase data={data} chart_url={chart_url} />
      );
    case "element":
      return (
        <ElementPhase data={data} />
      );
    case "hemisphere":
      return (
        <HemiPhase type="hemisphere1" data={data} chart_url={chart_url} />
      );
    case "hemisphere2":
      return (
        <HemiPhase type="hemisphere2" data={data} chart_url={chart_url} />
      );
    case "modes":
      return (
        <ModesPhase data={data} />
      );
    default:
      return false;
  }
}













export const BouncyText = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const springConfig = {
    damping: 10,
    mass: 0.1,
    stiffness: 100,
    overshootClamping: false,
  };

  return (
    <>
      {text.split(" ").map((word, i) => {
        const bouncy = interpolate(frame - (i * 0.3) - delay, [0, 5, 10], [-10, 10, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp"
        });
        const opacity = interpolate(frame - (i * 0.3) - delay, [0, 10], [0, 1]);
        return (
          <span style={{
            transform: `translateY(${bouncy}px)`,
            opacity: opacity
          }} key={i} className="text-[50px]">
            {word}
          </span>
        )
      })}
    </>
  )
}



export function KeyTitle() {
  return (
    <div class="w-full h-full flex justify-center items-center bg-gradient-to-t from-sky-400 to-teal-400">
      <h1 className='text-white font-cera_bold text-[150px]'>
        Your Key Features
      </h1>
    </div>
  )
}