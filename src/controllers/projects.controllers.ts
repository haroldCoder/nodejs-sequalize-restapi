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

export const createProjects = async (req: Request, res: Response) => {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Projects.create({
            name,
            priority,
            description,
            deliverydate
        }, { fields: ["name", "priority", "description", "deliverydate"] });

        res.json(newProject);
    }
    catch (err: any) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const updateProject = async(req: Request, res: Response) =>{
    const { name, priority, description } = req.body;
    const { id } = req.params;

    try{
        await Projects.update({
            name,
            priority,
            description }, {
            where: {
               id
            }
            
        }).then(()=>{
            console.log(`project update`);
        })
    }
    catch (err: any) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const deleteProject = async(req: Request, res: Response) =>{
    const { id } = req.params;
    try{
        const user = await Projects.findByPk(id);

        if (user){
            await user.destroy()
            res.send("project destroyed")
        }
        else{
            res.send("project not exist") 
        } 
    }
    catch (err: any) {
        res.status(500).json({
            message: err.message,
        });
    }
}