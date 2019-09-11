export interface singlePost{
    id?:number;
    title:string;
    body:string;
}

export interface action{
    type:string;
    payload:any;
}
