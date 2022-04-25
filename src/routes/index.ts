/*
* david gonzalez
* my-store
*/


import express from 'express'

import productsRouter from './products.router'
import categoriesRouter from './products.router'
import usersRouter from './products.router'

function routerApi(app: any){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productsRouter)
    router.use('/categories', categoriesRouter)
    router.use('/users', usersRouter)
}

export default routerApi