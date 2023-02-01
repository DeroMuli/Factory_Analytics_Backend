import { FactoryDataAttributes } from "../models/FactoryEquipmentDataModel"
import FactoryEquipmentData from "../models/FactoryEquipmentDataModel"


const getallfactorydata = async () => {
    const allfactorydata = await FactoryEquipmentData.findAll()
    return allfactorydata
}

const getfactorydatawithid = async (id : number) => {
    const factorydata = await FactoryEquipmentData.findOne({
        where : {
            id
        }
    })
    return factorydata
}

const updatemeanspeedwithid = (id : number, mean_speed : number) => {
    const result = FactoryEquipmentData.update({mean_speed} , {where : {id}})
    return result
}

const updatemeantorquewithid = (id : number, mean_torque : number) => {
    const result = FactoryEquipmentData.update({mean_torque} , {where : {id}})
    return result
}

const updatemeantempwithid = (id : number, mean_temp : number) => {
    const result = FactoryEquipmentData.update({mean_temp} , {where : {id}})
    return result
}

const deletefactorydatawithid = (id : number) => {
    const result = FactoryEquipmentData.destroy({
        where : {
            id
        }
    })
    return result
}

const addfactorydata = async (data : any) => {
    const result = await FactoryEquipmentData.create(data)
    return result
}

export {getfactorydatawithid , updatemeanspeedwithid , deletefactorydatawithid , addfactorydata , getallfactorydata , updatemeantorquewithid , updatemeantempwithid }