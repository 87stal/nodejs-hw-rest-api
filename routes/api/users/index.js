const express = require('express')
const router = express.Router()
const validate = require('./validation')
const userController = require('../../../controllers/users')
const guard = require('../../../helpers/guard')
const upload = require('../../../helpers/upload')
const { createAccountLimiter } = require('../../../helpers/rate-limit-reg')

router.post('/auth/register', createAccountLimiter, validate.schemaRegisterUser, userController.reg)
router.post('/auth/login', validate.schemaLoginUser, userController.login)
router.post('/auth/logout', guard, userController.logout)
router.get('/users/current', guard, userController.currentUser)
router.patch(
  '/avatars',
  [guard, upload.single('avatar'), validate.validateUploadAvatar],
  userController.avatars
)
router.get('/auth/verify/:verificationToken', userController.verify)
module.exports = router
