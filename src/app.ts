import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.routes'


dotenv.config();

const app = express();
app.use(taskRoutes)
app.use(morgan("dev"));

export default app;