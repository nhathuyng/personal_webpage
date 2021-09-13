import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	bannerTitle: {
		whiteSpace: 'nowrap',
		display: 'flex',
		letterSpacing: '8px',
		marginTop: '20px',
		paddingLeft: '90px',
		minHeight: '8vh',
		[theme.breakpoints.up('xl')]: {
			'& .MuiTypography-root': {
				fontSize: '6rem',
			},
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: '6vh',
		},
	},
	bannerDot: {
		fontFamily: 'STXBold',
		color: theme.palette.primary.main,
	},
	jobTitle: {
		fontFamily: 'STMedium',
		textTransform: 'uppercase',
	},
}));
