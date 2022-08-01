/**
 * Required External Modules
 */
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';

import routes from './routes/v1';

dotenv.config();

/**
 * App Variables
 */
const app: Express = express();
const port = process.env.PORT;

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/** Routes */
app.use('/v1', routes);

/**
 * Server Activation
 */
app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.send({
        message: 'Hello',
    });
});

let server: any;
mongoose.connect(process.env.MONGODB_URI || '').then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(
            `⚡️[server]: Server is running at https://localhost:${port}`
        );
    });
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error: string) => {
    console.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
        server.close();
    }
});
