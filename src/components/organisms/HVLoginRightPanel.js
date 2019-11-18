import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	Typography,
	Link
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { 
	SharedColors,
 } from '../../resources'

const useStyles = makeStyles(theme => ({
	imageContainer: {
		height: 220,
		width: 220,
		borderRadius: 220,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: SharedColors.white
	},
	imageIcon: {
		height: 200
	},
	footer: {
		height: 50,
		minWidth: '100vh',
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: SharedColors.loginGreen
	},
	link: {
		color:SharedColors.white,
	  marginRight: 10
	},
}));

const HVLoginRightPanel = ({
	image
}) => {
	const classes = useStyles();

  return (
		<Grid 
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="space-between"
			style={{ 
				backgroundColor: SharedColors.loginGreen
		  }}
		>
			<Grid 
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ 
					minHeight: '100vh',
					backgroundColor: SharedColors.loginGreen
				}}
			>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
					className={classes.imageContainer}
				>
					<img className={classes.imageIcon} src={image} alt="Humantiv Logo"/>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="flex-end"
				justify="center"
				className={classes.footer}
			>
				<Typography
					className={classes.link}
				>
					<Link href="https://citizenhealth.io" className={classes.link}>
						Citizen Health
					</Link>
				</Typography>
			</Grid>
		</Grid>
  )
}

HVLoginRightPanel.propTypes={
	image: PropTypes.string.isRequired
};

export default HVLoginRightPanel;