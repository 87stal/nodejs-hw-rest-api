const express = require('express')
const router = express.Router()
const validate = require('./validation')
const contactsController = require('../../../controllers/contacts')
const guard = require('../../../helpers/guard')

router
  .get('/', guard, contactsController.getAll)
  .post('/', guard, validate.createContact, contactsController.createContact)

router
  .get('/:id', guard, contactsController.getById)
  .delete('/:id', guard, contactsController.contactDelete)

router.patch(
  '/:contactId',
  guard,
  validate.updateContact,
  contactsController.updateContact
)

module.exports = router
