import Factory from "../DAOs/Factory.js";
import { MODO } from "../config/config.js";

class LibraryApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  // Método privado para validar cadenas de texto
  isValidString = (value) => /^[a-zA-Z0-9\s]+$/.test(value);

  // Método privado para validar la existencia de un libro por código
  isBookExist = async (code) => {
    try {
      const allBooks = await this.getAllBooks();
      return allBooks.some((book) => book.code === code);
    } catch (error) {
      throw error;
    }
  };

  // Función para dar de alta un libro en la biblioteca
  createBook = async ({ code, title, author }) => {
    try {
      // Validar que el código no esté duplicado
      if (await this.isBookExist(code)) {
        throw new Error("Ya existe un libro con ese código");
      }

      // Validar que los datos no contengan caracteres especiales
      const validTitle = this.isValidString(title);
      const validAuthor = this.isValidString(author);

      if (!validTitle || !validAuthor) {
        throw new Error("Los datos contienen caracteres no permitidos");
      }

      // Llama al DAO correspondiente para dar de alta el libro
      const newBook = await this.factory.libraryDao.createBook({ code, title, author });
      return newBook;
    } catch (error) {
      throw error;
    }
  };

  // Función para obtener todos los libros en la biblioteca
  getAllBooks = async () => {
    try {
      // Llama al DAO correspondiente para obtener todos los libros
      const allBooks = await this.factory.libraryDao.getAllBooks();
      return allBooks;
    } catch (error) {
      throw error;
    }
  };

  // Función para dar de baja un libro por su código
  deleteBookByCode = async (code) => {
    try {
      // Validar que el libro exista antes de intentar darlo de baja
      if (!(await this.isBookExist(code))) {
        throw new Error("Libro no encontrado");
      }

      // Llama al DAO correspondiente para dar de baja el libro por su código
      const deletedBook = await this.factory.libraryDao.deleteBookByCode(code);
      return deletedBook;
    } catch (error) {
      throw error;
    }
  };

  // Función para obtener un libro por su código
  getBookByCode = async (code) => {
    try {
      // Validar que el libro exista antes de intentar obtenerlo
      const book = await this.factory.libraryDao.getBookByCode(code);
      if (!book) {
        throw new Error("Libro no encontrado");
      }

      return book;
    } catch (error) {
      throw error;
    }
  };
}

export default LibraryApi;
