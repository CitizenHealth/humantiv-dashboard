import React, {useState, useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../navigation/routes';
import { 
  HVProgress,
  HVSnackBar
} from '../components/atoms';
import {HVLogin} from '../components/templates';
import {useAuth} from '../business/hooks/index';

const SignIn = () => {
  const [user, loading, error, loginWithGoogle, logout] = useAuth();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (error === null) {
      setOpen(false);
      return;
    }
    setOpen(true);
  },[error]);

  useEffect(() => {
    if(user) {
      history.push(ROUTES.HOME)
    }
  }, [user]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <div>
      {loading ?
        <HVProgress/>
        : null}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <HVSnackBar
          onClose={handleClose}
          variant="error"
          message={error ? error.errorMessage : ''}
        />
      </Snackbar>
      <HVLogin
        loading={loading}
        onLogin={loginWithGoogle}
      />
    </div>
  )
};

export default SignIn;