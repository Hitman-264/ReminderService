const cron = require('node-cron');
const emailService = require('../services/email_service');
const sender = require('../config/emailConfig');
/**
 * notificaton to be sent at 10 am
 * every 5 minutes we will run cron job
 * We will check whether there is any pending emails which was expectd
 * to be sent by now and is pending.
 */

const setupJobs =  () =>{
    cron.schedule('*/1 * * * *', async ()=>{
        const response = await emailService.fetchPendingEmails();
        console.log(response);
        response.forEach((email) =>{
           sender.sendMail({
                to: email.recipientEmail,
                subject : email.subject,
                text: email.content,
           }, async(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailService.updateTicket(email.id, {status: "SUCCESS"});
                }
           });
        })
        console.log(response);
    })
}

module.exports=setupJobs;