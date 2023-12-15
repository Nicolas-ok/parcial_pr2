import LibraryApi from "../Api/LibraryApi.js";

class BookController {
  constructor() {
    this.libraryApi = new LibraryApi();
  }

  // Endpoint: Dar de alta un libro
  create = async (req, res) => {
    try {
      const { code, title, author } = req.body;

      // Validación de datos
      if (!code || !title || !author) {
        throw new Error("Código, título y autor son campos obligatorios");
      }

      // Llama a la función para dar de alta un libro en la biblioteca
      const newBook = await this.libraryApi.createBook({ code, title, author });

      // Responde con el libro dado de alta
      res.status(201).send({ book: newBook, message: "Libro dado de alta exitosamente" });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };


  // Endpoint: Listar todos los libros ingresados
  getAll = async (req, res) => {
    try {
      // Llama a la función para obtener todos los libros en la biblioteca
      const allBooks = await this.libraryApi.getAllBooks();

      // Responde con la lista de libros
      res.status(200).send({ books: allBooks, message: "Lista de libros obtenida exitosamente" });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  // Endpoint: Dar de baja un libro por su código
  deleteByCode = async (req, res) => {
    try {
      const { code } = req.params;

      // Llama a la función para dar de baja un libro por su código
      const deletedBook = await this.libraryApi.deleteBookByCode(code);

      // Responde con el libro dado de baja
      res.status(200).send({ book: deletedBook, message: "Libro dado de baja exitosamente" });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  // Endpoint: Listar un libro en particular por su código
  getByCode = async (req, res) => {
    try {
      const { code } = req.params;

      // Llama a la función para obtener un libro por su código
      const book = await this.libraryApi.getBookByCode(code);

      // Responde con el libro encontrado
      res.status(200).send({ book, message: "Libro obtenido exitosamente" });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
}

export default BookController;
