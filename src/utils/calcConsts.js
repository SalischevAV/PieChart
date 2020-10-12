const R = 16;
const Pi = Math.PI;
export const rotationPercentage = (2*Pi*R)/100;
export const rotationCoefficient = 3.6;



export const sumRotationPercentage =(arr, propertyName, j)=>{
    let sum = 0;
    for (let i = 0; i <j; i++){
         sum += arr[i][propertyName];
    }
    return sum; 
}