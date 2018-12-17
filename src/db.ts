import * as sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database("mybib.db");

export default db;
