const fs = require('fs');



const logDB = (req, res, next) => {
    fs.appendFileSync("users.txt", "Foi criado um Usuário " + req.url + " " + new Date() + "\n");
    next();
};










module.exports = logDB;