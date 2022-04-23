import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, } from 'firebase/auth';
import { auth, } from '../firebase/firebase'


export const authContext = createContext()
export const useAuth = () => {
  const context = useContext(authContext)
  return context;
}

export function AuthProvider({children}){
  
    const user = {
        login: true,
    };

    const signup = (email,password)=> 
                    createUserWithEmailAndPassword(auth, email, password)

    return(
        
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    )
}