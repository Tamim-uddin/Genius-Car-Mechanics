import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] =useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
        .then( result => {
           setuser(result.user);
        })
        .finally( () => setIsLoading(false));
    }

    useEffect( () => {
      const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setuser(user);
            }
            else{
                setuser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {

        })
        .finally( () => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logout
    }
}


export default useFirebase;
