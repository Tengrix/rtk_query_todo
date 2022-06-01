export interface TodoTypes {
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
}
export interface DataTypes {
    todos:TodoTypes[];
    total:number;
    skip:number;
    limit:number;
}