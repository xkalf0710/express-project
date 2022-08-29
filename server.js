const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;


// app.use odoo bgaa date start hasaad heden ms ajillaj bgaa hesgiig harch bolnoo npm run watch hiisen vildlvvdin harah  middleware harah bolomjtoi 
// get 
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.baseUrl}${req.url} ${delta}ms`);
});

//post req.body.name json hadgalaarai
app.use(express.json());

app.use('/friends',friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});