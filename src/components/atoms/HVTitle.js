import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Grid,
	Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import {
	SharedMetrics,
	SharedColors
} from '../../resources';
import HVRectangle from './HVRectangle';

const useStyles = makeStyles(theme => ({
  rectangle: {
		marginLeft: 10
	},
	title: {
		color: SharedColors.grey
	}

}));

const HVTitle = ({
	title,
}) => {
	const classes = useStyles();


	return (
		<Grid
			container
			item
			direction="column"
			justify="space-between"
			alignItems="flex-start"
		>
			<Grid>
				<Typography
					variant="h4"
					component="h3"
					className={classes.title}
				>
				<Box
					fontWeight="fontWeightMedium"
					fontStyle="normal"
					m={1}
				>
					{title}
				</Box>
				</Typography>
			</Grid>
			<Grid container spacing={0} className={classes.rectangle} wrap='nowrap'>
			 <HVRectangle
				 color={SharedColors.greenShade4}
				 height={SharedMetrics.rectangleHeight}
				 width={SharedMetrics.rectangleWidth}
			 />
			 <HVRectangle
				 color={SharedColors.greenShade3}
				 height={SharedMetrics.rectangleHeight}
				 width={SharedMetrics.rectangleWidth}
			 />
			 <HVRectangle
				 color={SharedColors.greenShade2}
				 height={SharedMetrics.rectangleHeight}
				 width={SharedMetrics.rectangleWidth}
			 />
			 <HVRectangle
				 color={SharedColors.greenShade1}
				 height={SharedMetrics.rectangleHeight}
				 width={SharedMetrics.rectangleWidth}
			 />
			</Grid>
		</Grid>
	)
};

HVTitle.propTypes={
	title: PropTypes.string
};

HVTitle.defaultProps={
	title: "Title"
};

export default HVTitle;
