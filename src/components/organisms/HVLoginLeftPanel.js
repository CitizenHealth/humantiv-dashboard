import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import {
	Grid,
	Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { 
	SharedColors,
	SharedImages
 } from '../../resources'
import HVTitle from '../atoms/HVTitle';
import HVButton from '../atoms/HVButton';

const useStyles = makeStyles(theme => ({
	settingsIcon: {
    color: SharedColors.grey,
    height: 30,
    width: 30,
		borderRadius: 35,
		marginRight: 10,		
  },
	title: {
		color:SharedColors.grey,
	  marginLeft: 10
	},
	image: {
		height: 35,
		width: 35,
		marginRight: 10,
		color: '#fff',
    backgroundColor: deepOrange[500],
	}
}));

const HVLoginLeftPanel = ({
	onLogin
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
				minHeight: '100vh',
				backgroundColor: SharedColors.white
			}}
		>
			<Grid
				container
				alignItems="flex-start"
				item xs
				style={{ 
					marginTop: 50,
					marginLeft: 20
				}}
			>
				<HVTitle 
					title="Humantiv"
				/>				
			</Grid>
			<Grid>
				<Grid 
					container
					direction="row"
					justify="space-around"
					alignItems="center"
				>
					<Typography 
						variant="subtitle1" gutterBottom
						className={classes.title}
					>
						Connect with your citizenhealth.io gmail
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				xs
				justify="center"
				alignItems="center"
			>
				<HVButton 
					icon={SharedImages.google}
					round
					color={SharedColors.white}
					onClick={onLogin}
				/>		
			</Grid>
		</Grid>
  )
}

HVLoginLeftPanel.propTypes = {
	onLogin: PropTypes.func
}

export default HVLoginLeftPanel;