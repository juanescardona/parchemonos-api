const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: String,
    phone: String,
    email: {type: String, unique: true, required: true},
    password: String,
    document: String
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel