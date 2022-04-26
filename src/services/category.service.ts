/*
* david gonzalez
* my-store
* category-service
*/

import { faker } from '@faker-js/faker';
import  boom  from '@hapi/boom'

export class CategoryService{

    categories: any;

	constructor() {
		this.categories = []
		this.generete()
	}

	async generete() {
		const limit = 100;
        const categories = ["Baby", "Movies", "Shoes", "Books", "Electronics","Computers", "Kids"];
		for (let index = 0; index < limit; index++) {
		  this.categories.push({
			id: faker.datatype.uuid(),
            category: categories[Math.floor(Math.random() * categories.length)],
            description : faker.lorem.paragraph(),
			image: faker.image.imageUrl(),
		  });
		}
	}

	async create(data: any) {
		const newProduct = {
			id: faker.datatype.uuid(),
			name: data.name,
			image: faker.image.imageUrl()
		}
		this.categories.push(newProduct)
	}

	async find() {
		return this.categories;
	}

	async findOne(id: any) {
		let category = this.categories.find((item: any) => item.id === id)
		if(!category){
			throw boom.notFound('product not found')
		}
		return category
	}

	async update(id: any, changes: any) {
		let index = this.categories.findIndex((item: any) => item.id === id)
		if(index === -1){
			throw boom.notFound('product not found')
		}
		const category = this.categories[index]
		this.categories[index] = {
			...category,
			...changes
		}
		return this.categories[index]
	}

	async delete(id:any) {
		let index = this.categories.findIndex((item: any) => item.id === id)
		this.categories.splice(index, 1)
		return {
			id
		}
	}

}

export default CategoryService