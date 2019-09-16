"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cngames_1 = require("../controllers/cngames");
class Gamesrouter {
    constructor() {
        this.info = express_1.Router();
        this.config();
    }
    config() {
        this.info.get("/", cngames_1.objGames.List);
        this.info.get("/:id", cngames_1.objGames.getOne);
        this.info.post("/", cngames_1.objGames.BodyPost);
        this.info.put("/:id", cngames_1.objGames.BodyPut);
        this.info.delete("/:id", cngames_1.objGames.BodyDelete);
    }
}
exports.Gamesrouter = Gamesrouter;
const games = new Gamesrouter();
exports.default = games.info;
