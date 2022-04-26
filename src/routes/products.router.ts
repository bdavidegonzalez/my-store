/*
* david gonzalez
* my-store
* products-router
*/
import express from 'express'
import ProductsService from '../services/product.service'
import ValidatorHandler from '../middleware/validation.handler'
import { createProductSchema, updateProductSchema , getProductSchema } from '../dto/product.dto'
const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res, next) => {
	try {
		const products = await service.find();
		res.json(products);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.post('/', ValidatorHandler(createProductSchema, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const product = await service.create(body);
		res.status(201).json(product);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.get('/:id', ValidatorHandler(getProductSchema, 'params'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const products = await service.findOne(id);
		res.status(200).json(products);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.patch('/:id',  ValidatorHandler(getProductSchema, 'params'),  ValidatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const products = await service.update(id, body);
		res.status(200).json(products);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

router.delete('/:id', ValidatorHandler(getProductSchema, 'params'), async (req, res, next) => {
	try {
		const { id } = req.params;
		const products = await service.delete(id);
		res.status(200).json(products);
	} catch (error) {
		next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
	}
});

export default router
