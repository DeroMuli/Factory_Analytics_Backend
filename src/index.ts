import * as dotenv from 'dotenv'
import express from "express"
import  cors from 'cors';
import router from './routes';

const startserver = async() => {
    const app = express()
    dotenv.config()
    const port = process.env.PORT;
    app.use(cors());
    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    }).on("error", (err : Error) => {
        console.log(err.message)
        process.exit()
    })
    app.use("/api/v1",router)
}

startserver()