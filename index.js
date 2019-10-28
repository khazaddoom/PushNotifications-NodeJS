const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

const keys = {
    publicKey : 'BN3P6Ki6_si9MMljnkhaT9p3XpNLWTtBU1sqSBN5rHBrCVhMaoLuQhl0yZHOLTYatka6pmfKh-W6FwaWvrmOy5Y',
    privateKey: 'gdVcgsEeVYUXdkIi0zWp1xLsoEIzW5m9TcI151QOxFo'
}


app.get('/', function(req, res) {
    res.send('<h1>Welcome...welcome..</h1>')
});


app.listen(3000);

