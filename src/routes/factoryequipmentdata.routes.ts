import { Router , Request , Response} from 'express'
import { FactoryDataAttributes } from '../models/FactoryEquipmentDataModel'

const FactoryEquipmentDataRouter = Router()

FactoryEquipmentDataRouter.get(":/id", (req : Request , res : Response) => {
    const id = Number(req.params.id)
})

FactoryEquipmentDataRouter.put(":/id", (req : Request, res : Response) => {
    const id = Number(req.params.id)
})

FactoryEquipmentDataRouter.delete(":/id", (req : Request, res : Response) => {
    const id = Number(req.params.id)
})

FactoryEquipmentDataRouter.post("/", (req : Request, res : Response) => {
    const payload : FactoryDataAttributes = req.body
})

export default FactoryEquipmentDataRouter