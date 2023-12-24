import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="hhtps://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="hhtps://github.com/harsh-0214" target="_blank"><BsGithub/></a>
        <a href="hhtps://instagram.com/harshtamakuwala_" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials