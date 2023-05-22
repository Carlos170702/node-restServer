import { config } from "dotenv";
import { Server } from "./models/server.js";

// ejecuta para que se pueda usar las variables globales
config();
// se instancia la clase Server
const server = new Server();
        
server.start();
