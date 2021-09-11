import React from 'react';
import {} from '@material-ui/core';
import useStyles from './techstack.styles';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';

interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = ({}) => {
	const classes = useStyles();
	return (
		<div className={classes.techStack}>
			<Tooltip title='React'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.react}></motion.div>
			</Tooltip>
			<Tooltip title='Nextjs'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.next}></motion.div>
			</Tooltip>
			<Tooltip title='Redux'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.redux}></motion.div>
			</Tooltip>
			<Tooltip title='Docker'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.docker}></motion.div>
			</Tooltip>
			<Tooltip title='Gitlab'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.gitlab}></motion.div>
			</Tooltip>
			<Tooltip title='Git'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.git}></motion.div>
			</Tooltip>
			<Tooltip title='GraphQl'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.graphql}></motion.div>
			</Tooltip>
			<Tooltip title='Typescript'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.typescript}></motion.div>
			</Tooltip>
			<Tooltip title='Material UI'>
				<motion.div
					whileHover={{
						scale: 1.2,
						origin: 0,
					}}
					className={classes.materialui}></motion.div>
			</Tooltip>
		</div>
	);
};

export default TechStack;
