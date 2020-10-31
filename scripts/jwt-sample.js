const jwt = require('jsonwebtoken')

const payload ={
    id: 12345,
    user: 'Juan',
    role: 'admin',
    isValid: true
}

const secret = 'miclaveSuperSecreta2020*'

const options = {
    expiresIn: '1ms'
}

const token = jwt.sign(payload, secret, options)

console.log('token', token)

const tokenFalso = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDUsInVzZXIiOiJKdWFuIiwicm9sZSI6ImFkbWluIiwiaXNWYWxpZCI6dHJ1ZSwiaWF0IjoxNjA0MTU4NjA3LCJleHAiOjE2MDQxNTg2MDd9.00xL49IbYZINV39D0y69p6CMvUGb3aVDFqczIE6RBR8'

//Verificar el token
setTimeout(() =>{
    try {
        const decoded = jwt.verify(tokenFalso, secret)
        console.log('decoded', decoded)
    } catch (error) {
        console.log('error:name', error.name)
        console.log('error:message', error.message)
    }    
}, 1000)