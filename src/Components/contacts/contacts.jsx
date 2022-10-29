import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {UseRef} from 'react';
import emailjs from 'emailjs-com'

const contacts = () => {
  //const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('service_tauc6rs', 'template_e8no7el', form.current, 'qH-_y1xnoszKJMNEn')

    e.target.rest()
  };
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hossaiss@outlook.com</h5>
            <a href='mailto:hossaiss@outlook.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sheikh Shafayet Hossain</h5>
            <a href='https://m.me/sadithossain'target='_blank'>Send me a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href='hptts://api.whatsapp.com/send?phone=+14319990690' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of Contact option */}
        {/* <form ref ={form} onSubmit = {sendEmail}> */}
        <form action="https://formsubmit.co/42dad2c0370b2b7c495df19efbaeacd2" method="POST"> 
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Full Name' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contacts