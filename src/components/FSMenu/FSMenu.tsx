import React, { useState } from 'react';
import ModalMenu from '../ModalMenu/ModalMenu';
import useStyles from './fsmenu.styles';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

interface FSMenuProps {}

const FSMenu: React.FC<FSMenuProps> = ({}) => {
	const classes = useStyles();
	const [openMenu, setOpenMenu] = useState(false);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('xs'));

	const handleClick = () => {
		setOpenMenu(!openMenu);
		console.log(openMenu);
	};

	return (
		<>
			<div onClick={handleClick} className={classes.root}>
				{matches && (
					<Typography
						style={{
							marginTop: '5px',
						}}
						variant='h6'
						color='initial'
						noWrap={true}>
						NHAT HUY NGUYEN
					</Typography>
				)}
				<div className={classes.lineWrapper}>
					<div className={classes.lineOne}></div>
					<div className={classes.lineTwo}></div>
				</div>
			</div>
			<AnimatePresence>{openMenu && <ModalMenu onClick={handleClick} />}</AnimatePresence>
		</>
	);
};

export default FSMenu;
