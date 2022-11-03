const mongoose = require('mongoose')
const config = require('../config')


const userSchema = new mongoose.Schema({
  //type, userPrefix, firstName, lastName, BoD, email, password
  type: {type: String},
  userPrefix:{type: String},
  firstName:{type: String},
  lastName:{type: String},
  BoD:{type: String},
  email:{type: String, unique: true},
  password: {type: String, unique: true}
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = mongoose.model('User', userSchema)


const msgSchema = new mongoose.Schema({
  text:      {type: String},
  sender:    {type: String},
  receiver:    {type: String},
  msgID:    {type: String}
}, {
  timestamps: true
})

msgSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = document._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const MSG = mongoose.model('MSG', msgSchema)


// const postSchema = new mongoose.Schema({
//     author: {type: String},
//     title: {type: String},
//     content: { data: Buffer, contentType: String},
//     filename: {type: String},
//     likes: [{type: String}],
//     dislikes: [{type: String}],
//     category: {type: String}
//   }, {
//     timestamps: true
//   })  

// const Post = mongoose.model('Post', postSchema)

const initDB = async () => {
    await mongoose
        .connect(config.mongoDBUrl)
        .catch((error) => {    
            console.log('error connecting to MongoDB:', error.message)  
        })
    }

module.exports = {User, MSG,  initDB }
