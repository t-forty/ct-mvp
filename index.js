const express = require('express')
const app = express()
const cors = require('cors');

//const cors = require('cors')
const port = process.env.PORT || 5000

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const api = require('./middleware/api');

// url/occupations/13-2011.00 --> nurse occuptions
app.get('/:keycode/:code', api.getData);
app.post('/:keycode/:code', api.getData);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})