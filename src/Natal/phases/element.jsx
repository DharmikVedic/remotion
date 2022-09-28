import { moonPhase } from '../../utils/moonphase'
import { Lottie } from "@remotion/lottie";
import animationData from "../../../public/arrow.json";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { BouncyText } from '../keyFetures';

export function ElementPhase({ data }) {
  // const moon = staticFile(`${moonPhase[data?.moon_phase_id]}.png`);
  return (
    <div className='w-full flex flex-col gap-[100px] items-center justify-center bg-white px-[100px] h-full'>
      <h1 className='text-[100px] font-cera_bold text-zinc-800'>
        Your Nature Element
      </h1>
      <div className='grid w-[90%]  grid-cols-4 gap-12 items-center'>
        <NumberCard delay={5} number={data?.elements[0].percentage} text="Fire" bg="bg-gradient-to-tl from-yellow-400 to-orange-400" />
        <NumberCard delay={2 * 5} number={data?.elements[3].percentage} text="Water" bg="bg-gradient-to-tl from-sky-400 to-indigo-400" />
        <NumberCard delay={3 * 5} number={data?.elements[1].percentage} text="Earth" bg="bg-gradient-to-tl from-lime-400 to-emerald-400" />
        <NumberCard delay={4 * 5} number={data?.elements[2].percentage} text="Air" bg="bg-gradient-to-tl from-purple-400 to-violet-400" />
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


export function NumberCard({ bg, text, number, delay }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const springConfig = {
    damping: 10,
    mass: 0.8,
    stiffness: 100,
    overshootClamping: false,
  };
  const scale = spring({
    frame: frame - 5 - delay,
    fps,
    from: 0,
    to: 1, config: springConfig
  })
  return (
    <div style={{ transform: `scale(${scale})` }} className={`${bg} text-white text-center font-cera_medium p-10 rounded-[40px] w-full h-full flex flex-col ietms-center justify-center`}>
      <h2 className="text-[70px] font-cera_regular">
        {text}
      </h2>
      <span className='text-[70px]'>
        {number}
      </span>
    </div>
  )
}


