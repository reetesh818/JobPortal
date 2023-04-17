

const express =require('express')
const router = express.Router();
const multer  = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+'.pdf')
    }
});
const upload = multer({ storage: storage });



const {login,register,logout} = require('../controllers/auth')


router.post('/login',login)
router.post('/register',upload.single('resume'),register)
router.post('/logout',logout);



module.exports = router