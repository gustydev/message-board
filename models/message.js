const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {type: String, required: true, maxLength: 240, minLength: 1},
    user: {type: String, required: true },
    added: {type: Date}
});

module.exports = mongoose.model('Message', MessageSchema);