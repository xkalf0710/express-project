const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

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

// serving 
app.use('/site', express.static(path.join(__dirname, 'public')));

//post req.body.name json hadgalaarai
app.use(express.json());

app.get('/', (req, res) => {

    res.render('index', {
        title: "My Friends", 
        caption: 'let\s go sking',
    });
});

app.get('/', (res, req) => {

});

app.use('/friends',friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});