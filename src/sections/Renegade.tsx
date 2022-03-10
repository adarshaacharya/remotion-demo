import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import renegade from '../assets/renegade-mark.svg';

interface RenegadeProps {
	banner: string;
	bgColor: string;
}

const Renegade: React.FC<RenegadeProps> = ({banner, bgColor}) => {
	const frame = useCurrentFrame();
	const config = useVideoConfig();

	const scale = spring({
		fps: config.fps,
		from: 0,
		to: 1,
		frame,
	});

	// [0, 20] -> in terms of time, start and end marker of animation,
	// [0,1] -> ouput range frame where we want animation to go from 0 to 1
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				background: bgColor,
			}}
		>
			<Img
				style={{
					height: '20%',
					width: '20%',
					transform: `scale(${scale})`,
				}}
				src={renegade}
			/>
			<p style={{opacity, fontSize: '3rem'}}>{banner}</p>
		</AbsoluteFill>
	);
};

export default Renegade;

/**
 * Absolute Fill
 * 
 * .absolute-fill {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
 */
