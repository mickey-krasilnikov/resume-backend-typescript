# Resume API

This is a RESTful API built with TypeScript and Express.js for managing parts of a resume: certifications, contacts, education, experiences, and skills.

## Requirements

- Node.js v14 or higher
- NPM or Yarn

## API Routes

The following routes are available:

- `GET /certification`: Retrieves a list of all certifications.
- `GET /certification/:id`: Retrieves a single certification by its ID.
- `POST /certification`: Creates a new certification.
- `PUT /certification/:id`: Updates an existing certification by its ID.
- `DELETE /certification/:id`: Deletes an existing certification by its ID.

- `GET /contacts`: Retrieves a list of all contacts.
- `GET /contacts/:id`: Retrieves a single contact by its ID.
- `POST /contacts`: Creates a new contact.
- `PUT /contacts/:id`: Updates an existing contact by its ID.
- `DELETE /contacts/:id`: Deletes an existing contact by its ID.

- `GET /education`: Retrieves a list of all education records.
- `GET /education/:id`: Retrieves a single education record by its ID.
- `POST /education`: Creates a new education record.
- `PUT /education/:id`: Updates an existing education record by its ID.
- `DELETE /education/:id`: Deletes an existing education record by its ID.

- `GET /experience`: Retrieves a list of all work experiences.
- `GET /experience/:id`: Retrieves a single work experience by its ID.
- `POST /experience`: Creates a new work experience.
- `PUT /experience/:id`: Updates an existing work experience by its ID.
- `DELETE /experience/:id`: Deletes an existing work experience by its ID.

- `GET /skills`: Retrieves a list of all skills.
- `GET /skills/:id`: Retrieves a single skill by its ID.
- `POST /skills`: Creates a new skill.
- `PUT /skills/:id`: Updates an existing skill by its ID.
- `DELETE /skills/:id`: Deletes an existing skill by its ID.

All POST and PUT routes require an authentication token in the `Authorization` header. You can obtain an authentication token by sending a `POST /auth/login` request with a valid email address and password.

## Configuration

The application's configuration is stored in the `.env` file. The following environment variables are used:

- `PORT`: The port number on which the server will listen.
- `MONGO_DB_URI`: The URI for the mongo database connection.
- `SQL_DB_CONFIG`: The config for the mssql database connection.
- `JWT_SECRET`: The secret used to sign JSON Web Tokens.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- Mongoose
- JSON Web Tokens (JWT)
- BCrypt

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
