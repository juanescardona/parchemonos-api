
const createBooking = (req, res) =>{
    res.json({message: 'reservar'})
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
    updateBooking
}