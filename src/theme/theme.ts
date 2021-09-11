import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#E0EFDE',
		},
		secondary: {
			main: '#5C5988',
		},
		background: {
			default: '#FFF8F0',
		},
	},
	typography: {
		fontFamily: 'STLight',
		h1: {
			fontSize: '3.5rem',
		},
		h2: {
			fontSize: '2.45rem',
		},
		h3: {
			fontSize: '1.95rem',
		},
		h4: {
			fontSize: '1.55rem',
		},
		h5: {
			fontSize: '1.25rem',
		},
		h6: {
			fontSize: '1rem',
		},
	},
	shape: {},
	overrides: {
		MuiButton: {
			root: {},
		},
	},
	props: {
		MuiButton: {
			disableRipple: true,
			variant: 'contained',
			color: 'primary',
		},
		MuiCheckbox: {
			disableRipple: true,
		},
		MuiTextField: {
			inputProps: {
				style: {
					color: 'white',
				},
			},
			InputLabelProps: {
				shrink: true,
			},
		},
	},
});
