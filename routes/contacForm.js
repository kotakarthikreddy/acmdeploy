const express = require('express')
const router = express.Router();

const nodemailer = require("nodemailer");

router.post('/', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message

    console.log(name, email, message);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'acmvitap.in@gmail.com',
            pass: 'whsfjqvkokgdfnjm'
        }
      });
      
      var mailOptions = {
        from: email,
        to: 'acmvitap.in@gmail.com',
        subject: 'From ACM WEBSITE',
        text: message,
        html: `<h3>From: ${email}</h3> </br> Message: ${message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    res.json({ message: "success" })
})

module.exports = router;

// zvntwxdthsnyghzo