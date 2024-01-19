import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from './PlacesPage';

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
    let classes = 'inline-flex gap-1 py-2 px-4 font-semibold rounded-full ';
    if (type === subpage){
      classes +=  'bg-primary text-white rounded-full';
    }
    else{
      classes += ' bg-gray-200'
    }
    return classes;
  }


    return (
      <div>

          <div className="text-center max-w-lg mx-auto">
            <br /> 
            {/* <b>This is account page for {user.name} - {user.email}</b> <br /> */}
            
            <nav className='w-full flex justify-center mb-10 mt-8 gap-2'>
              <Link className= {linkClasses('profile')} to = {'/account'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                My profile </Link>
                              <Link className= {linkClasses('bookings')} to = {'/account/bookings'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg> My bookings</Link>
                              <Link className= {linkClasses('places')} to = {'/account/places'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
                My accomodations</Link>
            </nav>

            {subpage === 'profile' &&  <button onClick={logout} className="primary">Logout</button>
}
          </div>

          {subpage === 'places' && (
            <PlacesPage/>
          )}
      </div>
    
  )
}
