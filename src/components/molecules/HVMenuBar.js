import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import {
	Grid,
	Typography,
	Avatar
} from '@material-ui/core';
import {
	Settings
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { 
	SharedColors
 } from '../../resources'

const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		height: 45,
		backgroundColor: SharedColors.white
  },
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

const HVMenu = ({
	title
}) => {
  
  const [activeItem, setActiveItem] = useState('');
	const classes = useStyles();
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
		<Grid 
			container
			item
			direction="row"
			justify="space-between"
			alignItems="center"
			className={classes.root}
		>
			<Grid>
				<Typography 
					variant="h5"
					component="h2"
					className={classes.title}
				>
					{title}
				</Typography>
			</Grid>
			<Grid>
				<Grid 
					container
					direction="row"
					justify="space-around"
					alignItems="center"
				>
					<Avatar className={classes.image}>OP</Avatar>
					<Settings className={classes.settingsIcon}/>
				</Grid>
			</Grid>
		</Grid>
  )
}

HVMenu.propTypes = {

}

HVMenu.defaultProps = {

}

export default HVMenu;