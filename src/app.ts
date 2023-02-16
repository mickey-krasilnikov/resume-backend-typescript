import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { ConnectionPool, config } from "mssql";
import skillRoutes from "./routes/skillRoutes";
import { DB_TYPE_TO_USE, MONGO_DB_URI, SQL_DB_CONFIG, PORT } from "./config";

const app = express();

app.use(express.json());
app.use("/api", skillRoutes);

let connectFunc: Promise<typeof mongoose> | Promise<ConnectionPool>;
if (DB_TYPE_TO_USE == "mongo") {
	connectFunc = mongoose.connect(MONGO_DB_URI);
} else if (DB_TYPE_TO_USE == "sql") {
	connectFunc = new ConnectionPool({ ...SQL_DB_CONFIG }).connect();
} else {
	throw new Error(`Db typ ${DB_TYPE_TO_USE} is not supported`);
}

connectFunc
	.then(() => {
		console.log("Connected to database");
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to database", error);
	});

export default app;
