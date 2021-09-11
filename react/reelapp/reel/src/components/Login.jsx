import React, { useContext, useEffect } from 'react';
import {signInWithGoogle , auth} from "../firebase"
import {AuthContext} from '../Authprovider'
import { Redirect } from "react-router-dom";
let Login = ()=>{

    let user  = useContext(AuthContext);
    
    return (
        <>
        {user ? <Redirect to="/" /> : ""}
        <button 
        onClick={()=>{
            signInWithGoogle();
        }}
        className="btn btn-primary">Login With Google</button>
        
        </>
    )
    
}
export default Login