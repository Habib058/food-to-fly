import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState({})
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    let { from } = location.state || { from: { pathname: "/" } };
    const getIdToken =()=>{
        firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken=> {
            sessionStorage.setItem('token',idToken);
            console.log(idToken)
          }).catch(error=> {
            // Handle error
          });
    }

    const handleGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const loggedUser = { name: user.displayName, email: user.email, img: user.photoURL };
                setLoggedInUser(loggedUser);
                getIdToken();
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)
            });
            

    }
    return (
        <div className="container">
            <div className="text-center">
                <button className="btn btn-primary m-5" onClick={handleGoogleSignIn}>Login with Google</button>
                {/* <p>{error}</p> */}
            </div>

        </div>
    );
};

export default Login;