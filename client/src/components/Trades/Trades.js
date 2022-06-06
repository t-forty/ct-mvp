import React from 'react'
import './Trades.css'
import image from '../../static/construction.jpg'
import TradeList from '../TradeList/TradeList'

function Trades() {
  return (
    <div id="content-container">
        <img src={ image } alt="man coding" class="hero-img" />
        <div id="trades-content-container">
          <div id="page-desc">
              <h1>Trades</h1>
              <p id="occupations-description">Electrician, Plumber, and Construction Worker are examples of skilled trades. Trades are occupations that typically require manual skills and special training.</p>    
          </div>
        </div>
        <TradeList />
    </div>
  )
}

export default Trades