import React from 'react';
import {} from '@material-ui/core';
import useStyles from './banner.styles';
import Marquee from 'react-fast-marquee';
import Typography from '@material-ui/core/Typography';

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
	const classes = useStyles();

	return (
		<Marquee gradient={false} speed={40} pauseOnHover={true}>
			<div className={classes.bannerTitle}>
				<Typography variant='h1' color='initial'>
					currently<span className={classes.bannerDot}>: </span>
					<span className={classes.jobTitle}>
						junior<span className={classes.bannerDot}>.</span>webdeveloper
					</span>
				</Typography>
			</div>
		</Marquee>
	);
};

export default Banner;
