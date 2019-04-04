var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    }]
});

module.exports = mongoose.model('post', PostSchema);
