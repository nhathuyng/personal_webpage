import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(8deg, #E0EFDE 0%, #B5D4C7 100%)',
		width: '250px',
		minHeight: '5vh',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			justifyContent: 'space-between',
			paddingLeft: '20px',
		},
	},
	lineOne: {
		height: '2px',
		width: '100px',
		backgroundColor: '#616161',
		marginBottom: '8px',
	},
	lineTwo: {
		height: '2px',
		width: '50px',
		backgroundColor: '#616161',
	},
	lineWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginRight: '20px',
	},
}));
