import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export function Title({ children, delay }) {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();


	const springConfig = {
		damping: 10,
		mass: 0.1,
		stiffness: 100,
		overshootClamping: false,
	};

	const firstWord = spring({
		config: springConfig,
		from: 0,
		to: 1,
		fps,
		frame: frame - delay,
	});
	const translate = interpolate(frame, [0, 1], [-10, 0]);

	return (
		<div
			style={{
				display: 'inline-block',
				opacity: firstWord,
				transform: `translatY(${translate})`,
			}}
		>
			{children}
		</div>
	);
};
