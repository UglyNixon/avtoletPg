
import {makeAutoObservable} from 'mobx'
export default class RuchkaStore {

        constructor() {
            this._workers=[
            ]
            this._workerPlace =[]
            this._ruchki=[
                {
                    id:1,
                    series:210001,
                    totalValue:1000,
                    dolg:25,
                    status:true,
                    date: '01/21',
                    brak:10,
                    productId:1,
                    workerId:1
                },  {
                    id:1,
                    series:210008,
                    totalValue:1000,
                    dolg:17,
                    status:true,
                    date: '02/21',
                    brak:25,
                    productId:1,
                    workerId:2
                },  {
                    id:1,
                    series:210010,
                    totalValue:1000,
                    dolg:25,
                    status:true,
                    date: '03/21',
                    brak:32,
                    productId:1,
                    workerId:3
                },  {
                    id:1,
                    series:210015,
                    totalValue:1000,
                    dolg:46,
                    status:true,
                    date: '04/21',
                    brak:98,
                    productId:1,
                    workerId:1
                },
            ]
            this._product=[
                {
                    id:1,
                    title:'Ручка',
                    img:'ac1dcd76-88c7-4cd6-802a-bd7cebf513cf.jpeg'
                },{
                    id:2,
                    title:'Плата',
                    img:'ac1dcd76-88c7-4cd6-802a-bd7cebf513cf.jpeg'
                },{
                    id:3,
                    title:'Кодовая полоска',
                    img:'ac1dcd76-88c7-4cd6-802a-bd7cebf513cf.jpeg'
                },{
                    id:4,
                    title:'Паспорта',
                    img:'ac1dcd76-88c7-4cd6-802a-bd7cebf513cf.jpeg'
                }]
                this._selectedPlace={}

         
            makeAutoObservable(this)

        }
        setWorkers (workers) {
            this._workers=workers
        }
        setProduct(product) {
            this._product = product
        }
        setRuchki (ruchki) {
            this._ruchki=ruchki
        }
        setWorkerPlace(workerPlace){
            this._workerPlace=workerPlace
        }
        setSelectedPlace(place){
            this._selectedPlace=place
        }
       get workers (){
           return this._workers
       }
       get workerPlace (){
           return this._workerPlace
       }
       get product (){
        return this._product
    }
       get ruchki (){
        return this._ruchki
    }
        get selectedPlace(){
            return this._selectedPlace
        }




}