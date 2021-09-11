export const loadingIconVariant = {
	show: {
		scale: 0.5,
		x: [20, -20],
		rotate: 720,
		borderRadius: '100px',
		transition: {
			type: 'spring',
			stiffness: 60,
			damping: 90,
			x: {
				yoyo: Infinity,
			},
			rotate: {
				duration: 4,
			},
			borderRadius: {
				duration: 10,
			},
		},
	},
};
