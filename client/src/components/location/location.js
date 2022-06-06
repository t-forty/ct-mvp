import React, { useState } from 'react'

import { useDispatch, connect} from 'react-redux'
import { changeLocation } from '../../app/locationSlice';
//import Button from '@mui/material/Button';
import './location.css'
function Location(props) {
    let LocState = props.state
    let LocZip = props.zip
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const values = event.target;
        dispatch(changeLocation({ 
                state: values.state.value, 
                zip: values.zip.value  
            }
          ));
        const userLocaltion = {
            state: values.state.value,
            zip: values.zip.value
        }
        localStorage.setItem('location', JSON.stringify(userLocaltion))
        //toggleForm()
        window.location.reload()
    };
    const [LocForm, setLocForm ] = useState(false)

    const toggleForm = () =>{
       LocForm ? setLocForm(false) : setLocForm(true)
     }  
    return (
    <div id="location">
        {!LocForm && 
        <div id="location-text">
            <span>near</span>
            <span className='zip-state-text' onClick={() =>{
                    toggleForm()
                }}>{LocZip}, {LocState}  </span>
        </div>}
        {LocForm && 
        <form onSubmit={handleSubmit}>
                <label >
                    Zip:
                    <input type="text" name="zip" className='zip'/>
                </label>
                <label >
                    State:
                    <input type="text" name="state" className='state'/>
                </label>
                <button onClick={() => {
                    toggleForm()
                }} className="cancel">cancel</button>
                <input type="submit" value="Submit" className='submit' />
            </form>
        }
        
    </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        state: state.location.state, 
        zip: state.location.zip
    }
}

export default connect(mapStateToProps)(Location)
