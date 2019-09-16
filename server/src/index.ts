import express,{Application, urlencoded} from 'express';

import morgan  from 'morgan';
import cors from 'cors';

import indexroutes from './routes/indexroutes';
import gamesroutes from './routes/gamesroutes';
class Server{

    public app:Application;
    constructor(){
      this.app=express();
      this.config();
      this.router();
    }
    config():void{
        this.app.set("port",process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended:false}));
    }
    router():void{
        this.app.use('/',indexroutes);
        this.app.use('/api/games',gamesroutes);   
        
    }
    start():void{
        this.app.listen(this.app.get("port"),
        ()=>{console.log(`Running port in ${this.app.get("port")}`)});
    }
}

const server=new Server();
server.start();