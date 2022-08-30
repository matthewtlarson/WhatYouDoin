const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wyd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;




// {
//   "firstName": "Ryan",
//   "lastName": "Rathbun",
//   "email": "ryrathb@testmail.com",
//   "password": "password12345",
//   "username": "ryrathb"
  
// },
// {
//   "firstName": "Andrew",
//   "lastName": "Tate",
//   "email": "highvaluemale@testmail.com",
//   "password": "password12345",
//   "username": "highvaluemale1"
  
// },
// {
//   "firstName": "Brandt",
//   "lastName": "Davidson",
//   "email": "bdavidson@testmail.com",
//   "password": "password12345",
//   "username": "bdavidson1"
  
// },
// {
//   "firstName": "Robby",
//   "lastName": "Pape",
//   "email": "robbyp6@testmail.com",
//   "password": "password12345",
//   "username": "robbyp6"
  
// },
// {
//   "firstName": "Denis",
//   "lastName": "Voia-tipei",
//   "email": "vtipei34@testmail.com",
//   "password": "password12345",
//   "username": "vtipei34"
  
// },
// {
//   "firstName": "Stephen",
//   "lastName": "Heinen",
//   "email": "shein78@testmail.com",
//   "password": "password12345",
//   "username": "shein78"
  
// },
// {
//   "firstName": "Maximus",
//   "lastName": "Cristian",
//   "email": "maxcris@testmail.com",
//   "password": "password12345",
//   "username": "maxcris"
 
// },