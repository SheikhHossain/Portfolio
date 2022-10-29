import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experince</h2>

      <div className='continer experience__container'>
        <div className="experince__frontend">
        <h3>Frontend Developement</h3>
          <div className='experience__content'>


            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon' />
               <div>
                <h4>JavaScript</h4>                            
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon' />
               <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon' />
               <div>
                <h4>MarkDown</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon' />
               <div>
                <h4>YMAL</h4>
                <small className='text-light'>Basic</small>
               </div>
            </article>
          </div>
        </div>
{/* End of Front end */}
        <div className="experince__backend">
          <h3>Backend Developement</h3>
          <div className='experience__content'>

          <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>C#</h4>
                <small className='text-light'>Basic</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>Java</h4>                            
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>JSON</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>Swagger</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>


          </div>
        </div>

        <div className="experince__ToolKits">
          <h3>Querry Langauges</h3>
          <div className='experience__content'>

          <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>SQLlite3</h4>
                <small className='text-light'>Beginner</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>SQL Alchemy</h4>                            
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            


          </div>
        </div>

        <div className="experince__ToolKits">
          <h3>Toolkits</h3>
          <div className='experience__content'>

          <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>Figma/Protopie</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>MS Visual Studio</h4>
                <small className='text-light'>Beginner</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>XCodes</h4>
                <small className='text-light'>Basic</small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>JetBrains</h4>                            
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            


          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience