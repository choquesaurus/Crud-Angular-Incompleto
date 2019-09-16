"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
//import { any } from 'bluebird';
class CnGames {
    List(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            //resp.json({text:'Listing games'});
            //pool.get("query"),"describe games";
            //resp.json("games"); 
            //resp.json({text:"BodyCargadoGames"});
            //resp.send("Index Inicializado");
            //await pool.get("query"),"select  * from games";
            const lista = yield database_1.default.query("select  * from games", (error, result, fields) => {
                if (error)
                    throw error;
                resp.json(result);
            });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            //resp.json({text:`Capturar solo uno  : ${req.params.id}`});
            const { id } = req.params;
            yield database_1.default.query("select  * from games where id = ?", [id], (error, result, fields) => {
                if (error)
                    throw error;
                if (result.length > 0) {
                    //resp.json({IdBuscado:`id buscado  es : ${id}`});
                    resp.json(result);
                }
                else {
                    resp.json({ IdBuscado: `No existe el  siguiente  id  : ${id}` });
                }
            });
        });
    }
    BodyPost(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            //resp.json({Posting:"Peticion de Post"});
            //resp.json({posting_body:req.body});
            //console.log(req.body);
            //await pool.get("query"),"insert into games set ?",[req.body]; 
            yield database_1.default.query("insert into games set ?", [req.body]);
            resp.json({ message: 'Games saved' });
        });
    }
    BodyPut(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //resp.json({Actualizar:"Peticion de Actualizacion"+req.params.id+req.params.nombre});
            yield database_1.default.query("update games set ? where id=?", [req.body, id]);
            resp.json({ actualizado: `Id Actualizado  es  : ${id}` });
        });
    }
    BodyDelete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("delete from games  where id = ?", [id]);
            resp.json({ Eliminar: `Eliminacion de id  :  ${id}` });
        });
    }
}
exports.objGames = new CnGames();
