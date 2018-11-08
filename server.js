const express = require('express');
const bp = require('body-parser');
const app = express();
const path = require('path');
const serverPort = 8000;


app.use(bp.json());
app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/node_modules/angular")));
app.use(express.static(path.join(__dirname, "/node_modules/angular-route")));
require('./server/config/mongoose');
(require('./server/routes/sampleRoutes'))(app);
app.listen(serverPort, ()=> {
    console.log(`Now Listening on port ${serverPort}`);
})