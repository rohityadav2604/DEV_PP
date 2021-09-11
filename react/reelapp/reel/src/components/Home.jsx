import {AuthContext} from '../Authprovider'
import {auth} from '../firebase'
import { Redirect } from "react-router-dom";
import React, { useContext } from 'react';
let Home = ()=>{
    let user  = useContext(AuthContext);
    return (
        <>
           {user ? "" : <Redirect to="/login" />}
           <h1>Home</h1>  
           <button
          onClick = {()=>{
              auth.signOut();
          }}
        >logout</button>
        </>
        
    )
     
}

export default Home;