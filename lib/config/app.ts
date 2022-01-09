import express from "express";
import environment from "../environment";
import { BloodGroupRoutes } from "../routes/blood_group_routs";
import { CommonRoutes } from "../routes/common_routes";

class App {
  public app: express.Application;

  private blood_group_routes: BloodGroupRoutes = new BloodGroupRoutes();
  private common_routes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.blood_group_routes.route(this.app);
    this.common_routes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded());
  }
}
export default new App().app;
