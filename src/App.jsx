import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/hero'
import Category from './component/Category'
import FeatureSectionFruit from './component/FeatureSectionFruit'

function App() {
 

  return (
    <>

   <Navbar/>
  <Hero/>
  <Category/>
  <FeatureSectionFruit/>
  
    </>
  )
}

export default App
