import React from 'react'
import './About.css'
import ME from '../../assets/assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from "react-icons/fi";
import {AiOutlineProject} from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='about'/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsFillAwardFill className='about__icons'/>
            <h5>Experience</h5>
            <small> Just started</small>
          </article>
        
          <article className='about__card'>
            <FiUsers className='about__icons'/>
            <h5>Clients</h5>
            <small> Just started</small>
          </article>
          <article className='about__card'>
            <AiOutlineProject className='about__icons'/>
            <h5>Projects</h5>
            <small> Just started</small>
          </article>
        </div>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
      </div>
    </div>

  </section>

  )
}

export default about