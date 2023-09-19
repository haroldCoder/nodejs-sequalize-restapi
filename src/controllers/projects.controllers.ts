import { Request, Response } from 'express';
import { Projects } from '../models/Projects'

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Projects.findAll();
        res.json(projects)
    }
    catch(err : any){
        res.status(500).json({
            message: err.message,
          });
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const { name, priority, description } = req.body;
    try {
        let newProject = await Projects.create({
            name,
            priority,
            description
        }, { fields: ["name", "priority", "description"] });

        return res.json(newProject);
    }
    catch (err: any) {
        res.status(500).json({
            message: err.message,
        });
    }
}