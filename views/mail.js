const nodemailer = require('nodemailer');

const mailgun = require('nodemailer-mailgun-transport');


const auth= {
    auth: {
        api_key: '6cb29e75a3504f1d050f6f30b5968e36-a2b91229-38ecdfea',
        domain: 'sandbox914e4c2eae05434e8407fd73d3bb4089.mailgun.org'
    }
};


const transporter = nodemailer.createTransport(mailgun(auth) );

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'damanibeckford18@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(err, Data){
        if(err) {
            cb(err, null);
        } else{
            cb(null, Data);
        }

    });
}
module.exports = sendMail;

