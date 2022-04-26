import { Request, Response, NextFunction } from 'express';
import boom  from '@hapi/boom'

export function ValidatorHandler (schema: any, property: string){
 return (req: Request, res: Response, next: NextFunction) =>{
  
  let data: any = []
    
    switch(property) { 
      case 'params': { 
        data = req.params;
         break; 
      } 
      case 'body': { 
        data = req.body;
         break; 
      } 
      case 'query': { 
        data = req.query;
        break; 
      } 
      default: { 
        data = '';
        break; 
      } 
   } 

    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
 }
}


export default ValidatorHandler