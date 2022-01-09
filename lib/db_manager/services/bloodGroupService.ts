import { DB_MANAGER } from "../db_connection";

export default class BloodGroupService {
  public getGroups(callback: any) {
    DB_MANAGER.mysql.query("SELECT * FROM `blood_groups`", callback);
  }
}
