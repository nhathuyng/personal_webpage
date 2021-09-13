import { makeStyles } from '@material-ui/core/styles';
import { m } from 'framer-motion';

export default makeStyles((theme) => ({
	techStack: {
		display: 'flex',
		alignItems: 'center',
		minHeight: '35vh',
		width: '100%',
		flexWrap: 'wrap',
		justifyContent: 'center',
		position: 'relative',
	},
	react: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/react.svg")',
		'&:hover': {
			backgroundImage: 'url("/react_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	next: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/nextjs.svg")',
		'&:hover': {
			backgroundImage: 'url("/next_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	redux: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/redux.svg")',
		'&:hover': {
			backgroundImage: 'url("/redux_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	gitlab: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/gitlab.svg")',
		'&:hover': {
			backgroundImage: 'url("/gitlab_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	git: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/git.svg")',
		'&:hover': {
			backgroundImage: 'url("/git_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	docker: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/docker.svg")',
		'&:hover': {
			backgroundImage: 'url("/docker_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	graphql: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/graphql.svg")',
		'&:hover': {
			backgroundImage: 'url("/graphql_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	typescript: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/typescript.svg")',
		'&:hover': {
			backgroundImage: 'url("/ts_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
	materialui: {
		width: '60px',
		height: '60px',
		margin: '20px',
		backgroundPosition: 'center',
		backgroundImage: 'url("/materialui.svg")',
		'&:hover': {
			backgroundImage: 'url("/mui_color.svg")',
		},
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		[theme.breakpoints.up('xl')]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45px',
			height: '45px',
		},
	},
}));
