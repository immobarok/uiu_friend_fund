import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";

 export const AuthContext = createContext();
 const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true); 



    const emailSignIn = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const login =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
        return signOut(auth);
        }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
          console.log('user in auth state changed', user);
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = {email: userEmail}
              setUser(currentUser);
              setLoading(false);
              console.log(currentUser);
              //if user exists then generate token
              if(currentUser){
                
                axios.post('http://localhost:5500/jwt',loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response', res.data);
                })
              }else{
                axios.post('http://localhost:5500/logOut', loggedUser, {
                    withCredentials: true
                } )
                .then(res=>{
                    console.log(res.data);
                })
              }
            
          })
          return ()=>{
              unsubscribe();
          }
      },[auth])
    

    const authentications = {
        emailSignIn,
        login,
        user,
        loading,
        logOut,
        googleSignIn
    }



    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;