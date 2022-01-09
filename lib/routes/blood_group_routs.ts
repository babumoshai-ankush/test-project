import { Application, Request, Response } from 'express';
import { BloodGroupController } from '../controllers/bloodGroupController';

export class BloodGroupRoutes {

    private bloodGroupController: BloodGroupController = new BloodGroupController();

    public route(app: Application) {
        app.get('/api/blood_group/get_groups', (req: Request, res: Response) => {
            this.bloodGroupController.bloodGroups(req, res);
        });
    }
}