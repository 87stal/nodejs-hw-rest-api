const Joi = require('joi')

const schemaRegisterUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  subscription: Joi.string()
})

const schemaLoginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: 400,
      message: `Filed: ${message.replace(/"/g, '')}`
    })
  }
  next()
}

module.exports.schemaRegisterUser = (req, res, next) => {
  return validate(schemaRegisterUser, req.body, next)
}

module.exports.schemaLoginUser = (req, res, next) => {
  return validate(schemaLoginUser, req.body, next)
}
