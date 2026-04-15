import  { Request, Response, NextFunction } from 'express';
export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
    let message = 'Internal Server Error';
    let status = 500;

    // Type checking the error instead of using 'any'
    if (err instanceof Error) {
        message = err.message;
        // If your custom errors have a status, you can check for that too
        if ('status' in err) {
            status = (err as { status: number }).status;
        }
    }

    res.status(status).json({ error: message });
    next();
}