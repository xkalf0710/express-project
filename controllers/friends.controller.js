
const model = require('../models/friends.model');


function postFriends(req, res) {
    if(!req.body.name){
       return  res.status(400).json({
            error: "Missing friends name"
        });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    friends.push(newFriend);
    res.json(newFriend);
}

function getFriend(req, res) {

    res.json(model);

}

function getFriends(req, res){
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];

   if(friend){
       res.status(200).json(friend);

   }else{
       res.status(404).json({
           error: "Friend does not exits"
       });
   }
}


module.exports= {postFriends, getFriend, getFriends};