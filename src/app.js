import { resolve } from 'path';
import express from 'express';

import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/auth', authRoutes);
    }
}

export default new App().app;