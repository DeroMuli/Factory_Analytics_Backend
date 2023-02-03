import * as dotenv from 'dotenv'
import express from "express"
import  cors from 'cors';
import router from './routes';
import { testconnection } from './util/sequilizeconnection';
import {setupmockdatasocketconnection} from "./util/websocketconnections"
dotenv.config()
const port = process.env.PORT;


const startserver = async() => {

    const app = express()

    await testconnection()
    setupmockdatasocketconnection()

    app.use(cors());
    app.use(express.json())
    app.use("/api/v1",router)

    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    }).on("error", (err : Error) => {
        console.log(err.message)
        process.exit()
    })
     
}

startserver()