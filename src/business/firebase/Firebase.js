import React, { useEffect } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const auth = app.auth();

const Firebase = ({
  /** These props are provided by withFirebaseAuth HOC */
  signInWithGoogle,
  signOut,
  setError,
  user,
  error,
}) => {


	useEffect(() => {
		app.initializeApp(config);
	},[]);
	
	return (
		<div>
    	<h1>Firebase</h1>
  	</div>
	)
}

/** See the signature above to find out the available providers */
const providers = {
  googleProvider: new app.auth.GoogleAuthProvider(),
};
/** providers can be customised as per the Firebase documentation on auth providers **/
providers.googleProvider.setCustomParameters({hd:"citizenhealth.io"});

export default withFirebaseAuth({
  providers,
  auth,
})(Firebase);;