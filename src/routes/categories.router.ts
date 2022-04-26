/*
* david gonzalez
* my-store
* products-router
*/
import express from 'express'
import CategorysService from '../services/category.service'
import ValidatorHandler from '../middleware/validation.handler'
import { createCategorySchema, updateCategorySchema , getCategorySchema } from '../dto/category.dto'

const router = express.Router()
const service = new CategorysService()

router.get('/', async (req, res, next) => {
	try {
		const categorys = await service.find();
		res.json(categorys);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.post('/', ValidatorHandler(createCategorySchema, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const categorys = await service.create(body);
		res.status(201).json(categorys);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.get('/:id', ValidatorHandler(getCategorySchema, 'params'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const categorys = await service.findOne(id);
		res.status(200).json(categorys);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.patch('/:id',  ValidatorHandler(getCategorySchema, 'params'),  ValidatorHandler(updateCategorySchema, 'body'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const categorys = await service.update(id, body);
		res.status(200).json(categorys);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.delete('/:id', ValidatorHandler(getCategorySchema, 'params'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const categorys = await service.delete(id);
		res.status(200).json(categorys);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

export default router;
