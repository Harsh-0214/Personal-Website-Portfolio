import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://i.imgur.com/0Y2X2xh.png" alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/harsh-0214"className='btn' target="_blank">GitHub</a>
            <a href="https://github.com/harsh-0214"className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    
    </section>
  )
}

export default Portfolio