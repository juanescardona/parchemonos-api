const EXPERIENCE_REPO = require('../repository/experienceRepository')

const getAll = () => {
    return { status: 1, 'list': EXPERIENCE_REPO}
}

const findById = (id) => {
    //Se pone abajo triple igual para que compare si es del mismo tipo el dato id
    const experience = EXPERIENCE_REPO.find(item => item.id === id)
    if(experience == undefined) throw ('experience not found')
    return { status: 1, experience} //'experience': experience
}

const getRanking = () => {
    const experienceSorted = EXPERIENCE_REPO.sort((a, b) => {
        if (a.score < b.score) return 1
        if (a.score > b.score) return -1
        return 0
    })
    const ranking = experienceSorted.slice(0, 5)
    return {status: 1, ranking}
}

const makeRate = (id, rate, idUser) => {
    
}

module.exports = {
    getAll,
    findById,
    getRanking,
    makeRate
}