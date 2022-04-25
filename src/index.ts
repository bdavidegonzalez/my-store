/*
* david gonzalez
* my-store
*/

import express from 'express'
import routerApi from './routes'
const app = express()
const port = 5000

routerApi(app);

app.listen(port, () =>{
    console.log("My port: " + port);
});