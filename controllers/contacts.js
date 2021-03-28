const Contacts = require('../model/contacts')

const getAll = async (req, res, next) => {
  try {
    const userId = req.user.id
    const contacts = await Contacts.listContacts(userId)
    return res.json({
      status: 'success',
      code: 200,
      data: {
        contacts
      }
    })
  } catch (e) {
    next(e)
  }
}

const getById = async (req, res, next) => {
  try {
    const userId = req.user.id
    const contact = await Contacts.getContactById(req.params.contactId, userId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (e) {
    next(e)
  }
}

const createContact = async (req, res, next) => {
  try {
    const userId = req.user.id
    const contact = await Contacts.addContact({ ...req.body, owner: userId })
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        contact
      }
    })
  } catch (e) {
    next(e)
  }
}

const contactDelete = async (req, res, next) => {
  try {
    const userId = req.user.id
    const contact = await Contacts.removeContact(req.params.contactId, userId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        message: 'contact deleted'
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (e) {
    next(e)
  }
}

const updateContact = async (req, res, next) => {
  try {
    const userId = req.user.id
    const contact = await Contacts.updateContact(req.params.contactId, req.body, userId)
    if (contact) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          contact
        }
      })
    } else {
      return res.status(404).json({
        status: 'error',
        code: 404,
        data: 'Not Found'
      })
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getAll,
  getById,
  createContact,
  updateContact,
  contactDelete
}
