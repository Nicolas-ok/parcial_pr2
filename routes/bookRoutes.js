// Importa Router desde express
import { Router } from "express";
// Importa el controlador de libros
import BookController from "../controllers/BookController.js";

// Crea una instancia del controlador de libros
const bookController = new BookController();
// Crea un enrutador para los libros
const bookRoutes = Router();
// Crea un enrutador para la verificación de salud
const healthCheckRouter = Router();

// Endpoint de verificación de salud
healthCheckRouter.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

bookRoutes.get("/", bookController.getAll2);

// Endpoint: Dar de alta un libro
bookRoutes.post("/", bookController.create);

// Endpoint: Listar todos los libros ingresados
bookRoutes.get("/", bookController.getAll);

// Endpoint: Dar de baja un libro por su código
bookRoutes.delete("/:code", bookController.deleteByCode);

// Endpoint: Listar un libro en particular por su código
bookRoutes.get("/:code", bookController.getByCode);

// Exporta ambos enrutadores
export { bookRoutes, healthCheckRouter };
