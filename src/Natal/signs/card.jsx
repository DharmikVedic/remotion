import React from 'react'
import { spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { Title } from '../../Title'
import { colorPlanet, getDMS } from '../../utils/getdms'
import { Sign } from '../../utils/zodiac-sign-font'

export default function Card({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <Title key={i} delay={(i * 5) + 5}>
          <div className={`${colorPlanet[i]} inline-block w-full h-[90px] flex items-center justify-center flex-col  p-12 max-w-max rounded-full`}>
            <p className="flex gap-x-4  text-[40px] items-center flex-wrap">
              <Sign name={item.name} />
              {item.name} in {getDMS(item.norm_degree)}
              <span className="flex gap-x-2 items-center">
                <Sign name={item.sign} />
                {item.sign} {item.is_retro === true ? "(R)" : ""}
              </span>
            </p>
          </div>
        </Title>
      ))}
    </>
  )
}
