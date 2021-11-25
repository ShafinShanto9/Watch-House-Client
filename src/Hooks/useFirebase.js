import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Pages/Login/Firebase/Firebase.init";
initializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoadin] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth();

    const registerUser = (email, password,location,history,name) => {
        setIsLoadin(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const newUser = {email, displayName: name}
          setUser(newUser)
          saveUserInfo(email, name);
          setAuthError ('');
         history.push('/')
        })
        .catch((error) => {
          setAuthError (error.message);
          // ..
        }).finally(()=>setIsLoadin(false));
}
    
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoadin(false)
        });
        return () => unsubcribed;
    },[])

    const loginUser = (email, password,location,history) => {
        setIsLoadin(true)
        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
         const destination = location?.state?.form || '/dashboard'
        history.push(destination)
        const user = userCredential.user;
        })
        .catch((error) => {
        }).finally(()=>setIsLoadin(false));
      }

      const saveUserInfo = (email) => {
        const user = {email}
        fetch("https://floating-wave-45302.herokuapp.com/addUserInfo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      }

    const logOut = () => {
        signOut(auth).then(() => {
         })
         .finally(()=>setIsLoadin(false));
    }
    return {
        registerUser,
        loginUser,
        isLoading,
        logOut,
        user
    }
}
export default useFirebase
