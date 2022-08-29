
const path = require('path'); // /folders/files.jpg 



function getMessages(req, res) {
    

    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
    // res.send('<ul><li>Hello N</li></ul>');
}

function postMessages(req, res){
    console.log("Updating messages");
}

module.exports = {
    getMessages, postMessages,
};