
let numbers:[number, string]=[1,"noman"];//tuples
numbers.push(1)
console.log(numbers)
// const small=1;
// const medium=2;
// const large=3;
const enum Size {Small=1,Medium,Large};
let mySize:Size=Size.Medium
console.log(mySize)
function TaxReturn(income:number,taxYear=2022) :number {
    
    if(taxYear<2022){
        return income*1.2
    }
    return income*1.3
}
TaxReturn(10_0000,20222)
let employee:Employee={id:1,name:"Noman",retire:(date:Date)=>console.log(date)};//now we can make as many copies of Employee as we want.
console.log(employee.name)
type Employee={
    readonly id:number, name:string,retire:(date:Date)=> void
}
function kgToLbs(weight:number|string):number{
    //Narrowing
    if(typeof weight=== "number"){
        return weight*2.2
    }else {
        return parseInt(weight)*2.2}
    

}
kgToLbs(10)
kgToLbs("20kg")
type Draggable={
    Drag:()=> void
}
type Resizable={
    Resize:()=>void
}
//intersection type in Action
type UI = Draggable & Resizable;
let TextBox:UI={
    Drag:()=> {},
    Resize:()=> {}
}
//literal type
type Quantity=50 |100
let quantity:Quantity=100//could assign only 50 or 100.
function greet(name:string | null | undefined){
    if(name){
        console.log(name.toUpperCase())
    } else console.log(name)
    
}
greet(null)
greet(undefined)
greet("Noman")