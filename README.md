# Sistema de Alquiler de Libros - Taller de Programación 2

Este proyecto implementa un sistema de alquiler de libros diseñado para una biblioteca con mucho público. Las funcionalidades clave incluyen:

- Ingresar libros existentes para su alquiler.
- Listar los libros ingresados en forma general y particular.
- Eliminar un libro del sistema.
- Listar un libro en particular segun su código.

## Requerimientos del Sistema

- Node.js (versión mínima): 16.3.0
- Express.js: ^4.18.2
- Dotenv: ^16.3.1

## Instrucciones de Ejecución

1. Instale las dependencias ejecutando `npm install`.
2. Inicie la aplicación con el comando `npm start`.
3. El servidor estará en ejecución en el puerto especificado.

Este proyecto es parte del taller de Programación 2 y cubre los fundamentos de desarrollo de APIs con Node.js y Express.

## Endpoints Implementados

1. **Verificación de Salud (Health Check):**
   - **Método:** GET
   - **Ruta:** `/api/health`
   - **Descripción:** Verifica la salud del servidor.

2. **Dar de Alta un Libro:**
   - **Método:** POST
   - **Ruta:** `/api/books/`
   - **Descripción:** Da de alta un nuevo libro en la biblioteca.

3. **Listar Todos los Libros Ingresados:**
   - **Método:** GET
   - **Ruta:** `/api/books/`
   - **Descripción:** Obtiene la lista de todos los libros ingresados en la biblioteca.

4. **Dar de Baja un Libro por su Código:**
   - **Método:** DELETE
   - **Ruta:** `/api/books/ABC123`
   - **Descripción:** Da de baja el libro con código "ABC123" de la biblioteca.

5. **Listar un Libro en Particular por su Código:**
   - **Método:** GET
   - **Ruta:** `/api/books/:code`
   - **Descripción:** Obtiene un libro en particular por su código.

