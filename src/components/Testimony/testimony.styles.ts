import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	testimony: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '300px',
		background: 'linear-gradient(-20deg, rgba(255,248,240,1) 0%, rgba(247,240,233,1) 100%)',
		padding: '15px',
		boxShadow: '2px 2px 6px -4px rgba(247,240,233,1)',
		borderRadius: '1px',
		margin: '20px',
	},
	content: {
		fontFamily: 'STLight',
		lineHeight: '15px',
		fontSize: '16px',
	},
	jobDescription: {
		fontSize: '13px',
		marginTop: '5px',
	},
	name: {
		fontFamily: 'STMedium',
		color: theme.palette.secondary.main,
	},
}));
