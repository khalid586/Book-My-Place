import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Account() {
  const[redirect,setRedirect] = useState(false);
  const {ready,user,setUser} = useContext(UserContext);



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
    return 'Loading...'
  }
  if(ready && !user && !redirect){
    return <Navigate to = {'/login'}/>
  }

  let {subpage} = useParams();
  if(subpage === undefined){
    subpage = 'profile';
  }

  function linkClasses (type = null){
    let classes = 'py-2 px-6 font-semibold ';
    if (type === subpage){
      classes +=  'bg-primary text-white rounded-full';
    }
    return classes;
  }


    return (
      <div>

          <div className="text-center max-w-lg mx-auto">
            <br /> 
            {/* <b>This is account page for {user.name} - {user.email}</b> <br /> */}
            
            <nav className='w-full flex justify-center mb-10 mt-8 gap-2'>
              <Link className= {linkClasses('profile')} to = {'/account'}> My Profile </Link>
              <Link className= {linkClasses('bookings')} to = {'/account/bookings'}> My Bookings</Link>
              <Link className= {linkClasses('places')} to = {'/account/places'}>My accomodations</Link>
            </nav>

            {subpage === 'profile' && <button onClick={logout} className="primary">Logout</button>
}
          </div>
      </div>
    
  )
}
