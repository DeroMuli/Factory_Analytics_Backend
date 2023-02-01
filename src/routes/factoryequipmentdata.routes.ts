import { Router , Request , Response} from 'express'
import * as FactoryDataController from "../controllers/factoryequipmentdata.controller"

const FactoryEquipmentDataRouter = Router()

FactoryEquipmentDataRouter.get("/",async (req : Request , res : Response) => {
    const data = await FactoryDataController.getallfactorydata()
    res.status(200).json(data)
})

FactoryEquipmentDataRouter.get("/:id",async (req : Request, res : Response) => {
    const id  = Number(req.params.id)
    const result = await FactoryDataController.getfactorydatawithid(id)
    res.status(200).json(result)
})

FactoryEquipmentDataRouter.put("/update_mean_speed/",async (req : Request , res : Response) => {
    console.log(req.body)
    const {id , mean_speed } = req.body
    const result = await FactoryDataController.updatemeanspeedwithid(id,mean_speed)
    res.send(`update mean speed with id ${id}`)
})

FactoryEquipmentDataRouter.put("/update_mean_torque/",async (req : Request , res : Response) => {
    const {id , mean_torgue }  = req.body
    const result = await FactoryDataController.updatemeantorquewithid(id,mean_torgue)
    res.send(`update mean torque with id ${id}`)
})

FactoryEquipmentDataRouter.put("/update_mean_temp/", async (req : Request , res : Response) => {
    const {id , mean_temp}  = req.body
    const result = await FactoryDataController.updatemeantempwithid(id,mean_temp)
    res.send(`update mean temp with id ${id}`)
})

FactoryEquipmentDataRouter.delete("/:id",async (req : Request, res : Response) => {
    const id  = Number(req.params.id)
    const result = await FactoryDataController.deletefactorydatawithid(id)
    res.send(`delete factory data with id ${id}`)
})

FactoryEquipmentDataRouter.post("/",async (req : Request, res : Response) => {
    const {name , mean_speed , mean_torque , mean_temp , icon_library , icon_name } = req.body
    const result = await FactoryDataController.addfactorydata({
        name,
        mean_speed,
        mean_torque,
        mean_temp,
        icon_library,
        icon_name
    })
    res.send("add factory data")
})

export default FactoryEquipmentDataRouter