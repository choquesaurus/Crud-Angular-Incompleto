"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const gamesroutes_1 = __importDefault(require("./routes/gamesroutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.urlencoded({ extended: false }));
    }
    router() {
        this.app.use('/', indexroutes_1.default);
        this.app.use('/api/games', gamesroutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => { console.log(`Running port in ${this.app.get("port")}`); });
    }
}
const server = new Server();
server.start();
