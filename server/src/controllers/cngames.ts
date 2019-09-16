import {Response,Request} from 'express';
import pool from '../database';
//import { any } from 'bluebird';
class CnGames{
    public async List(req:Request,resp:Response):Promise<void>{
            //resp.json({text:'Listing games'});
            //pool.get("query"),"describe games";
            //resp.json("games"); 
            //resp.json({text:"BodyCargadoGames"});
            //resp.send("Index Inicializado");
           //await pool.get("query"),"select  * from games";
            const  lista= await pool.query("select  * from games",(error,result,fields)=>{
                if(error)throw error;

                resp.json(result);
                
            });
        }
    public async getOne(req:Request,resp:Response):Promise<void>{
        //resp.json({text:`Capturar solo uno  : ${req.params.id}`});
        const {id}=req.params;
        await pool.query("select  * from games where id = ?",[id],(error,result,fields)=>{
                if(error)throw error;
                if(result.length>0){
                    //resp.json({IdBuscado:`id buscado  es : ${id}`});
                    resp.json(result);
                }
                else{
                    resp.json({IdBuscado:`No existe el  siguiente  id  : ${id}`});
                    
                }
        });
        
    }
     public async BodyPost(req:Request,resp:Response):Promise<void>{
            //resp.json({Posting:"Peticion de Post"});
            //resp.json({posting_body:req.body});
            //console.log(req.body);
           //await pool.get("query"),"insert into games set ?",[req.body]; 
           await pool.query("insert into games set ?",[req.body]);
           resp.json({message:'Games saved'});
        }
    public async BodyPut(req:Request,resp:Response):Promise<void>{
        const  {id}=req.params;
        //resp.json({Actualizar:"Peticion de Actualizacion"+req.params.id+req.params.nombre});
        await pool.query("update games set ? where id=?",[req.body,id]);
        resp.json({actualizado:`Id Actualizado  es  : ${id}`});
    }
    public async BodyDelete(req:Request,resp:Response):Promise<void>{
        const  {id}=req.params;
         await pool.query("delete from games  where id = ?",[id]);   
        resp.json({Eliminar:`Eliminacion de id  :  ${id}`});
    }
}
export const objGames=new CnGames();

