import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Account() {
  const[redirect,setRedirect] = useState(false);
  const {ready,user,setUser} = useContext(UserContext);

  if(ready && !user){
    return <Navigate to = {'/login'}/>
  }

  async function logout() {
    alert("You have logged out")
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }
  if(redirect){
    return <Navigate to = {redirect}/>
  }

  if(!ready){
    return (
      <div className="text-center max-w-lg mx-auto">
          <br />
          <b>This is account page</b> <br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
    )
  }

  return (
    <div>
        <h1>This is account page for {user.name}</h1>
        <div className="text-center max-w-lg mx-auto">
          <br />
          <b>This is account page</b>
          <button onClick={logout} className=".btn">Logout</button>
        </div>
    </div>
    
  )
}
