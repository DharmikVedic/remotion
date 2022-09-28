import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { NatalReport } from './NatalReport';
import "./style.css";
import "./main.css";
import LogoAnimation from './Logo';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="NatalReport"
				component={NatalReport}
				durationInFrames={1500}
				fps={30}
				width={1920}
				height={1250}
			/>
			<Composition
				id="Logo"
				component={LogoAnimation}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1250}
			/>
		</>
	);
};
