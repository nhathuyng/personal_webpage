import React from 'react';
import {} from '@material-ui/core';
import useStyles from './preloadImages.styles';

interface PreloadImagesProps {}

const PreloadImages: React.FC<PreloadImagesProps> = ({}) => {
	const classes = useStyles();
	return (
		<div className={classes.preloadImages}>
			<img width='0' src='/docker_color.svg' alt='' />
			<img width='0' src='/react_color.svg' alt='' />
			<img width='0' src='/git_color.svg' alt='' />
			<img width='0' src='/redux_color.svg' alt='' />
			<img width='0' src='/graphql_color.svg' alt='' />
			<img width='0' src='/gitlab_color.svg' alt='' />
			<img width='0' src='/mui_color.svg' alt='' />
			<img width='0' src='/next_color.svg' alt='' />
			<img width='0' src='/ts_color.svg' alt='' />
			<img width='0' src='/me_color.png' alt='' />
		</div>
	);
};

export default PreloadImages;
