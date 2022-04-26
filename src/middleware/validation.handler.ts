import { Request, Response, NextFunction } from 'express';
import boom  from '@hapi/boom'

export function ValidatorHandler (schema: any, property: any){
 return (req: Request, res: Response, next: NextFunction) =>{
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
 }
}


export default ValidatorHandler