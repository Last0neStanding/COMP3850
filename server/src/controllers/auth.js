const models = require('../models')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')


const loginUser = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    console.log('email ',email)
    console.log('password ',password)

    try {
        const match = await models.User.findOne({email: email})
        if (match) {
            if (await bcrypt.compare(password, match.password)) {
                console.log('yes')
                response.json({
                    status: "success",
                    type: match.type,
                    email: match.email,
                    token: match._id,
                    userPrefix: match.userPrefix,
                    firstName: match.firstName,
                    lastName: match.lastName,
                })
                return
            } else {
                console.log('password wrong')
                response.json({
                    status: "unsuccessful",
                    message: "Incorrect Password"
                })
                return
            }
        } else {
            console.log('account not found')
            response.json({
                status: "unsuccessful",
                message: "User not found"
            })
            return
        }
    } catch(err) {
        console.log(err)
    }

    response.json({status: "unsuccessful"})
}


/* Create a new user */
const registerUser = async (request, response) => {
    //type, userPrefix, firstName, lastName, BoD, email, password
    let newUser
    await bcrypt.hash(request.body.password,10).then(passwordHash => {
        newUser = new models.User({
            type: request.body.type,
            userPrefix: request.body.userPrefix,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            BoD: request.body.BoD,
            email: request.body.email,
            password: passwordHash
        })
    })
    console.log("newUser",newUser)
    const returned = await newUser.save()
        .catch((err) => {
            console.log(err)
            response.json({
                status: "email taken",
                error: err})
            })
    console.log("returned",returned);
    if (returned) {
        console.log("newUser",newUser)
        if (newUser._id) {
            response.json({
                status: "success",
                email: returned.email,
                token: returned._id
            })
            return
        }
    }
}


const getUser = async (request, response) => {
    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const token = authHeader.substring(6)
        try {
            // this will throw an error if token isn't of the right format
            const match = await models.User.findById(token)  
            if (match) {
                response.json({
                    status: "success",
                    type: match.type,
                    email: match.email,
                    token: match._id,
                    userPrefix: match.userPrefix,
                    firstName: match.firstName,
                    lastName: match.lastName,
                })
                return
            }
        } catch(err) { }

    }
    response.json({status: "unregistered"}) 
    return
}


const getUserAuthToken = async (request, response) => {
    let match
    await models.User.findOne({email: request.body.email})
    .then(res => match = res)
    .catch(err => {
        console.log(err)
        return;
    })
    if(match == null){
        response.json({
            status: "Failure",
            reason: "Account does not exist"
        })
        return;
    }
    
    const passwordCorrect = await bcrypt.compare(request.body.password, match.password)
    console.log('Given Password ', request.body.password)
    if(passwordCorrect){
        response.json({
            status: "success",
            email: match.email,
            token: match._id
        })
        return
    } else {
        response.json({
            status: "Failure",
            reason: "Incorrect Password"
        })
        return
    }
}

/* 
 * validUser - check for a valid user via Authorization header
 *   return the email if found, false if not
*/
const validUser = async (request, reponse) => {
    try {
        var authHeader = request.get('Authorization')
        if (!authHeader) {
            authHeader = request.body.Authorization
        }
        if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
            const token = authHeader.substring(6)        
            const match = await models.User.findOne({_id: token})  

            if (match) {
                return match
            }
        }
    } catch {}
    return false
}

const getUserProfile = async (request, response) => {
    const authHeader = request.get('Authorization')
    const profile = request.params.id
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const match = await models.User.findOne({email: profile})  
        if (match) {
            response.json({
                email: match.email,
                token: match._id
            })
            return
        }
    }
    return false
}

module.exports = { validUser, getUser, loginUser, registerUser, getUserAuthToken, getUserProfile }
