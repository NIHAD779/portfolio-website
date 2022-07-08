import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nigad779@gmail.com</h5>
            
            <a href='mailto:nigad779@gmail.com' >Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9946987667</h5>
            <a href='https://api.whatsapp.com/send?phone=+919946987667'>Send a message</a>
          </article>
        </div>

        
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Number' required />
          <input type="text" name='email ' placeholder='Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>

      </div>

    </section >

  )
}

export default Contact