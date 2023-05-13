import React from 'react'
import ParentComponent from './ParentComponent'
import LeftSection from './leftSection/LeftSection'
import '../App.css'
import { Link } from 'react-router-dom';
const HomePage = ({setLoggedIn}) => {
  return (
   
    <div className="App">
    {/* LeftSection */}

    <LeftSection/>
    <ParentComponent setLoggedIn={setLoggedIn}/>
  </div>
  
  )
}

export default HomePage