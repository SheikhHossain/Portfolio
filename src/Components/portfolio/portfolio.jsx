import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data =[

  {
    id:1,
    image: IMG1,
    title: 'Portfolio project',
    github: 'https://github.com/SheikhHossain/Portfolio.git',
    demo:"https://sheikhhossain.github.io/Portfolio/",
  },
  {
    id:2,
    image: IMG2,
    title: 'Resume project',
    github: 'https://github.com/SheikhHossain/HOSSAISS.github.io.git',
    demo:"https://sheikhhossain.github.io/HOSSAISS.github.io/",
  },
  {
    id:3,
    image: IMG3,
    title: 'TechTakeaway',
    github: 'https://github.com/SheikhHossain/TechTakeaway.git',
    demo:"https://sheikhhossain.github.io/TechTakeaway/",
  },
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id,image,title,github,demo})=> {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} /></div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

        
       
      </div>
    </section>
  )
}

export default portfolio