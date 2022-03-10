export const introContainer = {
	fontFamily: 'Poppins',
	fontWeight: 600,
	fontSize: '10em',
	backgroundColor: 'white',
	color: '#072551',
};

export const flexCenter = {
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center' as const,
};

export function extrude(depth: number) {
	let shadow = '';

	/**
	 * Start the loop at 1 offset, we don't need to draw a shadow that is
	 * completely obscured by the text itself.
	 */
	for (let i = 1; i <= depth; i++) {
		const lightness = 50 - i * 1.5;
		shadow += `${i}px ${i}px hsl(200, 80%, ${lightness}%), `;
	}

	/**
	 * Remove the final ", " from the string to ensure it's valid CSS shadow
	 */
	return shadow.slice(0, -2);
}
