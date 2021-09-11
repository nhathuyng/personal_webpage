import React from 'react';
import useStyles from './navigation.styles';
import FSMenu from '../FSMenu/FSMenu';
import Typography from '@material-ui/core/Typography';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Typography variant='h6' color='initial'>
					nhat huy nguyen
				</Typography>
			</div>
			<FSMenu />
		</div>
	);
};

export default Navigation;
