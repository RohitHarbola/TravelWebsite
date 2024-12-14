import { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {

  return (
    <>
    <h2 className="text-3xl font-bold underline">Travel</h2>
    <div>
      <Header />
      <Home />
      <Footer/>
    </div>
      </>
  )
}

export default App
