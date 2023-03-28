const express = require('express')
const router = express.Router()

const {getAllUsers,getSingleUser,updateUser} = require('../controllers/users')

router.route('/').get(getAllUsers)
router.route('/:id').get(getSingleUser).patch(updateUser)

module.exports = router