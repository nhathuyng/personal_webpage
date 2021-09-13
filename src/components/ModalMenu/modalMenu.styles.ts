import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	modalWrapper: {
		position: 'fixed',
		width: '100vw',
		height: '100vh',
		background: 'linear-gradient(8deg, #E0EFDE 0%, #B5D4C7 100%)',
		zIndex: 10,
		bottom: '0',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& .MuiTypography-root': {
			fontSize: '5.5rem',
		},
		[theme.breakpoints.up('xl')]: {
			'& .MuiTypography-root': {
				fontSize: '8rem',
			},
		},
		[theme.breakpoints.down('sm')]: {
			'& .MuiTypography-root': {
				fontSize: '4rem',
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingTop: '100px',
			'& .MuiTypography-root': {
				fontSize: '3.25rem',
			},
		},
	},
	menuLink: {
		borderBottom: '2px solid #616161',
		width: '100%',
		textAlign: 'center',
		cursor: 'pointer',
	},
	closeIcon: {
		position: 'absolute',
		height: '4px',
		width: '50px',
		backgroundColor: '#616161',
		right: '0',
		marginRight: '20px',
		marginTop: '32px',
		cursor: 'pointer',
		top: '0',
		[theme.breakpoints.down('xs')]: {
			marginTop: '15vh',
		},
	},
	primaryButton: {
		borderRadius: '100px',
		border: '6px solid #616161',
		textTransform: 'uppercase',
		marginTop: '150px',
		padding: '20px',
		background: 'none',
		cursor: 'pointer',
		fontSize: '3rem',
		[theme.breakpoints.up('xl')]: {
			fontSize: '5rem',
			padding: '40px',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
			marginTop: '100px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
			marginTop: '100px',
		},
	},
	title: {
		fontFamily: 'STMedium',
		marginTop: '12px',
	},
}));
