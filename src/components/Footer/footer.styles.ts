import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	footerWrapper: {
		position: 'fixed',
		bottom: '0',
		width: '100%',
		minHeight: '5vh',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '120px',
		background: 'linear-gradient(-20deg, rgba(255,248,240,1) 0%, rgba(247,240,233,1) 100%)',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '40px',
		},

		[theme.breakpoints.down('xs')]: {
			paddingLeft: '20px',
		},
	},
	footerIcon: {
		width: '20px',
		margin: '10px',
		marginLeft: 0,
	},
	copyright: {
		marginTop: '5px',
	},
}));
