const { create, makeRate } = require('./../services/bookingService')

const createBooking = async (req, res) =>{
    try {
        const idExperience = req.params.id
        const bookingData = req.body
        const response = await create(bookingData, idExperience)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const rate = async (req,res) => {
    try {
        const {rate, _id} = req.body
        const response = await makeRate(rate, _id)
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