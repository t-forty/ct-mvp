import React from 'react';
import Location from '../location/location.js'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import './SearchHeader.css'
function SearchHeader(props) {
  const navigate = useNavigate()
  return (
    <div id="SearchHeader">
        <span id='searchTitle'>{props.title}</span>
        <div className='search-option'   
            onClick={ () => { navigate("/jobs/"+props.title) }}
                >Jobs
        </div>
        <span>or</span>
        <div   className='search-option' 
            onClick={ () => { navigate("/schools/"+props.title) }}
                >Schools
        </div>
        <Location />

    </div>
    )
}

export default SearchHeader;
