export interface Icar{
    color:string;
    model:string;
    topSpeed?: number;
}

const car1:Icar={
    color:'blue',
    model:'BWM',
    
}

const car2:Icar={
    color:'Red',
    model:'Mercedes',
    topSpeed:200
}

const multiply=(x:number,y:number) : void =>{
    x*y
}

export const cars=[car1,car2];