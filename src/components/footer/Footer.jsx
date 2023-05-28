import React from 'react'
import './footer.css'

import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>HARSH TAMAKUWALA</a>

      <ul className='permalinks'>

        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className='footer__socials'>

        <a href='https://www.linkedin.com/in/harsh-tamakuwala-1392ba251/'><BsLinkedin/></a>
        <a href='https://www.instagram.com/harshtamakuwala_/'><BsInstagram/></a>
        <a href='https://twitter.com/YoungTamaku'><BsTwitter/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; HARSH TAMAKUWALA. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer