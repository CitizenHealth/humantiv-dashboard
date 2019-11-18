import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SharedColors } from '../../resources';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: SharedColors.greenShade1,
  },
  barColorPrimary: {
    backgroundColor: SharedColors.greenShade4,
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const HVProgress = () =>  {
	const classes = useStyles();

	return (
		<div className={classes.root}>
      <ColorLinearProgress className={classes.margin} />
    </div>
	)
}

export default HVProgress;