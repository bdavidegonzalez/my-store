/*
* david gonzalez
* my-store
*/

import express from 'express'
import routerApi from './routes'
import { logErrors, errorHandler, boomErrorHandler } from './middleware/error.handler'

const app = express()
const port = 5000
app.use(express.json());
routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () =>{
    console.log("My port: " + port);
});