import {
	useState,
	useEffect,
	useRef
} from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const useAuth = () => {

  const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {	
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}
	
		firebase.auth().onAuthStateChanged(function(loginUser) {
			if (loginUser) {
				// User is signed in.
				setUser(loginUser);
			} else {
				setUser(null);
			}
		});

		return () => {
		}
	},[]);

	const loginWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		provider.setCustomParameters({
			'hd': 'citizenhealth.io'
		});
		
		setLoading(true);
		firebase.auth().useDeviceLanguage();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token.
			setToken(result.credential.accessToken);
			// The signed-in user info.
			setUser(result.user);
			setError(null);
			setLoading(false);
		}).catch(function(error) {
			setUser(null);
			setError({
				// Handle Errors here.
				errorCode: error.code,
				errorMessage: error.message,
				// The email of the user's account used.
				email: error.email,
				// The firebase.auth.AuthCredential type that was used.
				credential: error.credential,
			});
			setLoading(false);
		});
	};

	const logout = () => {
		firebase.auth().signOut();
	}

	return [user, loading, error, loginWithGoogle, logout];
}

export default useAuth;