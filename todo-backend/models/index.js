const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todo-app',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Mongodb Connected...."))
.catch((err) => console.log(err));
mongoose.set('debug', true);
mongoose.Promise = Promise;

//console.log('savinf stuff');
module.exports.Todo = require("./todo");