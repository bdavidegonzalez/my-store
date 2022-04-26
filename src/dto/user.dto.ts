/*
* david gonzalez
* my-store
*/

import Joi from 'joi'

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

export const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required()
});

export const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});

export default { createUserSchema, updateUserSchema, getUserSchema} 