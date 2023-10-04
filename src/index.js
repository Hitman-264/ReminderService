const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const serverConfig = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email_service');
const TicketController = require('./controllers/ticket_controller');
const jobs = require('./utils/job');

const setupAndStartServer = function () {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.post('/api/v1/tickets', TicketController.create );

    app.listen(PORT, ()=>{
        console.log(`Server started on ${PORT}`);
        jobs();
    })

    // sendBasicEmail(
    //     'nservice679@gmail.com',
    //     '21053287kiit.ac.in',
        
    //      'This is a testing email',
    //      'Hey, how are you, I hope you like the support'
    // )
}

setupAndStartServer();