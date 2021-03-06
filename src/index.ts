/*
* david gonzalez
* my-store
*/
import express from 'express'
import routerApi from './routes'
import { logErrors, errorHandler, boomErrorHandler } from './middleware/error.handler'
import cors from 'cors';

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];

const options = {
  origin: (origin: any, callback: any) => {
    if (whitelist.includes(origin) != origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.use(cors(options));

routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () =>{
    console.log("My port: " + port);
});