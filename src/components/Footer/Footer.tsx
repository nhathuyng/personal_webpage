import React from 'react';
import {} from '@material-ui/core';
import useStyles from './footer.styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	const classes = useStyles();
	return (
		<div className={classes.footerWrapper}>
			<img
				style={{ cursor: 'pointer' }}
				onClick={() => window?.open('https://www.linkedin.com/in/nhat-huy-nguyen-410706170', '_blank')?.focus()}
				className={classes.footerIcon}
				src='/linkedin.svg'
				alt=''
			/>
			<img
				style={{ cursor: 'pointer' }}
				onClick={() => window?.open('https://github.com/nhathuyng', '_blank')?.focus()}
				className={classes.footerIcon}
				src='/github.svg'
				alt=''
			/>
			<div className={classes.copyright}>© NHAT HUY NGUYEN</div>
		</div>
	);
};

export default Footer;
