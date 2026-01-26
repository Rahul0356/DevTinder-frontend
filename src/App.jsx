import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Body from './components/Body'
import Profile from './components/Profile'

const App = () => {
  return (
  <>
    <BrowserRouter basename="/">
  <Routes>

    
  <Route path="/" element={<Body />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/profile" element={<Profile />}/>

        
        
         </Routes>
      </BrowserRouter>
      </>
  )
}

export default App