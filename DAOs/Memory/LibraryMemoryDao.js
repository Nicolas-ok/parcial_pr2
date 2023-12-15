class LibraryMemoryDao {
  constructor() {
    this.memory = []; //  la colección de libros en la biblioteca
  }

  // Función para dar de alta un libro en la biblioteca
  createBook = async ({ code, title, author }) => {
    try {
      const newBook = { code, title, author, state: "disponible" };
      this.memory.push(newBook);
      return newBook;
    } catch (error) {
      throw error;
    }
  };

  // Función para obtener todos los libros en la biblioteca
  getAllBooks = async () => {
    try {
      return this.memory;
    } catch (error) {
      throw error;
    }
  };

  // Función para dar de baja un libro por su código
  deleteBookByCode = async (code) => {
    try {
      const bookIndex = this.memory.findIndex((book) => book.code === code);
      if (bookIndex === -1) {
        throw new Error("Libro no encontrado");
      }

      const deletedBook = this.memory.splice(bookIndex, 1)[0];
      return deletedBook;
    } catch (error) {
      throw error;
    }
  };

  // Función para obtener un libro por su código
  getBookByCode = async (code) => {
    try {
      const book = this.memory.find((book) => book.code === code);
      if (!book) {
        throw new Error("Libro no encontrado");
      }

      return book;
    } catch (error) {
      throw error;
    }
  };


}

export default LibraryMemoryDao;
