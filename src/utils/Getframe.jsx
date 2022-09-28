import { useCurrentFrame, useVideoConfig } from "remotion";


export const calmp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp'

}


export function GetFrameData() {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
  return { frame, fps, durationInFrames, width, height };
}


export function getSecondframe(second) {
  const { durationInFrames, fps } = GetFrameData();
  return durationInFrames / fps;
}