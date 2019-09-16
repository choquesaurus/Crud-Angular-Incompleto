import {Response,Request} from 'express';

class CnIndex{
    
    config(req:Request,resp:Response){
            resp.json({text:"BodyCargado"});

            //resp.send("Index Inicializado");

    }


}

export const objCnIndex=new CnIndex();

