import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut, initializeAuth  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthintecation from "../firebase/firebase.init";

initializeAuthintecation();

const useFirebase = () => {
    const [user, setUser] = useState({})
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUseingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
        })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {signInUseingGoogle,user,logout}
}
export default useFirebase;
    
