const jwt = require('jsonwebtoken');

const checkAuthToken = (req, res, next) => {

    const token = req.header('x-auth-token');

    console.log(token)

    if(!token){
       return res.status(401).send({error: true, msg: "Not token found, Access denied"})
    }

    try {
        
        jwt.verify(token,process.env.JWTSECRET, (error, decoded) => {
            if(error) {
                res.status(401).send({error:true, msg: error.message})
            }else {
                req.user = decoded.user;
                next()
            }

        })


    } catch (error) {
        
        res.status(500).send({error: true, msg: error.message})

    }

}

module.exports = checkAuthToken;