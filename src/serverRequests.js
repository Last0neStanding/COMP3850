import axios from 'axios'
import { censorMessage, checkMessage } from 'chat-censoring'
const baseUrl = 'http://localhost:8102/'

const registerNewUser = (type, userPrefix, firstName, lastName, BoD, email, password) => {
    // if(checkMessage(newUserName)){
    //   alert("Invalid Username - Username must not contain inappropriate language")
    //   console.log({status: "failure", message: "Username must not contain any inappropriate words."})
    //   return
    // }
    const request = {
        type: type,
        userPrefix: userPrefix,
        firstName: firstName,
        lastName: lastName,
        BoD: BoD,
        email: email,
        password: password
    }
    return axios.post(baseUrl + "auth/register", request)
      .then(response => response.data)
      .catch(err => console.log(err))
}

const loginUser = (email, password) => {
  const request = {"email": email, "password": password}
  return axios.post(baseUrl + "auth/login", request)
    .then(response => response.data)
    .catch(err => console.log(err))
}

const serverRequests = {
    registerNewUser,
    loginUser
}

export default serverRequests