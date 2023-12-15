import Factory from "../DAOs/Factory.js";
import { MODO } from "../config/config.js";

class LibraryApi {
  constructor() {
    this.factory = Factory.factory(MODO);
  }

  // Función para dar de alta un libro en la biblioteca
  createBook = async ({ code, title, author }) => {
    try {
      // Validar la información del libro
      if (!code || !title || !author) {
        throw new Error("Código, título y autor son campos obligatorios");
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
      // Llama al DAO correspondiente para obtener el libro por su código
      const book = await this.factory.libraryDao.getBookByCode(code);
      return book;
    } catch (error) {
      throw error;
    }
  };
}

export default LibraryApi;
