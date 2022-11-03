const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const cookieParser = require('cookie-parser')
const notifier = require('node-notifier')
const cors = require('cors')

const router = require('./routes')
const config = require('./config')

function errorNotification (err, str, req) {
  var title = 'Error in ' + req.method + ' ' + req.url

  notifier.notify({
    title: title,
    message: str
  })
}

const port = process.env.PORT || 5000;
const app = express();
app.use(morgan('dev'))
app.use(express.json());
var allowedOrigins = ['http://localhost:3000','https://group-project-group-o.herokuapp.com'];
app.use(cors({
  credentials: true,
  // origin: config.corsClientDomain
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}))
// app.use(require("./routes/record"));
// get driver connection
// const dbo = require("./db/conn");
 
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler({ log: errorNotification }))
}
app.use(cookieParser(config.sessionSecret))

app.use(express.static('build'))
app.use('/', router)



module.exports = app