import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .catch()
        .finally(() => setIsLoading(false))
    }

    // observe whether user state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
          });
          setIsLoading(false);
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
    }
};

export default useFirebase;