const User = require('./schemas/user')

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const findById = async (id) => {
  return await User.findOne({ _id: id })
}

const findByVerifyToken = async (verificationToken) => {
  return await User.findOne({ verificationToken })
}
const create = async ({ email, password, subscription, verify, verificationToken }) => {
  const user = new User({ email, password, subscription, verify, verificationToken })
  return await user.save()
}

const updateVerifyToken = async (id, verify, verificationToken) => {
  return await User.findOneAndUpdate({ _id: id }, { verify, verificationToken }) // [1]
}

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token })
}

const updateAvatar = async (id, avatar) => {
  return await User.updateOne({ _id: id }, { avatar })
}
module.exports = {
  findByEmail,
  findById,
  create,
  updateToken,
  updateAvatar,
  findByVerifyToken,
  updateVerifyToken
}
