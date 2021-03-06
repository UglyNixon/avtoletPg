import {$authHost,$host} from "./index"




export const createWorkerPlace =async (title) =>{
    const {data} = await $authHost.post('api/workerPlace',title)
 
    return data
}

export const fetchWorkerPlace =async (id) =>{
    const {data} = await $host.get('api/workerPlace',{params:{id:id}})
     return data

}


export const createWorker =async (formData) =>{
    const {data} = await $authHost.post('api/worker',formData)
 
    return data
}

export const fetchWorker =async () =>{
    const {data} = await $host.get('api/worker')
     return data

}
export const fetchOneWorker =async (id) =>{
    const {data} = await $host.get('api/worker/'+id)
     return data

}

export const fetchProducts= async()=>{
const {data} =await $host.get('api/product')
return data;

}

export const createProduct =async (formData) =>{
    const {data} = await $authHost.post('api/product',formData)
 
    return data
}

export const fetchOneBackup = async (id) =>{
const {data} = await $host.get('api/backup/'+id)
return data

}
export const fetchBackup = async () =>{
const {data} = await $host.get('api/backup')
return data
}

export const forceBackup =async(formData) =>{
    const {data} =await $authHost.post('api/backup',formData)
    return data
}

export const  forceBackupUseFile=async (formData)=>{
    const {data} = await $authHost.post('api/backup/useFile',formData)
    return data
       }
export const saveBackup = async (formData)=> {
    const {data} = await $authHost.post('api/backup/save',formData)
    return data;
}
export const deleteWorker = async (id)=> {
    const {data} = await $authHost.delete('api/worker/delete',{params:{id:id}})
    return data;
}