const express = require('express')
const authVerify = require('./../middleware/authVerify')
const router = express.Router()
const { rate, createBooking, deleteBooking, updateBooking } = require('./../controllers/bookingCtrl')

router.post('/rate/:id', authVerify, rate)
router.post('/:id', authVerify, createBooking) //crear reserva
router.delete('/:id', deleteBooking) //cancelar reserva
router.put('/:id', updateBooking) // modificar reserva

module.exports = router