import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	SharedColors,
} from '../../resources';
import { HVSnackBar } from '.';

export default {
  title: 'HVSnackBar',
  decorators: [storyFn => <div style={{ flex: 1, backgroundColor: SharedColors.white, textAlign: 'center' }}>{storyFn()}</div>]
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const Error = () => {
  const classes = useStyles2();

  return (
    <div>
      <HVSnackBar
        variant="error"
        className={classes.margin}
        message="This is an error message!"
      />
    </div>
  );
}

export const Warning = () => {
  const classes = useStyles2();

  return (
    <div>
      <HVSnackBar
        variant="warning"
        className={classes.margin}
        message="This is a warning message!"
      />
    </div>
  );
}

export const Info = () => {
  const classes = useStyles2();

  return (
    <div>
			<HVSnackBar
				variant="info"
				className={classes.margin}
				message="This is an information message!"
			/>
    </div>
  );
}

export const Success = () => {
  const classes = useStyles2();

  return (
    <div>
			<HVSnackBar
				variant="success"
				className={classes.margin}
				message="This is a success message!"
			/>
    </div>
  );
}
