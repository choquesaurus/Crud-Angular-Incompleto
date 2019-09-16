"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CnIndex {
    config(req, resp) {
        resp.json({ text: "BodyCargado" });
        //resp.send("Index Inicializado");
    }
}
exports.objCnIndex = new CnIndex();
