//zamchlal deeree friends zaagaad ogchhson tohioldold post, get friends gej bichh shaardlagaf 
// app.use('/friends', friendsRouter) ashiglana 

const express = require('express');
const friendsController = require('../controllers/friends.controller');
const friendsRouter = express.Router();


friendsRouter.use((req, res, next) => {

console.log('ip address',req.ip);
next();
});



friendsRouter.post('/', friendsController.postFriends);

friendsRouter.get('/', friendsController.getFriends);

// get/friends/22
friendsRouter.get('/:friendId', friendsController.getFriend); 

module.exports = friendsRouter;
