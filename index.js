const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Serve a static path using express
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const keys = {
    publicKey : 'BN3P6Ki6_si9MMljnkhaT9p3XpNLWTtBU1sqSBN5rHBrCVhMaoLuQhl0yZHOLTYatka6pmfKh-W6FwaWvrmOy5Y',
    privateKey: 'gdVcgsEeVYUXdkIi0zWp1xLsoEIzW5m9TcI151QOxFo'
}

webpush.setVapidDetails('mailto:test@test.com', keys.publicKey, keys.privateKey);


app.post('/subscribe', function(req, res) {
    
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({ 'title' : 'Push Test' });

    webpush.sendNotification(subscription, payload).catch(err => console.error(err))

})

const port = 5000;
app.listen(port, () => console.log(`Server started and listening on Port ${port}...`));

