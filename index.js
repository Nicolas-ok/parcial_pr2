import express from "express";
import { config } from "dotenv";
import { SERVER_PORT } from "./config/config.js";
import { bookRoutes, healthCheckRouter } from "./routes/bookRoutes.js";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRoutes); 
app.use("/api", healthCheckRouter);

console.log("Puerto del servidor:", SERVER_PORT);
app.listen(SERVER_PORT, () => {
  console.log("Servidor en ejecución en el puerto", SERVER_PORT);
});
