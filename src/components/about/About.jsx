import React from 'react'
import './about.css'

import{FaAward} from 'react-icons/fa'
import {FaFolderMinus} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'> 
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src="" alt=""/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>4+ Years of Experience</small>
          </article>
          <article className='about__card'>
            <FaFolderMinus className='about__icon'/>
            <h5>Projects</h5>
            <small>Over 10 Completed and More to come!</small>
          </article>
        </div>
        <p>
          I am a 3rd Year Software Engineering Student at Ontario Tech University who is passionate about using technology to make everyday life easier. I am always thinking of ways to be as creative as possible with my work while always prioritizing efficiency.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    </section>
  )
}

export default About