import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="Sheikh Shafayet Hossain"/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Graduated </h5>
              <small>University of Manitoba</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>B.Sc. Major</h5>
              <small>Computer Science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Focus</h5>
              <small>Full Stack Programming</small>
            </article>
          </div>
          <p>
            Hello! I'm Sheikh Shafayet Hossain, a computer science graduate from the University of Manitoba. I'm highly organized and detail-oriented, both in my work and in my life.
          </p>
          <p>
            I've managed client expectations and helped stakeholders resolve their concerns with tailored solutions, and I'm trusted with complex, sensitive information. I've worked in fast-paced teams juggling multiple priorities and deadlines with minimal supervision.
          </p>
          <p>
            I learn best hands-on, so alongside my school projects I've built a number of personal ones.
          </p>
          
          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about