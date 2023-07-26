import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomeScreen from './components/screens/HomeScreen'

function App() {
 

  return (
<BrowserRouter>
<Header />
<Routes>
<Route exact path='/' element={<HomeScreen/>} />
</Routes>
</BrowserRouter>
  )
}

export default App
