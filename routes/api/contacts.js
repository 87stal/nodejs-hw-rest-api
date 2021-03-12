const express = require('express')
const router = express.Router()
const validate = require('./validation')
const contactsController = require('../../controllers/contacts')

router
  .get('/', contactsController.getAll)
  .post('/', validate.createContact, contactsController.createContacts)

router
  .get('/:id', contactsController.getById)
  .delete('/:id', contactsController.deleteContact)

router.patch(
  '/:contactId',
  validate.updateContact,
  contactsController.updateContact
)

module.exports = router
