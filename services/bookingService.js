const BookingModel = require ('./../models/bookingModel')

const create = async (bookingData, idExperience, idUser) => {
    try {
        bookingData.experience_id = idExperience
        bookingData.user_id = idUser
        const booking = await BookingModel(bookingData).save()
        return { status: 1, booking }
    } catch (error) {
        throw (error)
    }
}

const makeRate = async (rateData, idBooking, idUser) => {
    try{        
        const rateBooking = await BookingModel.updateOne({_id : idBooking},{rate: rateData.rate})
        return { status: 1, rateBooking }
    }catch(error){
        throw(error)
    }
}

module.exports = {
    makeRate,
    create
}