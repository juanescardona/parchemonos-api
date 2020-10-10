const { getAll, findById, getRanking, makeRate} = require('./../services/experienceService')

const all = (req, res) =>{
    const response = getAll()
    res.json(response)
}

const detail = (req, res) =>{
   try{
    const id = Number(req.params.id)
    const response = findById(id)
    res.json(response)
   }catch(err){
       res.status(404).send(err)
   }
}

const ranking = (req, res) =>{
    const response = getRanking()
    res.json(response)
}

const rate = (req, res) =>{
    res.json({message: 'calificación'})
}

module.exports = {
    all,
    detail,
    ranking,
    rate
}