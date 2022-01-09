import { Response } from 'express';
import { ResponseStatusCodes } from './constants/globals';

export function successResponse(message: string, result: any, res: Response) {
    res.status(ResponseStatusCodes.success).json({        
        message: message,
        result: result
    });
}

export function failureResponse(message: string, res: Response) {
    res.status(ResponseStatusCodes.success).json({
        message: message,
    });
}

export function internalErrorResponse(res: Response) {
    res.status(ResponseStatusCodes.bad_request).json({
        message: 'Internal error',
    });
}