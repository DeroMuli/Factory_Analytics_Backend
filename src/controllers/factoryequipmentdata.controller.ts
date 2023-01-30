import { FactoryDataAttributes } from "../models/FactoryEquipmentDataModel"

const getfactorydatawithid =  (id : number) : FactoryDataAttributes => {
    return {
        id : 2,
        name : "stuff",
        icon_library : "lib",
        icon_name : "name",
        mean_speed : 23,
        mean_temp : 23,
        mean_torgue : 24
    }
}

const updatefactorywithid = (id : number) : boolean => {
    return true
}

const deletefactorydatawithid = (id : number) : boolean => {
    return true
}

const addfactorydata = (data : FactoryDataAttributes) : boolean => {
    return true
}

export {getfactorydatawithid , updatefactorywithid , deletefactorydatawithid , addfactorydata}