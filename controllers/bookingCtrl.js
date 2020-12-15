const { create, makeRate } = require('./../services/bookingService')

const createBooking = async (req, res) =>{
    try {
        const idExperience = req.params.id
        const bookingData = req.body
        const userId = req.payload.idUser
        const response = await create(bookingData, idExperience, userId)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const rate = async (req,res) => {
    try {
        const idBooking = req.params.id
        const rateData = req.body
        const userId = req.payload.idUser
        const response = await makeRate(rateData, idBooking, userId)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBooking = (req, res) =>{
    res.json({message: 'cancelar'})
}

const updateBooking = (req, res) =>{
    res.json({message: 'modificar reserva'})
}

module.exports = {
    createBooking,
    deleteBooking,
    updateBooking,
    rate
}