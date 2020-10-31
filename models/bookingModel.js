const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    user_id: String,
    experience_id: String,
    booking_date: Date,
    comment: {type:String, trim: true},
    rate: {
        score: Number, 
        comment: {type:String, trim: true}}
})

const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel