import { useState } from 'react'
import userData from "../../userData.json"
import Profile from "../Profile/Profile"

import './App.css'

export default function App() {
  return (
    <Profile className="profile"
      image={userData.avatar}
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      
      stats={userData.stats}
    />
  )
 

}

