const jwt = require('jsonwebtoken')

const authVerify = (req, res, next) => {
    if(req.headers.authorization 
        && req.headers.authorization.split(' ')[0] === 'Bearer'){
            const token = req.headers.authorization.split(' ')[1] 
            try {
                const decoded = jwt.verify(token, process.env.SECRET)
                req.payload = decoded
            } catch (error) {
                res.status(401).send('Unauthorized')
            }
    } else{
        res.status(400).send('Token is mandatory')
    }
    next() //indica para que se ejecute la siguiente función, en este caso createBooking ó rate
}

module.exports = authVerify