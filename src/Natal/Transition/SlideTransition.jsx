import React from 'react';
import { spring, SpringConfig, useCurrentFrame, useVideoConfig } from 'remotion';

export function Transition({ type, children }) {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const springConfig = {
		damping: 10,
		mass: .5,
		stiffness: 100,
		overshootClamping: true,
	};
	const firstFrame = videoConfig.durationInFrames - 4;
	const progress = spring({
		config: springConfig,
		from: type === 'in' ? 60 : 0,
		to: type === 'in' ? 0 : 60,
		fps: videoConfig.fps,
		frame: type === 'in' ? frame : Math.max(0, frame - firstFrame),
	});



	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: "100 %",
				height: "100 %",
				transform: `translateX(${type === 'in' ? progress : 0 - progress}%)`,
			}}
		>
			{children}
		</div>
	);
};
