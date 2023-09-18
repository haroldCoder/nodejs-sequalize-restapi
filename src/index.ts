import app from "./app";
import {sequalize} from './database/conexion'

app.listen(3500, async()=>{
    console.log(`Server on port 3500`);
    await sequalize.sync({force: false}).then(()=>{
        console.log(`conected db`);
    })
    .catch((err)=>{
        console.log(err);
    })
})