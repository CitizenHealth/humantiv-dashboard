import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../navigation/routes';
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
    }, 3000);
  },[]);

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <HVAnimation
        source={SharedAnimations.loading}
      />
    </div>
  );
}

export default Landing;