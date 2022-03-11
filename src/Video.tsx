import {Composition} from 'remotion';
import Renegade from './sections/Renegade';
import {Intro} from './sections/Intro';

export const RemotionVideo: React.FC = () => {
	return (
		<div>
			<Composition
				id="RenegadeOne"
				component={Renegade}
				width={2000}
				height={1000}
				durationInFrames={90}
				fps={30}
				defaultProps={{
					banner: 'Get the insurance experience you deserve',
					bgColor: 'skyblue',
				}}
			/>

			<Composition
				id="RenegadeTwo"
				component={Renegade}
				width={2000}
				height={1000}
				durationInFrames={90}
				fps={30}
				defaultProps={{
					banner: 'Time-Saving Technology With a Human Touch',
					bgColor: '#FEF2D1',
				}}
			/>

			<Composition
				id="Intro"
				component={Intro}
				width={1920}
				height={1080}
				durationInFrames={350}
				fps={30}
			/>
		</div>
	);
};

