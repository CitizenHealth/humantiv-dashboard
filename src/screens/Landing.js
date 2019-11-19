import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../navigation/routes';
import { Grid } from '@material-ui/core';
import { HVAnimation } from '../components/atoms';
import { SharedAnimations } from '../resources';
import { useAuth } from '../business';

const Landing = () => {
  const [user, loading, error, loginWithGoogle, logout] = useAuth();
  const history = useHistory();

  useEffect(()=>{
    setTimeout(() => {
      if(user) {
        history.push(ROUTES.HOME);
        return;
      }
      history.push(ROUTES.SIGN_IN)
    }, 2000);
  },[]);

  return (
    <Grid
      container
      style={{
        flex: 1,
        height: '100%',
      }}
    >
      <HVAnimation
        source={SharedAnimations.loading}
      />
    </Grid>
  );
}

export default Landing;