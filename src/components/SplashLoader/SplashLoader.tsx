import React, { useState, useEffect } from 'react';
import useStyles from './splashloader.styles';
import Typography from '@material-ui/core/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { loadingIconVariant } from './splashloader.variants';

interface SplashLoaderProps {
	children: any;
}

const SplashLoader: React.FC<SplashLoaderProps> = ({ children }) => {
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

	return !loading ? (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1.2, type: 'tween' }}>
			{children}
		</motion.div>
	) : (
		<AnimatePresence>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={classes.loader}>
				<Typography variant='h2' color='initial'>
					Bienvenido.
				</Typography>
				<motion.div animate='show' variants={loadingIconVariant} className={classes.loadingIcon}></motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SplashLoader;
