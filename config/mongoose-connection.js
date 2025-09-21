const mongoose = require('mongoose');


main().then(() => {
    console.log("Connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/scatch');
}

module.exports = mongoose.connection;