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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aspernatur alias excepturi saepe harum consectetur magni ratione reprehenderit repellat, a amet ab. Impedit quasi vel voluptate facilis enim libero facere?
          </p>
          
          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about