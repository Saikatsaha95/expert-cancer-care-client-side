import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState([]);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingEmail = (email, password) => {
    console.log("useFirebase: ", email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (name, email, password) => {
    console.log("user created successfully", email, password);
    setName(name);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    signInUsingEmail,
    createUser,
    name,
  };
};

export default useFirebase;
