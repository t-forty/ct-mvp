import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import './schools.css'
// REDUX
import { connect } from 'react-redux'
//
import Loading from '../Loading/Loading'

const axios = require('axios')
const B_TOKEN = "lxx3xBb9QkjgwWcMG7+q48Ll7B9qWAAIAcP+4IoNWv1sJr2vqNktORT+kUfXhSqKphk0aW3sxHqIUwFTWGiBcQ=="
const API_ID = "paUZLn1nDViasZB"

function Schools(props) {
    let navigate = useNavigate()
    const params = useParams()
    const trade = params.trade.includes('%20') ? params.trade.replace('%20', 'x') : params.trade
    // const API_URL = 'https://api.careeronestop.org/v1/training/'+API_ID+'/'+params.trade+'/'+props.zip+'/25/0/0/0/0/0/0/0/0/10'
    const API_URL = 'https://api.careeronestop.org/v1/training/'+API_ID+'/'+params.trade+'/'+props.zip+'/25/0/0/0/0/0/0/0/0/10'
    const [API, setAPI] = useState(null)
    useEffect(() => {
        const fetchData = async () => {    
            const config = {
                method: 'get',
                url: API_URL,
                headers: { 
                  'Authorization': 'Bearer ' + B_TOKEN 
                }
            };
            await axios(config)
            .then(function (response) {
                console.log(params.trade)
                setAPI(response)
                console.log(response)
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
        };
        fetchData()
    }, []);
    // let Job = API !== null ? API.data : null 
    return (
        <>
            {!API && <Loading />}
            {API && 
              <div id="schools">
                <h1>{params.trade} schools:</h1>
                {API.data.SchoolPrograms.map((school) => (
                    <div key={school.ID} class="school">
                        {/* <a href={school.SchoolUrl} class="schoolName">{school.SchoolName}</a> */}
                        {school.SchoolUrl.includes('http') && 
                                <a href={school.SchoolUrl} target='blank' class="schoolName">{school.SchoolName}</a>    
                            }
                            {!school.SchoolUrl.includes('http') && 
                                <a href={`https://`+school.SchoolUrl} target='blank' class="schoolName">{school.SchoolName}</a>
                            }
                        <ul class="schoolAddress">
                            <li className='contacts'>{school.Address}</li>
                            <li className='contacts'>{school.City}, {school.StateAbbr}</li>
                            <li className='contacts'>{school.Zip}</li>
                            <li className='contacts phone'>Phone: {school.Phone}</li>
                        </ul>
                        {school.Occupationslist &&
                        <div id="schoolOccupations">
                            <h4>Occupations:</h4>
                            <ul id="schoolOccupationsList">
                                {school.Occupationslist.map((occ) => (
                                    <li>{occ.Name}</li>
                                ))}
                            </ul>
                            {school.SchoolUrl.includes('http') && 
                                <a href={school.SchoolUrl} target='blank' class="schoolUrl">visit site</a>    
                            }
                            {!school.SchoolUrl.includes('http') && 
                                <a href={`https://`+school.SchoolUrl} target='blank' class="schoolUrl">visit site</a>
                            }
                        </div>
                        }
                    </div>
                ))}
              </div>
            }
        </>
  )
}
const mapStateToProps = (state) => {
    return { 
        state: state.location.state, 
        zip: state.location.zip
    }
}

export default connect(mapStateToProps)(Schools)