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
    review: "Worked with a team in a fast paced environment to assist stake holders  with their concerns. Provided tailored solution to better assist them and made sure to keep information and details confidential. Worked on different projects to increase team productivity, overall performance and helped mentor a lot of new colleagues so they can thrive in their roles.",
  },

  {
    avatar: AVTR2,
    name:"Coding",
    review: "I am passionate about programming. I take challenges and complete goals. I have made a lot of personal projects to practice my skills and enrich my proficiency in certain topics. I have worked to create a lot of clone websites and also worked to create software that help me benefit my day to day work. ",
  },

  {
    avatar: AVTR3,
    name:"Hiking",
    review: "I am passionate about hiking. I mostly hike solo, but have hiked in groups as well. I find nature to be very alluring and relaxing. I often hike to destress and meditate. I have hiked in a lot of placed throughout Canada. I found Banff Moraine lake at dawn and Athabasca falls at dusk to be the very calming and very picturesque. ",
  },

  {
    avatar: AVTR4,
    name:"Reading",
    review: "I like to read on current affairs and self improvements books. I listen to podcasts and audio books on my commute, during walks or gym. I believe a good book can help debunk lot of life problems and give a fresh perspective on life or the problem. I also read manga on my free time. My current favourite book to read now is Your Next Five Moves, and my favourite manga is One piece.",
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