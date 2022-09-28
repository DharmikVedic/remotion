import { Img, interpolate, spring, staticFile, useCurrentFrame } from "remotion";
import { Text } from "./PersonalDetail";
import { GetFrameData } from "../utils/Getframe";

const moon = staticFile("wan_crescent.png");


export default function MoonTransit({ currentframe }) {
  const { fps } = GetFrameData();
  const frame = useCurrentFrame();


  const data = ["You were born under a Balsamic Moon.", "You have a natural ability to boil down ideas into their most precise form. Ahead of your time in some regard, you most likely find it frustrating to deal with systems that make no sense. "]

  // const progress =
  //   spring({
  //     fps,
  //     frame,
  //     config: {
  //       damping: 200,
  //     },
  //   });
  // const scale = interpolate(progress, [0, 1], [1, 0.9]);


  const pageTransition = interpolate(currentframe, [currentframe, currentframe + 40], [0.8, 1]);

  console.log(pageTransition)
  return (
    <div style={{ transform: `scale(${pageTransition})` }} className="flex absolute h-full items-center  w-full bg-[#74b9ff] gap-10 justify-around p-[100px] ">
      {/* <Img style={{ transform: `scale(${imagetransition})` }} src={moon} className="w-[200px]" />
      <div className="flex  h-full w-full p-[100px] flex-col gap-3 items-center justify-center">
        {data.map((item, i) => (
          <Text key={i} delay={i * 4} frame={frame} fps={fps} text={item} size="50px" />
        ))}
      </div> */}
    </div>
  )
}