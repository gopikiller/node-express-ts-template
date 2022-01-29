import express, { Application, ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import createHttpError from 'http-errors';
import dotenv from 'dotenv';
import { route } from '@Routes/index';

// Boot express
const app: Application = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT ?? 5000;

// Application routing
app.use(route);

// Error Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message
  });
};

app.use(errorHandler);

// Start server
app.listen(port, () =>
  console.log(`\n
===================SERVER IS RUNNING===================
🚀 Server is listening on port http://localhost:${port}
=======================================================
\n`)
);
