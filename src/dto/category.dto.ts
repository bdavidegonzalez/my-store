/*
* david gonzalez
* my-store
*/

import Joi from 'joi'

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const description = Joi.number().integer().min(30)

export const createCategorySchema = Joi.object({
    name: name.required(),
    description: description.required()
})

export const updateCategorySchema = Joi.object({
    name: name,
    description: description
})

export const getCategorySchema = Joi.object({
    id: id.required()
})

export default { createCategorySchema, updateCategorySchema , getCategorySchema }