import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Some Important</h5>
      <h2>Courses</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Software Engineering</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify the stages of the Software Development Life Cycle.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Describe how the SDLC stages can be incorporated into a software development process.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify the characteristics of “lightweight” and “heavyweight” processes.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify the priorities of an agile software development process.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apply a specific agile process to develop a product as a team over the course of a term.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apply a specific agile process to develop a product as a team over the course of a term.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apply strategies such as TDD to ensure good test coverage and quality.</p>
            </li>

            
          </ul>
        </article>
        {/* END OF HCI */}

        <article className='service'>
          <div className='service__head'>
            <h3>Human Computer Interaction</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Describe the importance of user-centered design and describe factors that make design challenging (e.g., Designer’s fallacy)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identify the different phases of the UCD cycle. </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Human cognition and behaviour </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web-based interaction</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adaptable user interface.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information appliances.Example: PDA’s</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Prototyping complex user-interactions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Object-oriented, drag and drop, customizing controls, desktop environment, Java 2D/3D</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability evaluation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactions for users with disabilities, multimedia interfaces and interactions, information visualization, computer-supported co-operative work, interactive advice systems, on-line training, speech interfaces, wearable interfaces.</p>
            </li>

          </ul>
        </article>
        {/* END OF Softeng */}

        <article className='service'>
          <div className='service__head'>
            <h3>Computer Security</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Make use of standard cryptographic tools including symmetric encryption, key- exchange protocol, and secure random number generation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Exploit common Operating System vulnerabilities and show how to protect against those exploits.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learn how to securely authenticate a person/process and control resource access based on that authentication.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apply secure programming techniques, such as defensive programming and input sanitization, to the implementation of an application..</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Be introduced to common network-based attacks and how to secure network traffic.</p>
            </li>

          </ul>
        </article>
        {/* END OF Security */}
      </div>
    </section>
  )
}

export default Services