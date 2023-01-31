import * as dotenv from 'dotenv'
import express from "express"
import  cors from 'cors';
import router from './routes';
import { testconnection } from './util/sequilizeconnection';

const startserver = async() => {

    const app = express()
    dotenv.config()
    const port = process.env.PORT;

    await testconnection()

    app.use(cors());
    app.use("/api/v1",router)

    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    }).on("error", (err : Error) => {
        console.log(err.message)
        process.exit()
    })
     
}

startserver()