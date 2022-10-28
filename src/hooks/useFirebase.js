
import {
 
    getAuth,
    getIdToken,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,

} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

const useFirebase = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');

    initializeAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();



    // google sign in
    const googleSignIn = (navigate, location) => {
        signInWithPopup(auth, googleProvider)
            .then((userCredential) => {
                toast.success('Logged in successfully...');
                setLoggedInUser(userCredential.user);
                
                const destination = location.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setLoggedInUser(null);
                toast.error('Logged Out!!!');
            })
            .catch((error) => toast.error(error.message))
            .finally(() => setIsLoading(false));
    };

    // observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedInUser(user);
                getIdToken(user).then((idToken) => {
                    setToken(idToken);
                });
            } else {
                setLoggedInUser(null);
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [auth]);


    return {
        loggedInUser,
        googleSignIn,
        isLoading,
        logOut,
        token
  
    };
};

export default useFirebase;