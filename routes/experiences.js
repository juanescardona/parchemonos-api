const express = require('express')
const router = express.Router()
const { all, ranking, detail, create } = require('./../controllers/experienceCtrl')


router.get('/', all) //obtener todas las experiencias
router.get('/ranking', ranking)
router.get('/detail/:id', detail)
router.post('/', create)

module.exports = router