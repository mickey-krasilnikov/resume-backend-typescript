# Resume Web API

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

The Resume App RESTful Web API built with TypeScript and Express.js that serves as the backend for a resume application. It enables to manage resume by allowing to create, read, update, and delete the various parts of the resume, including Certifications, Contacts, Education, Experience, and Skills.


## Requirements

- Node.js v14 or higher
- NPM or Yarn

## Endpoints

### Health

- `GET,HEAD /api/resumeservice/Health`

### Certification

- `OPTIONS,GET,POST /api/resumeservice/Certification`
- `GET,PUT,DELETE /api/resumeservice/Certification/{id}`

### Contacts

- `OPTIONS,GET,POST /api/resumeservice/Contacts`
- `GET,PUT,DELETE /api/resumeservice/Contacts/{id}`

### Education

- `OPTIONS,GET,POST /api/resumeservice/Education`
- `GET,PUT,DELETE /api/resumeservice/Education/{id}`

### Experience

- `OPTIONS,GET,POST /api/resumeservice/Experience`
- `GET,PUT,DELETE /api/resumeservice/Experience/{id}`

### Skills

- `OPTIONS,GET,POST /api/resumeservice/Skills`
- `GET,PUT,DELETE /api/resumeservice/Skills/{id}`

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

This project is licensed under the [WTFPL License](http://www.wtfpl.net/about/).
