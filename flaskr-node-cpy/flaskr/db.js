var mongoose = require('mongoose');

var Schema = mongoose.Schema

var flaskrSchema = new Schema({
    user: {
        user_id: Number,
        username: String,
        password: String,

    },

    post: {
        
    },

});