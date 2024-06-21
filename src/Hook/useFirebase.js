import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialize from "../firebase/firebase.inti";
firebaseInitialize();




const auth = getAuth();

//provider 
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)


    //google sign in
    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     setError(error.message)

        // })



    }



    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {

                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    //logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() =>
            
                setUser({})
            )
            .catch((error) =>setError(error))
            .then(() => setIsLoading(false))

    }
    return {
        signInWithGoogle,
        logOut,
        user,
        setUser,
        error,
        isLoading,
        setIsLoading

    };
};

export default useFirebase;