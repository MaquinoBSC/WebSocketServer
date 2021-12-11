const express= require('express');
const cors= require('cors');

class Server {
    constructor(){
        this.app= express();
        this.port= process.env.PORT;
        this.path= {};

        // Middlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.routes();
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

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports= Server;