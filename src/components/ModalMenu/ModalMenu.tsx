import React, { useState } from 'react';
import useStyles from './modalMenu.styles';
import { modalChildVariant, modalVariant } from './modalMenu.variants';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';

interface ModalMenuProps {
	onClick: () => void;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClick }) => {
	const classes = useStyles();
	const [inProgress, setInProgress] = useState({ projects: false, threejs: false });
	return (
		<motion.div variants={modalVariant} initial='hidden' animate='show' exit='exit' className={classes.modalWrapper}>
			<div onClick={onClick} className={classes.closeIcon}></div>
			<motion.div variants={modalChildVariant} className={classes.menuLink}>
				<Link href=''>
					<Typography
						onMouseEnter={() => setInProgress({ projects: true, threejs: false })}
						onMouseLeave={() => setInProgress({ projects: false, threejs: false })}
						onClick={onClick}
						variant='h1'
						color='initial'>
						{inProgress.projects ? (
							<motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
								in progress...
							</motion.a>
						) : (
							<a>projects</a>
						)}
					</Typography>
				</Link>
			</motion.div>
			<motion.div variants={modalChildVariant} className={classes.menuLink}>
				<Link href=''>
					<Typography
						onMouseEnter={() => setInProgress({ projects: false, threejs: true })}
						onMouseLeave={() => setInProgress({ projects: false, threejs: false })}
						onClick={onClick}
						variant='h1'
						color='initial'>
						{inProgress.threejs ? (
							<motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
								in progress...
							</motion.a>
						) : (
							<a>threejs</a>
						)}
					</Typography>
				</Link>
			</motion.div>
			{/* <motion.div variants={modalChildVariant} className={classes.menuLink}>
				<Link href=''>
					<Typography onClick={onClick} variant='h1' color='initial'>
						<a>contact</a>
					</Typography>
				</Link>
			</motion.div> */}
			<motion.button
				variants={modalChildVariant}
				whileTap={{
					scale: 0.9,
				}}
				className={classes.primaryButton}
				onClick={() => window?.open('/NHAT_HUY_NGUYEN_CV_2021.pdf', '_blank')?.focus()}>
				<div className={classes.title}>download cv</div>
			</motion.button>
		</motion.div>
	);
};

export default ModalMenu;
