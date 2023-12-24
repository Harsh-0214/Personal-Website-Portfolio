import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {HiOutlineLink} from "react-icons/hi"
import {BsInstagram} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0tf3kiq', 'template_d06b7n8', form.current, 'cXYBLeUt8JRTjk20k')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Harsh_2003@hotmail.com</h5>
            <a href='mailto:Harsh_2003@hotmail.com'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Harshtamakuwala_</h5>
            <a href='https://www.instagram.com/harshtamakuwala_/'>DM Me!</a>
            
          </article>

          <article className="contact__option">
            <HiOutlineLink className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Harsh Tamakuwala</h5>
            <a href='https://www.linkedin.com/in/harsh-tamakuwala-1392ba251/'>Connect With Me</a>
          </article>

        </div>

        {/*end of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="subject" name='subject' placeholder='Subject'/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    
    </section>
  )
}

export default Contact