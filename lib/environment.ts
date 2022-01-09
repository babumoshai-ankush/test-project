import * as mysql from "mysql2";

enum Environments {
  local_environment = "local",
  dev_environment = "dev",
  prod_environment = "prod",
  qa_environment = "qa",
}

class Environment {
  private environment: String;

  constructor(environment: String) {
    this.environment = environment;
  }

  getPort(): Number {
    if (Environments.prod_environment || Environments.qa_environment) {
      return parseInt(<string>process.env.PORT, 10); //8081; //8083;
    }
    return 3000;
  }

  getDBConfig(): mysql.ConnectionOptions {
    switch (this.environment) {
      case Environments.dev_environment:
        return {
          host: "localhost",
          user: "root",
          database: "donor_db",
        };
      case Environments.prod_environment:
        return {
          host: "",
          user: "",
          database: "",
        };
      case Environments.qa_environment:
        return {
          host: "",
          user: "",
          database: "",
        };
    }
  }
}

export default new Environment(Environments.local_environment);
