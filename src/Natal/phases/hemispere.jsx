import { hemisphere2, hemisphere1 } from '../../utils/moonphase'
import { Lottie } from "@remotion/lottie";
import animationData from "../../../public/arrow.json";
import { Img, staticFile } from 'remotion';
import { BouncyText } from '../keyFetures';

export function HemiPhase({ data, chart_url, type }) {
  let img;
  if (type === "hemisphere1") {
    img = staticFile(`${hemisphere1[data?.id]}.png`);
  }
  else if (type === "hemisphere2") {
    img = staticFile(`${hemisphere2[data?.id]}.png`);
  }

  return (
    <div className='w-full bg-white h-full'>
      {chart_url &&
        <>
          <div className='py-[50px] justify-around items-center flex w-full'>
            <Img src={chart_url} className="w-[650px]" />
            <Lottie className='w-[450px]' animationData={animationData} />
            <Img src={img} className="h-[400px]" />
          </div>
          <div className='mt-5'>
            <div className='flex font-cera_regular max-w-[80%] text-[40px] mx-auto gap-5 flex-col'>
              <p className='flex flex-wrap text-left w-full gap-x-3'>
                <BouncyText delay={10} text={data?.description} />
              </p>
            </div>
          </div>
        </>
      }
    </div>
  )
}
