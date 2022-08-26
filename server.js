const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;


// app.use odoo bgaa date start hasaad heden ms ajillaj bgaa hesgiig harch bolnoo npm run watch hiisen vildlvvdin harah  middleware harah bolomjtoi 
// get 
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

//post req.body.name json hadgalaarai
app.use(express.json());

app.post('/friends', friendsController.postFriends);

app.get('/friends', friendsController.getFriends);

// get/friends/22
app.get('/friends/:friendId', friendsController.getFriend); 

app.get('/messages', messagesController.getMessages);
app.post('/messages',messagesController.postMessages);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

