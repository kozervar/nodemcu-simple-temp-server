const express = require('express')  
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/static', express.static('public'))

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.appName = 'SimpleServer'
  next()
})

var insideTemp = '';
var outsideTemp = '';

app.get('/', (request, response) => {  
  response.json({
    insideTemp: insideTemp,
    outsideTemp: outsideTemp
  })
})

app.post('/', (request, response) => {  
  console.log(request.body);
  insideTemp = request.body.insideTemp;
  outsideTemp = request.body.outsideTemp;
  response.json();
});

var PORT = 3000;
app.listen(PORT) 

console.log("Server is listening on " + PORT);
