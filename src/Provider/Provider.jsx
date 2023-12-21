import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../FireBase/FireBase-confiq";

export  const AuthContext = createContext(null)
const Provider = ({children}) => {
    const [user, setUser] = useState([])
    const [loding, setLoding] = useState(true)
    const Provider = new GoogleAuthProvider()
    const SingUp = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email,password)
    }
    const SignIn = (email, password ) =>{
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const SignOut = ()=>{
        setLoding(true)
        return signOut(Auth)
    }
    const Google = () =>{
        return signInWithPopup(Auth, Provider)
    }
    useEffect(()=>{
        const unSubcriber = onAuthStateChanged(Auth, currentUser =>{
            setLoding(false)
            setUser(currentUser)
        })
        return ()=>{
            return unSubcriber
        }
    },[])
    console.log(user)
    const AuthInfo = {
        SingUp,
        SignIn,
        SignOut,
        Google,
        loding,
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;