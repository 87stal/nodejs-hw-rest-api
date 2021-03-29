const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

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
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user'
    }
  },
  { versionKey: false, timestamps: true }
)

const Contact = model('contact', contactSchema)

module.exports = Contact
