import * as mysql from "mysql2";
import environment from "../environment";

export const DB_MANAGER = {
  mysql: mysql.createConnection(environment.getDBConfig()),
};
