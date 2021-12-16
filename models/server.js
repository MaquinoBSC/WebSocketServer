const express= require('express');
const cors= require('cors');
const { socketController } = require('../sockets/controllers');

class Server {
    constructor(){
        this.app= express();
        this.port= process.env.PORT;
        this.server= require('http').createServer(this.app);
        this.io= require('socket.io')(this.server);
        this.path= {};

        // Middlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.routes();
        
        // Sockets
        this.sockets();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        // this.app.use( this.path.auth, require('../routes/auth'));
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports= Server;