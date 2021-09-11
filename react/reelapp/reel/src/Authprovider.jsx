import { useState , useEffect, createContext } from "react"
import {auth , firestore} from './firebase.js';
export const AuthContext = createContext();
let AuthProvider = (props)=>{
      let [user , setuser] = useState(null);
        let [loading , setloading] = useState(true);
    useEffect(()=>{
       
        let unsub = auth.onAuthStateChanged((user)=>{
            
              if(user)
              {
                let { displayName, email, uid, photoURL } = user;
                  setuser({ displayName, email, uid, photoURL });
              }
              else
              {
                  setuser(null);
              }

              setloading(false);
        });
        return ()=>{
            unsub();
        };

    } , []);

    return (
        <AuthContext.Provider value={user}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;