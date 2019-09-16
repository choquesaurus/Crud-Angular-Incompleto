import {Router} from 'express';
import {objCnIndex} from '../controllers/cnindex';
 class IndexRoute{
     public router:Router=Router();

     constructor(){
            this.config();
     }
     config():void{
        this.router.get('/',objCnIndex.config);
     }
    }
   const route1=new IndexRoute();
export default route1.router;
   