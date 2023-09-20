import { Request, Response } from "express";
import { Task } from "../models/Tasks";

export const getTask = async (req: Request, res: Response) => {
    try {
        await Task.findAll().then((result) => {
            res.json(result);
        })
    }
    catch(err){
        res.send(err);
    }
}

export const createTask = async(req: Request, res: Response) =>{
    const {name, done, projectid} = req.body;
    try{
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {fields: ["name", "done", "projectid"]})
        .then(()=>{
            res.send(newTask)
        })
    }
    catch(err){
        res.send(err);
    }
}

export const updateTask = async(req: Request, res: Response) =>{
    const {name, done, projectid} = req.body
    const {id} = req.params;

    try{
        await Task.update({
            name, done, projectid
        }, {where: {id}})
        .then(()=>{
            res.send("task update")
        })
    }
    catch(err){
        res.send(err);
    }
}

export const deleteTask = async(req: Request, res: Response) =>{
    const {id} = req.params;

    try{
        const task = await Task.findByPk(id);
        task?.destroy()
        .then(()=>{
            res.send("task delete");
        });
    }
    catch(err){
        res.send(err);
    }
}