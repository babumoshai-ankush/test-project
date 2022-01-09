import { Request, Response } from "express";
import {
  successResponse,
  failureResponse,
  internalErrorResponse,
} from "../response_serializer";
import BloodGroupService from "db_manager/services/bloodGroupService";

import e = require("express");

export class BloodGroupController {
  private bloodGroupService: BloodGroupService = new BloodGroupService();

  public bloodGroups(req: Request, res: Response) {
    this.bloodGroupService.getGroups(function (
      err: any,
      results: any,
      fields: any
    ) {
      if (!err) {
        successResponse('', results, res);
        return;
      }
      failureResponse(err, res);
    });
  }
}
