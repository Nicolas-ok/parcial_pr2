import LibraryApi from "../Api/LibraryApi.js";

class BookController {
  constructor() {
    this.libraryApi = new LibraryApi();
  }

  // Manejo genérico de las operaciones del controlador
  handleOperation = async (operation, req, res) => {
    try {
      await operation(req, res);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  // Endpoint: Dar de alta un libro
  create = async (req, res) => {
    const { code, title, author } = req.body;

    await this.handleOperation(async () => {
      const newBook = await this.libraryApi.createBook({ code, title, author });
      res.status(201).send({ book: newBook, message: "Libro dado de alta exitosamente" });
    }, req, res);
  };

  // Endpoint: Listar todos los libros ingresados
  getAll = async (req, res) => {
    await this.handleOperation(async () => {
      const allBooks = await this.libraryApi.getAllBooks();
      res.status(200).send({ books: allBooks, message: "Lista de libros obtenida exitosamente" });
    }, req, res);
  };

  // Endpoint: Dar de baja un libro por su código
  deleteByCode = async (req, res) => {
    const { code } = req.params;

    await this.handleOperation(async () => {
      const deletedBook = await this.libraryApi.deleteBookByCode(code);
      res.status(200).send({ book: deletedBook, message: "Libro dado de baja exitosamente" });
    }, req, res);
  };

  // Endpoint: Listar un libro en particular por su código
  getByCode = async (req, res) => {
    const { code } = req.params;

    await this.handleOperation(async () => {
      const book = await this.libraryApi.getBookByCode(code);
      res.status(200).send({ book, message: "Libro obtenido exitosamente" });
    }, req, res);
  };
}

export default BookController;
