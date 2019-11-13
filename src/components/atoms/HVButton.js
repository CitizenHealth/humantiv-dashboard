import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Fab
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { SharedImages } from '../../resources'
import SharedColors from '../../resources/colors';

const useStyles = makeStyles(theme => ({
  button: {
		height: 50,
		width: 50,
	},
	imageIcon: {
    height: 30
  },
}));

const HVButton = ({
	round,
	icon,
	color,
	onClick,
}) => {
	const classes = useStyles();

	return (
		<Fab
			variant="contained"
			className={classes.button}
			onClick={onClick}
			color={color}
			style={{
				backgroundColor: SharedColors.white
			}}
		>
			<img className={classes.imageIcon} src={icon} alt="Google Login"/>
		</Fab>
	)
};

HVButton.propTypes={
	round: PropTypes.bool,
	icon: PropTypes.number,
	color: PropTypes.string,
	onPress: PropTypes.func
};

HVButton.defaultProps={
	round: false,
	icon: SharedImages.google,
	color: SharedColors.white,
	onClick: null
};

export default HVButton;
