import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	loader: {
		background: 'linear-gradient(8deg, #E0EFDE 0%, #B5D4C7 100%)',
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	loadingIcon: {
		width: '30px',
		height: '30px',
		marginTop: '5px',
		backgroundColor: '#616161',
	},
}));
