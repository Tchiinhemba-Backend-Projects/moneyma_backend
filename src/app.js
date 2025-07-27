import { resolve } from 'path';
import express from 'express';
import cors from 'cors';

// ROUTES
import authRoutes from './routes/authRoutes';
import homeRoutes from './routes/homeRoutes';

// CORS
const whiteList = [
    'http://localhost:5173'
]

const corsOptions = {
    origin: function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by cors'));
        }
    }
}
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/auth', authRoutes);
    }
}

export default new App().app;