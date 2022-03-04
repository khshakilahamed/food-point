import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        });
    }

    // observe whether user state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
          });
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;