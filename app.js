const express = require('express');
const config = require('./config/config');
const dbconnect = require('./config/dbconnect')
 var app =express()
 dbconnect.getdbconnection();

 const port = 3000;
app.listen(port,() => console.log(`server is listening on port ${port}..`))

require('./routes/school_trade')(app)