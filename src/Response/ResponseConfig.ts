
export interface IResponse{
    data?:object;
    status:number;
    message:string;
}


export class ResponseConfig{
    data:object;
    status:number;
    message:string;
    constructor(data:object = {}){
        this.data = data;
    }
}