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
            <img src={ME} alt="About Image"/>
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
          Hello! I am Sheikh Shafayet Hossain I am a computer science graduate from the University of Manitoba. I am highly organized and detail oriented about my field of work and my life. I have had experience handling clients and their expectations. I have helped stakeholders resolve their concerns by providing tailored solutions to them.  I am proficient in handling complex and sensitive information regarding college and clients. I have worked in a fast paced team managing multiple priorities and multiple deadlines with minimal supervision. I learn best with hands on experience, hence I have worked on a few personal projects while working on my school required projects.
          </p>
          
          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about