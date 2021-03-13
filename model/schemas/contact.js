const mongoose = require('mongoose')
const { Schema, model } = mongoose

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Input email'],
      unique: true
    },
    phone: {
      type: String,
      required: [true, 'Input phone'],
      unique: true
    },
    subscription: {
      type: String,
      required: [true, 'Choose type of subscription']
    },
    password: {
      type: String,
      required: [true, 'Input password'],
      default: ''
    },
    token: {
      type: String,
      default: ''
    }
  },
  { versionKey: false, timestamps: true }
)

const Contact = model('contact', contactSchema)

module.exports = Contact
