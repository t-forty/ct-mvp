import React from 'react'
import MainHero from '../Hero/MainHero'
import HeroImg from '../Hero/img/welder.jpg'
import './Home.css'
function Home() {
  return (
    <div>
        {/* <div id="main-hero">
            <div id="main-hero-content-container">
                <p>
                    <span class="lead">Looking for a good paying career without a college degree?</span> Explore opportunities in coding and skilled trades.
                </p>
                <button id="hero-button">Learn more</button>
            </div>
        </div> */}
        <MainHero />
        <article className="options">
            <section className="option">
                <div>
                    <h3>software & coding</h3>
                    <p>Software engineers, web developers, and mobile app developers write code to create applications that consumers use for banking, social media, education and more</p>    
                    <a href="http://localhost:3000/coding">Learn more about coding</a>
                </div>
            </section>
            <section className="option">
                <h3>skilled trades</h3>
                <p>Electrician, Plumber, and Construction Worker are examples of skilled trades. Trades are occupations that typically require manual skills and special training.</p>
                <a href="http://localhost:3000/trades">find a trade</a>
            </section>
        </article>
    </div>
  )
}

export default Home