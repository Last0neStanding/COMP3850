const express = require('express')
const auth = require('./controllers/auth')
// const msg = require('./controllers/msg')
const multer  = require('multer')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/build/index.html'));
// });
router.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

router.post('/auth/register', auth.registerUser)
router.post('/auth/login', auth.loginUser)


module.exports = router 