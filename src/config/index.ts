import { ConnectionPool, config } from "mssql";

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";
export const DB_TYPE_TO_USE = process.env.DB_TYPE_TO_USE || "sql"; //'sql' or 'mongo'
export const MONGO_DB_URI =
	process.env.MONGO_DB_URI || "mongodb://localhost/myapp";

export const SQL_DB_CONFIG = {
	user: "myuser",
	password: "mypassword",
	server: "myserver",
	database: "mydatabase",
	options: {
		encrypt: true,
		trustServerCertificate: true, // local dev / self-signed certs
	},
};

export const pool = new ConnectionPool({ ...SQL_DB_CONFIG });

pool.on("error", (error) => {
	console.error("Database connection error", error);
});
