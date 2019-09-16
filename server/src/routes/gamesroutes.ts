import {Router} from 'express';
import {objGames} from '../controllers/cngames';
export class Gamesrouter{
    
    
    public info:Router=Router();
    
    constructor(){
        this.config();
    }
    config():void{
        this.info.get("/",objGames.List);
        this.info.get("/:id",objGames.getOne);
        this.info.post("/",objGames.BodyPost);
        this.info.put("/:id",objGames.BodyPut);
        this.info.delete("/:id",objGames.BodyDelete);
        
    }
    
}
 const games=new Gamesrouter();
 export default games.info;