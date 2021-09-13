import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	aboutWrapper: {
		display: 'flex',
		minHeight: '45vh',
		background: 'linear-gradient(8deg, #E0EFDE 0%, #B5D4C7 100%)',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	aboutMe: {
		flexBasis: '65%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'STMedium',
		paddingLeft: '120px',
		paddingRight: '120px',
		'& .MuiTypography-root': {
			lineHeight: '40px',
		},
		[theme.breakpoints.down('md')]: {
			paddingLeft: '40px',
			paddingRight: '40px',
		},

		[theme.breakpoints.down('sm')]: {
			'& .MuiTypography-root': {
				lineHeight: '30px',
			},
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: '20px',
			paddingRight: '20px',
			'& .MuiTypography-root': {
				fontSize: '1rem',
				lineHeight: '25px',
			},
		},
	},
	testimonies: {
		flexBasis: '35%',
		display: 'flex',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		backgroundImage: 'url("/me_color.png")',
		backgroundRepeat: 'no-repeat',
		filter: 'grayscale(1)',

		'&:hover': {
			filter: 'grayscale(0)',
		},
		transition: 'all 1.2s ease',
	},
}));
