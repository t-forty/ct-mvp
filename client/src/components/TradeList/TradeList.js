import React from 'react'
import { Link } from 'react-router-dom'
import './TradeList.css'

const Trades = [ "Appliance Repair","Automotive Repair","Carpentry","Chef","CNC Machining","Commercial Diving","Commercial Maintenance","Construction & Building","Cosmetologist","Electrician","Gunsmithing","Heavy Equipment","Home Inspection","HVAC","Lineworker","Locksmithing","Marine & Watercraft","Plumbing","Small Engine Repair","Underwater Welding","Welding"]

function TradesList(props) {

    return (
        <div className='home-container'>
          <div className='trade-list'>
            {Trades.map((trade) => (
            <Link
            className='trade-link'
            to={{
                pathname: "/occupations/"+trade
            }}
            key={trade}
            >{trade}</Link>
            ))}
          </div>
        </div>
    )
}

export default TradesList