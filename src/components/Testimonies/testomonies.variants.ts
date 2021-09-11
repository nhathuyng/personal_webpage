export const openVariant = {
	hover: {
		x: '10px',
		transition: {
			duration: 0.6,
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
};

export const testimoniesVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};
