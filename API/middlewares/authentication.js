const config = require('../routes/config')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs');
const Admin = {
    email: 'admin',
    password: 'admin',
    role: 'admin'
}

exports.isValidation = (req,res,next) => {
    if(!req.body.email){
        res.status(404)
        res.error("You need to input your email");
    }else if(!req.body.password){
        res.status(404)
        res.error("You need to input your password");
    }
    next();
}

exports.isCredential = async (req,res,next) => {
    const token = jwt.sign(Admin,config.authentication.jwtSecret);
    if(req.body.email === Admin.email && req.body.password === Admin.password){
        res.cookie("access_token",token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({
            message: "login successfully 😊 👌",
            user: Admin,
        })
        next();
    }else{
        return res.status(403).send({error: 'Your account does not exist.'});
    }
}

exports.isToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(token==''){
        return res
                .sendStatus(401)
                .json({message: "you cannot get user information."})
        }
    else{
        const verified = jwt.verify(token,config.authentication.jwtSecret);
        if(verified){
            next();
        }else{
            res.status(400).send('Invalid Token');
        }
    }
}