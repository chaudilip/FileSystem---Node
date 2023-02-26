const http = require('http');
const fs = require('fs');
const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:"your@gmail.com",
        pass:"your password"
    }
});

let mailOptions = {
    from : "youremmail@gmail.com",
    to:"myfriend@gmail.com",
    subject:"Sending email using Node.js",
    text:"That was easy!"
}

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }else{
        console.log("Email send : " + info.response);
    }
});