function getMessages(req, res) {
    res.send('<ul><li>Hello N</li></ul>');
}

function postMessages(req, res){
    console.log("Updating messages");
}

module.exports = {
    getMessages, postMessages,
};