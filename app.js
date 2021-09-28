const express = require('express')
const app = express()
const axios = require('axios');

require('dotenv').config()

// static files
app.use(express.static("public"))
app.use('/css', express.static("public/css"))
app.use('/images', express.static("public/images"))

// render engine configuration
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{

  let context = {}

  axios.get('https://api.myip.com/')
  .then( (response) => {
    // handle success
    context.ip = response.data.ip;
    context.location = response.data.country;
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${response.data.country}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`)
    .then( (response) => {
      context.lon = response.data[0].lon;
      context.lat = response.data[0].lat;
    })
    .catch( (error) =>{
      // handle error
      console.log(error);
    }).then( () =>{
      console.log(context);
      res.render('index' , context);
    } );
  })
  .catch( (error) =>{
    // handle error
    console.log(error);
  });
})

app.get('/api', (req, res) =>{
  let data = {}

  let re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
  

  // check if send data is IP or domain
   if ( /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(req.query.ip)){
    //IP
    axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${req.query.ip}`)
    .then( (response) => {
      data.ip = response.data.ip
      data.location = response.data.location.city + ', ' + response.data.location.country + ' ' + response.data.location.postalCode
      data.timezone = response.data.location.timezone
      data.isp = response.data.isp
    })
    .catch( (error) =>{
      // handle error
      console.log(error);
    }).then( () =>{
      res.json(data);
    } );
   }else if( req.query.ip.match(re) ){
    //domain
    axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}&domain=${req.query.ip}`)
    .then( (response) => {
      data.ip = response.data.ip
      data.location = response.data.location.city + ', ' + response.data.location.country + ' ' + response.data.location.postalCode
      data.timezone = response.data.location.timezone
      data.isp = response.data.isp
    })
    .catch( (error) =>{
      // handle error
      console.log(error);
    }).then( () =>{
      res.json(data);
    } );
   }



})

// start server
app.listen(3000)