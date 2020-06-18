
//set up server//

const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;


//data parsing//

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post('/email', (req, res) => {
    //  TODO:
    // send email here //
    const {subject, email, text} = req.body;
    console.log('Data: ', req.body);  
    
    sendMail(email, subject, text, function(err, Data){
        if(err) {
            res.status(500).json({message: 'internal error'});
        } else {
            res.json({message: 'message recieved'});
        }
    });
});


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
})

app.listen(PORT, () => log('server is starting on port, ',8080));


