"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSockets();
    }
    ;
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    ;
    //Escuchar al cliente
    escucharSockets() {
        console.log('Escuchando conexiones -Sockets');
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
        });
    }
    //inicar la app
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
;
