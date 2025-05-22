import React, { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
 
  // console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser);
    });
    return()=> {
      unsubscribe();
    }
  })

   const contextValue = {
    createUser,
    logInUser,
    user,
    setUser,
    logOut,
  }
  return (
   <AuthContext value={contextValue}>
     { children }
   </AuthContext>
  );
};

export default AuthProvider;