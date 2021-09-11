import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	testimoniesWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	titleWrapper: {
		display: 'flex',
	},
	sectionTitle: {
		transform: 'rotate(90deg)',
		fontFamily: 'STLight',
		marginRight: '-40px',
	},

	testimonies: {
		display: 'flex',
	},
	testDot: {
		color: theme.palette.primary.main,
	},
	arrowIcon: {
		width: '30px',
		cursor: 'pointer',
	},
}));
