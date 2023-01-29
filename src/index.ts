import * as dotenv from 'dotenv'
import express , {Request,Response} from "express"

const startserver = async() => {
    const app = express()
    dotenv.config()
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    }).on("error", (err : Error) => {
        console.log(err.message)
        process.exit()
    })
    app.use("/" , (req : Request , res : Response) => {
        res.write("Hi", (err : Error | null | undefined) => {
            console.log(err)
        })
    })
}

startserver()