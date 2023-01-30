import { Router } from 'express'

const FactoryEquipmentDataRouter = Router()

FactoryEquipmentDataRouter.get(":/slug", () => {
    //get factory data
})

FactoryEquipmentDataRouter.put(":/id", () => {
    //update factory data
})

FactoryEquipmentDataRouter.delete(":/", () => {
    //delete factory data
})

FactoryEquipmentDataRouter.post("/", () => {
    //add factory data
})