import React, { useState } from 'react';
import useStyles from './testimonies.styles';
import { openVariant, testimoniesVariant } from './testomonies.variants';
import { comments } from '../../constants/comments';
import Testimony from '../Testimony/Testimony';
import Typography from '@material-ui/core/Typography';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimoniesProps {}

const Testimonies: React.FC<TestimoniesProps> = ({}) => {
	const classes = useStyles();

	const [showTestimonies, setShowTestimonies] = useState(false);

	return (
		<div className={classes.testimoniesWrapper}>
			<div className={classes.titleWrapper}>
				<div className={classes.sectionTitle}>
					<Typography variant='h4' color='initial' noWrap={true}>
						peoples opinion<span className={classes.testDot}>.</span>
					</Typography>
				</div>
				<motion.img
					variants={openVariant}
					whileHover='hover'
					onClick={() => setShowTestimonies(!showTestimonies)}
					className={classes.arrowIcon}
					src='/arrow.svg'
					alt=''
					animate={{
						rotate: showTestimonies ? 180 : 0,
					}}
				/>
			</div>
			<AnimatePresence>
				{showTestimonies && (
					<motion.div variants={testimoniesVariant} initial='hidden' animate='show' exit='exit' className={classes.testimonies}>
						{comments.map(({ content, jobDescription, fullName }) => {
							return <Testimony content={content} jobDescription={jobDescription} name={fullName} />;
						})}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Testimonies;
