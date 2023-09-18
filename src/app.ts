import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.routes'

dotenv.config();

const app = express();

app.use(projectsRoutes)

export default app;