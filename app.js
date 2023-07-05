const express = require('express');

 var app =express()

 const port = 3000;
app.listen(port,() => console.log(`server is listening on port ${port}..`))