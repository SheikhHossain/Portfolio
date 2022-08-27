import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://sheikhhossain.github.io/HOSSAISS.github.io/" className='btn btn-primary'>Online CV</a>
    </div>
  )
}

export default CTA