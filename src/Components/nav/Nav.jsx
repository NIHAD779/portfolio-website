import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {IoCall} from 'react-icons/io5'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#home')
  return (
    <nav>
      <a href='#home'onClick={() => setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><IoCall/></a>
    </nav>
  )
}

export default Nav