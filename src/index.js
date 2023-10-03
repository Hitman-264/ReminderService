const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const serverConfig = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email_service');

const setupAndStartServer = function () {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
    })

    // sendBasicEmail(
    //     'nservice679@gmail.com',
    //     '21053287@kiit.ac.in',
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the support'
    // )
}

setupAndStartServer();