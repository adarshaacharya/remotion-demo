import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import React from 'react';
import {
	AbsoluteFill,
	Audio,
	interpolate,
	Sequence,
	Series,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import intro from '../assets/bass.wav';

import Renegade from './Renegade';
import * as styles from './styles';

export const Intro = () => {
	const frame = useCurrentFrame();

	const config = useVideoConfig();
	const audioData = useAudioData(intro);

	const generateOpacity = (startFrame: number, endFrame: number) => {
		const opacity = interpolate(frame, [startFrame, endFrame], [0, 1], {
			extrapolateRight: 'clamp',
		});

		return opacity;
	};

	const scale = spring({
		fps: config.fps,
		from: 0,
		to: 1,
		frame: frame - 210,
		config: {
			stiffness: 300,
		},
	});

	if (!audioData) {
		return null;
	}

	const visualization = visualizeAudio({
		fps: config.fps,
		frame,
		audioData,
		numberOfSamples: 16,
	}); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	return (
		<AbsoluteFill style={styles.introContainer}>
			<Audio src={intro} />
			<Series>
				<Series.Sequence durationInFrames={70}>
					<AbsoluteFill
						style={{...styles.flexCenter, opacity: generateOpacity(0, 70)}}
					>
						Hello Everyone 👋
					</AbsoluteFill>
				</Series.Sequence>

				<Series.Sequence durationInFrames={70}>
					<AbsoluteFill style={{...styles.flexCenter}}>
						Welcome to
						<Sequence from={30}>
							<AbsoluteFill
								style={{
									...styles.flexCenter,
									marginTop: 670,
									height: 200,
									backgroundColor: '#02FCFA',
									textShadow: styles.extrude(generateOpacity(70, 140) * 15),
									transform: 'rotate(-4deg)',
								}}
							>
								FrontEnd Talks
							</AbsoluteFill>
						</Sequence>
					</AbsoluteFill>
				</Series.Sequence>

				<Series.Sequence durationInFrames={70}>
					<AbsoluteFill
						style={{...styles.flexCenter, opacity: generateOpacity(140, 210)}}
					>
						Today we are going to learn about
					</AbsoluteFill>
				</Series.Sequence>

				<Series.Sequence durationInFrames={70}>
					<AbsoluteFill
						style={{
							...styles.flexCenter,
						}}
					>
						<div
							style={{
								transform: `scale(${scale})`,
								textShadow: styles.extrude(generateOpacity(210, 280) * 15),
							}}
						>
							REMOTION
						</div>
						<p
							style={{
								fontSize: '3rem',
								opacity: generateOpacity(210, 280),
							}}
						>
							Generate Video Programmatically in React
						</p>
					</AbsoluteFill>
				</Series.Sequence>

				<Series.Sequence durationInFrames={70}>
					<AbsoluteFill style={styles.flexCenter}>
						<Renegade
							banner="Get the insurance experience you deserve"
							bgColor="white"
						/>
					</AbsoluteFill>
				</Series.Sequence>
			</Series>
			<SoundVisualizer visualization={visualization} />
		</AbsoluteFill>
	);
};

interface SoundVisualizerProps {
	visualization: number[];
}
const SoundVisualizer: React.FC<SoundVisualizerProps> = ({visualization}) => {
	return (
		<>
			{visualization.map((viz) => (
				<div
					style={{
						width: 1000 * viz,
						height: 30,
						backgroundColor: '#ADD8E6',
					}}
				/>
			))}
		</>
	);
};
