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
      // Validar que el libro exista antes de intentar darlo de baja
      if (!this.isBookExist(code)) {
        throw new Error("Libro no encontrado");
      }

      // Filtrar la colección para mantener solo los libros que no coinciden con el código
      this.memory = this.memory.filter((book) => book.code !== code);

      return { message: "Libro dado de baja exitosamente" };
    } catch (error) {
      throw error;
    }
  };

  // Función para obtener un libro por su código
  getBookByCode = async (code) => {
    try {
      // Validar que el libro exista antes de intentar obtenerlo
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
