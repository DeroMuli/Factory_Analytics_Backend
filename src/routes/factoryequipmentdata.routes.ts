import { Router , Request , Response} from 'express'

const FactoryEquipmentDataRouter = Router()

FactoryEquipmentDataRouter.get("/",(req : Request , res : Response) => {
    res.send("get all data")
})

FactoryEquipmentDataRouter.get("/:id", (req : Request, res : Response) => {
    const id  = req.params.id
    res.send(`get data by id ${id}`)
})

FactoryEquipmentDataRouter.put("/update_mean_speed/:id", (req : Request , res : Response) => {
    const id  = req.params.id
    res.send(`update mean speed with id ${id}`)
})

FactoryEquipmentDataRouter.put("/update_mean_torque/:id", (req : Request , res : Response) => {
    const id  = req.params.id
    res.send(`update mean torque with id ${id}`)
})

FactoryEquipmentDataRouter.put("/update_mean_temp/:id", (req : Request , res : Response) => {
    const id  = req.params.id
    res.send(`update mean temp with id ${id}`)
})

FactoryEquipmentDataRouter.delete("/:id", (req : Request, res : Response) => {
    const id  = req.params.id
    res.send(`delete factory data with id ${id}`)
})

FactoryEquipmentDataRouter.post("/", (req : Request, res : Response) => {
    res.send("add factory data")
})

export default FactoryEquipmentDataRouter