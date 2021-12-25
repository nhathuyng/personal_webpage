import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import TechStack from '../components/TechStack/TechStack';

export default function Index() {
	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			{/* <Head>
				<title>Nhat Huy Nguyen - WebDev</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Banner />
				<About />
				<TechStack />
			</main> */}
			{'Webpage is under construction'.toUpperCase()}
		</div>
	);
}
