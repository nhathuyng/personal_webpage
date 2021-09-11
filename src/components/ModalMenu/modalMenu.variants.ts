export const modalVariant = {
	hidden: {
		x: '100vw',
		opacity: '0',
	},

	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 0.8,
			damping: 100,
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	exit: {
		opacity: 0,
		x: '100vw',
		transition: {
			duration: 1,
		},
	},
};

export const modalChildVariant = {
	hidden: {
		opacity: 0,
	},

	show: {
		opacity: 1,
	},
};
