import React from 'react';
import useStyles from './about.styles';
import Typography from '@material-ui/core/Typography';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
	const classes = useStyles();

	return (
		<div className={classes.aboutWrapper}>
			<div className={classes.aboutMe}>
				<Typography variant='h5' color='initial'>
					Hey I am Huy - glad you’re here. I am currently working as a Junior Web Developer @ an agency based in Bonn. Doing frontend stuff is what i feel most
					comfortable with. I'm always on the lookout for new opportunities. If you have something to discuss - contact me on LinkedIn.
				</Typography>
			</div>
			<div className={classes.testimonies}></div>
		</div>
	);
};

export default About;
