import express from 'express'
import { SERVER_PORT } from '../global/environment';
import socketIO  from 'socket.io';
import http from 'http'



export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer:http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    };

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    };

    //Escuchar al cliente
    private escucharSockets() {
        console.log('Escuchando conexiones -Sockets');
        this.io.on('connection', cliente =>  {
            console.log('Cliente conectado');
        })
    }

    //inicar la app
    start( callback: Function )  {
        this.httpServer.listen(this.port,callback )
    }
};