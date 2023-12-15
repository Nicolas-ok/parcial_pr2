import LibraryMemoryDao from "./Memory/LibraryMemoryDao.js";

class Factory {
  constructor() {}

  static factory = (modo) => {
    if (modo === "memory") {
      return {
        libraryDao: new LibraryMemoryDao(),
      };
    }
  };
}

export default Factory;
