import React from 'react';
import useStyles from './testimony.styles';
import { motion } from 'framer-motion';
import { testimonyVariant } from './testimony.variants';

interface TestimonyProps {
	content: string;
	jobDescription: string;
	name: string;
}

const Testimony: React.FC<TestimonyProps> = ({ content, jobDescription, name }) => {
	const classes = useStyles();
	return (
		<motion.div variants={testimonyVariant} className={classes.testimony}>
			<div className={classes.content}>{content}</div>
			<div className={classes.jobDescription}>
				{jobDescription.toUpperCase()}
				<span className={classes.name}>,{' ' + name}</span>
			</div>
		</motion.div>
	);
};

export default Testimony;
