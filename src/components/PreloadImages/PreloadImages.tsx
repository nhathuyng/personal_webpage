import React from 'react';
import {} from '@material-ui/core';
import useStyles from './preloadImages.styles';

interface PreloadImagesProps {}

const PreloadImages: React.FC<PreloadImagesProps> = ({}) => {
	const classes = useStyles();
	return (
		<div className={classes.preloadImages}>
			<img src='/docker_color.svg' alt='' />
			<img src='/react_color.svg' alt='' />
			<img src='/git_color.svg' alt='' />
			<img src='/redux_color.svg' alt='' />
			<img src='/graphql_color.svg' alt='' />
			<img src='/gitlab_color.svg' alt='' />
			<img src='/mui_color.svg' alt='' />
			<img src='/nextgit_color.svg' alt='' />
			<img src='/ts_color.svg' alt='' />
			<img src='/me_color.png' alt='' />
		</div>
	);
};

export default PreloadImages;
