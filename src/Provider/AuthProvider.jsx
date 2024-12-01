import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userDelete = () =>{
        return deleteUser(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
          });
        return () => unsubscribe();
      }, []);

    const userSignOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        logInUser,
        userSignOut,
        userDelete

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;