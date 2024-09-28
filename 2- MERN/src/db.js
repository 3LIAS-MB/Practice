// -> pool no puede ser exportado ECMASCRIPT sino que necesita ser CommonJS
// import { pool } from "./db.js";
import pg from 'pg';

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "S436339133xd",
});

pool.on("connect", () => console.log("Database connect"));
