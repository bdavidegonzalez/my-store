/*
* david gonzalez
* my-store
* services products
*/



import { faker } from '@faker-js/faker';
import  boom  from '@hapi/boom'
export class ProductsService {
	
	products: any;

	constructor() {
		this.products = []
		this.generete()
	}

	async generete() {
		const limit = 100;
		for (let index = 0; index < limit; index++) {
		  this.products.push({
			id: faker.datatype.uuid(),
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		  });
		}
	}

	async create(data: any) {
		const newProduct = {
			id: faker.datatype.uuid(),
			name: data.name,
			price: data.price,
			image: faker.image.imageUrl()
		}
		this.products.push(newProduct)
	}

	async find() {
		return this.products;
	}

	async findOne(id: any) {
		let product = this.products.find((item: any) => item.id === id)
		if(!product){
			throw boom.notFound('product not found')
		}
		return product
	}

	async update(id: any, changes: any) {
		let index = this.products.findIndex((item: any) => item.id === id)
		if(index === -1){
			throw boom.notFound('product not found')
		}
		const product = this.products[index]
		this.products[index] = {
			...product,
			...changes
		}
		return this.products[index]
	}

	async delete(id:any) {
		let index = this.products.findIndex((item: any) => item.id === id)
		this.products.splice(index, 1)
		return {
			id
		}
	}
}

export default ProductsService;
