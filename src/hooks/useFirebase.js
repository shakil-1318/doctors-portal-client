import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase init app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // saved user to db
                savedUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                savedUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.push(destination);
                // setAuthError('');
            }).catch((error) => {
                // setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithFacebook = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // saved user to database
    const savedUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        registerUser,
        loginUser,
        signWithGoogle,
        signInWithFacebook,
        logOut,
        isLoading,
        authError
    }

}
export default useFirebase;