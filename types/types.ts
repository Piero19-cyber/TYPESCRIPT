export type departament = {
    id:number,
    name:string
}

type provice = {
    id: number,
    name: string,
    departament_id: number

}

type district = {
    id: number,
    name: string,
    departament_id: number,
    province_id: number

}


