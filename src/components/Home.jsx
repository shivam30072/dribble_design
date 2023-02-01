import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Profile from './Profile'

const Home = ({setNav, nav}) => {
  return (
    <div className='flex'>
    <Navbar setNav ={setNav} nav = {nav} />
    <Hero setNav={setNav} nav={nav} />
    </div>
  )
}

export default Home