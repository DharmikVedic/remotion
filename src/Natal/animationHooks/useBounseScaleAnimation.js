import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useAppearWithScaleAndBounce = (delay) => {
  const frame = useCurrentFrame();

  const { fps } = useVideoConfig();


  const bounceAnimation = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10.5, stiffness: 160, mass: 0.6 },
  });

  console.log(bounceAnimation)


  return { scaleValue: bounceAnimation };
};