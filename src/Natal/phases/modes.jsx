import { moonPhase } from '../../utils/moonphase'
import { Lottie } from "@remotion/lottie";
import animationData from "../../../public/arrow.json";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { BouncyText } from '../keyFetures';
import { NumberCard } from './element';

export function ModesPhase({ data }) {
  // const moon = staticFile(`${moonPhase[data?.moon_phase_id]}.png`);
  return (
    <div className='w-full flex flex-col gap-[100px] items-center justify-center bg-white px-[100px] h-full'>
      <h1 className='text-[100px] font-cera_bold text-zinc-800'>
        Your Modes Details
      </h1>
      <div className='grid w-[90%]  grid-cols-3 gap-12 items-center'>
        <NumberCard delay={10} number={data?.modes[0].percentage} text="Cardinal" bg="bg-gradient-to-tl from-yellow-400 to-orange-400" />
        <NumberCard delay={2 * 10} number={data?.modes[1].percentage} text="Fixed" bg="bg-gradient-to-tl from-sky-400 to-indigo-400" />
        <NumberCard delay={3 * 10} number={data?.modes[2].percentage} text="Mutable" bg="bg-gradient-to-tl from-lime-400 to-emerald-400" />
      </div>
      <div className='mt-5'>
        <div className='flex font-cera_regular max-w-[90%] text-[40px] mx-auto gap-5 flex-col'>
          <p className='flex flex-wrap text-left w-full gap-x-3'>
            <BouncyText delay={20} text={data?.description} />
          </p>
        </div>
      </div>

    </div>
  )
}



