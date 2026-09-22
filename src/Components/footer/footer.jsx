import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sheikh Shafayet Hossain</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Courses</a></li>
        <li><a href="#testimonials">Work Experience and Hobbies</a></li>
        <li><a href="#contacts">Contact</a></li>
        
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF/></a>
        <a href="https://instagram.com" aria-label="Instagram"><FiInstagram/></a>
        <a href="https://twitter.com" aria-label="Twitter"><IoLogoTwitter/></a>
      </div>

      
    </footer>
  )
}

export default footer