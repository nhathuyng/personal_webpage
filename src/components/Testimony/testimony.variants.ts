export const testimonyVariant = {
	hidden: {
		x: '-200px',
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			damping: 20,
		},
	},
	exit: {
		x: '-200px',
		opacity: 0,
	},
};
