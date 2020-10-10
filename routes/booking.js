const express = require('express')
const router = express.Router()
const { createBooking, deleteBooking, updateBooking } = require('./../controllers/bookingCtrl')


router.post('/:id', createBooking) //crear reserva
router.delete('/:id', deleteBooking) //cancelar reserva
router.put('/:id', updateBooking) // modificar reserva

module.exports = router