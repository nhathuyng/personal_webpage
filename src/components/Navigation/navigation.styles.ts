import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		minHeight: '5vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: '120px',
		background: 'linear-gradient(-20deg, rgba(255,248,240,1) 0%, rgba(247,240,233,1) 100%)',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '40px',
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: '0',
		},
	},
	title: {
		fontFamily: 'STLight',
		marginTop: '6px',
		textTransform: 'uppercase',
		[theme.breakpoints.down('xs')]: {
			'& .MuiTypography-root': {
				display: 'none',
			},
		},
	},
}));
