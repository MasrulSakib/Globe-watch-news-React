import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthInfo = createContext();
const auth = getAuth(app)

const Authcontext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const providerLogin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);

    }

    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user auth changed', currentUser);

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            setLoader(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loader, setLoader, updateUserProfile, varifyEmail, providerLogin, signUp, signIn, logOut };
    return (
        <AuthInfo.Provider value={authInfo}>
            {children}
        </AuthInfo.Provider>
    );
};

export default Authcontext;