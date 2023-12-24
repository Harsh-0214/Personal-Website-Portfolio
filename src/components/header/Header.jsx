import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>


      <div id="menu" class="fas fa-bars"></div>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Harsh Tamakuwala</h1>
        <h5 className="text-light">Software Engineering Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src="" alt=""/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header