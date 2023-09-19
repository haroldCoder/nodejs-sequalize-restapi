import app from "./app";
import {sequalize} from './database/conexion'
import projects from "./routes/projects.routes";

app.listen(3500, async()=>{
    await sequalize.sync({force: false}).then(async()=>{
        console.log(`conected db`);
        app.use("/", projects);
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log(`Server on port 3500`);
})