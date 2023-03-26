import LoginForm from './Form'
import Profile from './Profile';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import React from 'react'

function App() {
  const navigate = useNavigate()
  const navigateProfile = () => {
    console.log('hello')
    navigate('/profile')
  }
  const [isSee, setIsSee] = useState(false)
  return (
    <div className='App'>
      <Routes>
        <Route path="/profile" element={ <Profile/> } />
        {/* <Route path="login" element = {<LoginForm/>} /> */}
         <Route path="/" element={<LoginForm isSee={isSee} onChange={() => setIsSee(!isSee)} 
         onSubmit={navigateProfile}/> } />

      </Routes>
    </div>
  )
}
const Test = () => 
{
  return(
    <h1>test</h1>
  )
}
export default App