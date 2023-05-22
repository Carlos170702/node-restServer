import express from "express";
import cors from "cors";
import { router } from "../routers/user.js";

export class Server {
  constructor() {
    //* properties
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //* middlewares son funciones que se ejecutaran al momento de levantar nuestro servidor
    this.middlewares();

    //* rutas de la aplicación
    this.routes();
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static("public"));

    //  lectura y parceo del body 
    this.app.use(express.json())

    // CORS
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usuariosPath, router);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log("conectado al puerto", this.port);
    });
  }
}
