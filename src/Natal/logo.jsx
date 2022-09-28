import React from 'react'
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

const logo = staticFile("white_logo.png")

export default function Logo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig()
  const scale = interpolate(frame, [0, 5, 62, 70], [10, 1, 1, 15]);

  const opacity = spring({
    frame: frame + 1, fps, from: 0,
    to: 1, config: { damping: 100 }
  })

  return (
    <div className="bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 h-full w-full flex items-center justify-center">
      <div style={{ opacity: opacity, transform: `scale(${scale})` }} className="flex flex-col items-center gap-[100px]">
        <Img src={logo} className="h-[200px]" />
      </div>
    </div>
  )
}
