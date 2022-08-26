const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "N0"
    },
    {
        id: 1,
        name: "N1"
    },
];
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

app.post('/friends', (req, res) => {
    if(!req.body.name){
       return  res.status(400).json({
            error: "Missing friends name"
        });
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/friends', (req, res) => {

    res.json({friends});

});



// get/friends/22
app.get('/friends/:friendId', (req, res) => {

    const friendId = Number(req.params.friendId);

    const friend = friends[friendId];

    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}); 

app.get('/messages', (req, res) => {

    res.send('<ul><li>Helloo N</li></ul>');

});


app.post('/messages', (req, res) => {
    console.log("Updating messages");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

