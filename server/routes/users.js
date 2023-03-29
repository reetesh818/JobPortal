const express = require('express')
const router = express.Router()

const {getAllUsers,getSingleUser,updateUser,getAppliedJobs,applyJob,deleteUser} = require('../controllers/users')

router.route('/').get(getAllUsers)
router.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser)
router.route('/:id/jobs').get(getAppliedJobs)
router.route('/:id/apply').patch(applyJob)

module.exports = router