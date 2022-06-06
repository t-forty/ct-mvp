import React from 'react'
import './Coding.css'
import image from '../../static/coder.jpg'

function Coding() {
  return (
  <div>
    <img src={image} alt="man coding" class="hero-img" />
    <div id="coding-content-container">
        <div id="page-desc">
            <h1>coding careers</h1>
            <p id="occupations-description">Coders and programers create applications using special computer code called a programming language. The three primary occupations that coders work in are software engineer, web developer, and mobile app developer. The lines between the three occupations have been blurred due to modern technology. A coder working in one field can easily crossover to another field. The opportunities are endless.</p>    
        </div>
        <ul id="occupations-list">
            <li>
                {/* <span class="material-icons-outlined md-24">
                    desktop_windows
                    </span> */}
                <div className='codingField'>
                    <h4>software engineer</h4>
                    <p>Software engineers create applications for desktop computers and other devices. Engineers are versatile coders and are usually highly educated computer scientists.<a href='occupations/software'>...more</a></p>
                </div>
            </li>
            <li>
                {/* <span class="material-icons-outlined">
                    language
                    </span>   */}
                <div className='codingField'>
                    <h4>web developer</h4>
                    <p>Web developers write code for websites and web apps. Modern technology allows web apps to also be converted to desktop, and/or mobile apps.
                    <a href='occupations/web-developer'>...more</a></p>           
                </div>              
            </li>
            {/* <li>
            <span class="material-symbols-outlined">devices</span>
                <div className='codingField'>
                    <h4>computer programmers</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, animi
                    <a href='occupations/computer-programmer'>...more</a></p>    
                </div>
            </li> */}
        </ul>
    </div>
  </div>
  )
}

export default Coding