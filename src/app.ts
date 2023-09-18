import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projects.routes'
import taskRoutes from './routes/tasks.routes'

dotenv.config();

const app = express();

app.use(projectsRoutes)
app.use(taskRoutes)

export default app;