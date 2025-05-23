import React, { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
   signInWithPopup
} from 'firebase/auth';

import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

const googleProvider = new GoogleAuthProvider();

const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
      
    };
  }, []);



  const contextValue = {
    createUser,
    logInUser,
    user,
    setUser,
    logOut,
    googleLogin,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
