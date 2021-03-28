const express = require('express')
const router = express.Router()
const validate = require('./validation')
const userController = require('../../../controllers/users')
const guard = require('../../../helpers/guard')

router.post('/auth/register', validate.schemaRegisterUser, userController.reg)
router.post('/auth/login', validate.schemaLoginUser, userController.login)
router.post('/auth/logout', guard, userController.logout)
router.get('/users/current', guard, userController.currentUser)

module.exports = router
