import { Series } from 'remotion';
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import Logo from './Natal/logo';
import { calmp } from './utils/Getframe';
import BirthDetail from './Natal/PersonalDetail';
import Datafetching from './Natal/datafetching';
import { Transition } from './Natal/Transition/SlideTransition';

export const NatalReport = () => {
  // const [data, setData] = useState(null);
  // const [handle] = useState(() => delayRender());

  // const ApiCall = useCallback(async () => {
  //   let data = {};
  //   const allApiCall = await Promise.all(apinames.map(async (item, i) => { return await FetchApi(item, userdetail) }))
  //   for (let i = 0; i < (allApiCall).length; i++) {
  //     data["data"][i] = allApiCall[i]
  //   }
  //   // const details = await FetchApi({apiName:"natal_chart_interpretation",userData:JSON.parse(userdata)});
  //   setData(data);

  //   continueRender(handle);
  // }, [handle]);

  // useEffect(() => {
  //   ApiCall();
  // }, [ApiCall]);

  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  // Fade out the animation at the end

  const scale = interpolate(frame, [0, 10, 40, 50], [8, 1, 1, 0], calmp);

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <div className='bg-white'>
      <Series>
        <Series.Sequence durationInFrames={70}>
          <Logo />
        </Series.Sequence>
        <Series.Sequence durationInFrames={70}>
          <Transition type="out">
            <BirthDetail />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={1360}>
          <Datafetching />
        </Series.Sequence>
      </Series>
    </div>
  );
};
