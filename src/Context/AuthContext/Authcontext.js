import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthInfo = createContext();
const auth = getAuth(app)

const Authcontext = ({ children }) => {
    const [user, setUser] = useState(null);


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user auth changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin, signUp, signIn, logOut };
    return (
        <AuthInfo.Provider value={authInfo}>
            {children}
        </AuthInfo.Provider>
    );
};

export default Authcontext;