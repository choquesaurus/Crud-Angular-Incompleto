import mysql from 'mysql';
import key from './key';
const pool=mysql.createPool(key.database);
pool.getConnection((error,connecttion)=>{
    if(error)throw error;
    pool.releaseConnection(connecttion);
    console.log("db is connected :D");
});

/*
pool.get("getConnection")
.then(conection=>{
    pool.get("releaseConnection"),conection
    console.log("db is connectt");
});
*/
 export default pool;
