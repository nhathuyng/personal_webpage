import { useEffect } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = ({}) => {
	return (
		<>
			<Typography variant='h1' color='initial'>
				404
			</Typography>
			<Link href='/'>
				<a>Go back home</a>
			</Link>
		</>
	);
};

export default ErrorPage;
