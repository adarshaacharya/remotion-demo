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

export default SoundVisualizer;
