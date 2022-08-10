import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AVTR1,
    name:"Skipthedishes",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti dolores est tempora accusantium laudantium commodi adipisci eos blanditiis. Fuga optio dolorem officiis quis assumenda modi vel nesciunt error repudiandae.",
  },

  {
    avatar: AVTR2,
    name:"Skipthedishes",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti dolores est tempora accusantium laudantium commodi adipisci eos blanditiis. Fuga optio dolorem officiis quis assumenda modi vel nesciunt error repudiandae.",
  },

  {
    avatar: AVTR3,
    name:"Skipthedishes",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti dolores est tempora accusantium laudantium commodi adipisci eos blanditiis. Fuga optio dolorem officiis quis assumenda modi vel nesciunt error repudiandae.",
  },

  {
    avatar: AVTR4,
    name:"Skipthedishes",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti dolores est tempora accusantium laudantium commodi adipisci eos blanditiis. Fuga optio dolorem officiis quis assumenda modi vel nesciunt error repudiandae.",
  }
]

const testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Some of my</h5>
      <h2>Work Experince And Hobbies</h2>

      <Swiper className="container testimonials_continer" // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })
        } 
        
      </Swiper>
    </section>
  )
}

export default testimonial