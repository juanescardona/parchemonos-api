const BookingModel = require ('./../models/bookingModel')

const create = async (bookingData, idExperience) => {
    try {
        bookingData.experience_id = idExperience
        const booking = await BookingModel(bookingData).save()
        return { status: 1, booking }
    } catch (error) {
        throw (error)
    }
}

const makeRate = async (rate, idReserva) => {
    try{
        const rateBooking = await BookingModel.updateOne({_id: idReserva},{rate: rate})
        return { status: 1, rateBooking }
    }catch{
        throw(error)
    }
}

module.exports = {
    makeRate,
    create
}