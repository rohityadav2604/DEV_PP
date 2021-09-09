import React, { useEffect } from 'react';
import {signInWithGoogle , auth} from "../firebase"
let Login = ()=>{


    // useEffect(()=>{
    //     auth.onAuthStateChanged

    // } , [])
    return (
        <>
        <button 
        onClick={()=>{
            signInWithGoogle();
        }}
        className="btn btn-primary">Login With Google</button>
        <button
          onClick = {()=>{
              auth.signOut();
          }}
        >logout</button>
        </>
    )
    
}
export default Login