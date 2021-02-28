const fs = require('fs/promises')
const { v4 } = require('uuid')
const path = require('path')

const contactsPath = path.join('./model/', 'contacts.json')

const listContacts = async () => {
  const contactsList = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(contactsList)
}

const getContactById = async (contactId) => {
  const contactsList = await fs.readFile(contactsPath, 'utf8')
  const currentContact = JSON.parse(contactsList).find(
    // eslint-disable-next-line eqeqeq
    (contact) => contact.id == contactId
  )
  return await currentContact
}

const removeContact = async (contactId) => {
  const contactsList = await fs.readFile(contactsPath, 'utf8')
  const updateContacts = JSON.parse(contactsList).filter(
    (contact) => contact.id !== contactId
  )
  // eslint-disable-next-line eqeqeq
  const existContact = JSON.parse(contactsList).some(contact => contact.id == contactId)
  fs.writeFile(contactsPath, JSON.stringify(updateContacts), 'utf8')
  return existContact
}

const addContact = async (body) => {
  const contactsList = await fs.readFile(contactsPath, 'utf8')
  const newContact = {
    id: v4(),
    ...body
  }
  const newContacts = [
    ...JSON.parse(contactsList),
    newContact
  ]
  fs.writeFile(contactsPath, JSON.stringify(newContacts), 'utf8')
  return newContact
}

const updateContact = async (contactId, body) => {
  const contactsList = await fs.readFile(contactsPath, 'utf8')
  const newContacts = JSON.parse(contactsList).map(contact => {
    // eslint-disable-next-line eqeqeq
    if (contact.id == contactId) {
      contact = {
        ...contact,
        ...body
      }
    }
    return contact
  })
  // eslint-disable-next-line eqeqeq
  const upDateContact = newContacts.find(contact => contact.id == contactId)
  fs.writeFile(contactsPath, JSON.stringify(newContacts), 'utf8')
  return upDateContact
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
}
