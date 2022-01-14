/** Example API urls
 * Occupations (List occs. in industry): 
 * *  https://api.careeronestop.org/v1/occupation/API_ID/:keycode/Y/0/100
 * Occupation (Job Desc.):
 * *  https://api.careeronestop.org/v1/jdw/API_ID/:code/:location/0    // location = STATE
 * Job Search: 
 * * https://api.careeronestop.org/v1/jobsearch/API_ID/:keycode/:location/:radius/0/0/0/pagesize/days?source=NLx&showFilters=false
 * Schools Search:  
 * * https://api.careeronestop.org/v1/training/API_ID/:keycode/:location/:radius/0/0/0/0/0/0/0/0/:recordlimit
*/

/* **** REQ.PARAMS AND BODY KEYS ****
    ex: Onetcode == 47-2111.00 
    keycode: either keyword or Onetcode
    code: Onetcode
    location: city,state; state; zip --> 'occupation' must use STATE
    radius: mile radius from location
    recordlimit: max records in list
*/
const axios = require('axios');

// .env variables
const dotenv = require('dotenv').config();
const API_ID=process.env.API_ID;
const B_TOKEN = process.env.API_KEY;

// response variable
let jobs;

//Axios config
const config = {
    method: 'get',
    headers: { 
      'Authorization': 'Bearer ' + B_TOKEN 
    }
};

exports.getData = (req, res)=>{
    const body = req.body.data;
    
    // BUILD CONFIG URL WITH REQ.PARAMS/BODY
    const urls = {
        /**
         * base + other-key = config url
         */
        base: 'https://api.careeronestop.org/v1/',
        occupations: 'occupation/'+API_ID+'/'+req.params.code+'/Y/0/100',
        occupation: 'jdw/'+API_ID+'/'+req.params.code+'/'+body.location+'/0',
        jobs: 'jobsearch/'+API_ID+'/'+req.params.code+'/'+body.location+'/'+body.radius+'/0/0/0/100/30?source=NLx&showFilters=false',
        schools: "training/"+API_ID+"/"+req.params.code+"/"+body.location+"/"+body.radius+"/0/0/0/0/0/0/0/0/"+body.recordlimit+""
                // training/paUZLn1nDViasZB/47-2111.00/95688/25/0/0/0/0/0/0/0/0/20
    }
    const url = urls.base + urls[req.params.keycode];   // Build URL
    config.url = url;   // add URL to config for api call
    console.log(url);
    // API CALL
    axios(config)
    .then(function (response) {
      data = JSON.stringify(response.data);
      res.send(data)
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
    
   console.log(req.body);
   //res.send(url);
};