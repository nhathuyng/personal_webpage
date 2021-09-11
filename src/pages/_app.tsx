import '../styles/global.css';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../theme/theme';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import SplashLoader from '../components/SplashLoader/SplashLoader';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);
	return (
		<>
			<ThemeProvider theme={responsiveFontSizes(theme)}>
				<CssBaseline />
				<SplashLoader>
					<Navigation />
					<Component {...pageProps} />
					<Footer />
				</SplashLoader>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
//TODO: Make Head Component
