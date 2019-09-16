"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cnindex_1 = require("../controllers/cnindex");
class IndexRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cnindex_1.objCnIndex.config);
    }
}
const route1 = new IndexRoute();
exports.default = route1.router;
