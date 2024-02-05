// // type Yash = (a : number, b : number) => number

// // function addUtil(fn : Yash){
// //     console.log(fn(51,10));
// // }


// // addUtil(add);

// // function add(a : number , b : number){
// //     return a + b;
// // }



// // function add(a : number ) : string{
// //     return ("" + a);
// // }


// interface DescribableFunction  {
//     description: string;
//     args : number;
//     (someArg?: number): boolean;
//     (moreArgs : string) : string;
//     // new ()
// };
// function doSomething(fn: DescribableFunction) {
//     console.log(fn);
    
//     console.log(fn.description + " returned " + fn("65"));
// }
   
// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// function fun(moreArgs : string){
//     return moreArgs;
// }

// myFunc.description = "default description";
// // myFunc.args = 5;
// fun.description = "default description";
// fun.args  = 10;
   
// doSomething(fun);


// type SomeConstructor = {
//     new (s: string): SomeObject;
//   };
//   function fn(ctor: SomeConstructor) {
//     return new ctor("hello");
//   }


//   interface CallOrConstruct {
//     (n?: number): string;
//     new (s: string): Date;
//   }


//   function firstElement<T>(arr: T[]) {
//     return arr[0];
//   }

//   // s is of type 'string'
// const s = firstElement(["a", "b", "c"]);
// // console.log(s);
// // n is of type 'number'
// const n = firstElement([1, 2, 3]);
// // console.log(n);
// // u is of type undefined
// const u = firstElement([]);
// // console.log(u)


// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//     return arr.map(func);
// }
   
//   // Parameter 'n' is of type 'string'
//   // 'parsed' is of type 'number[]'
//   const parsed = map(["1", "2", "3"], (n) => {
//     let x = parseInt(n); 
//     return x+1;
//   });
//   console.log(parsed);


function addG <T extends (string | number), U extends (string | number)> (a : T, b : U):string{
    if(typeof a === 'number' && typeof b === 'string')
    return a + b;

}

console.log(addG("5",1));
console.log(addG("5","10"));


// interface Length{
//     length : number
// }

// function func<T extends Length,U extends Length>(a : T, b : U){
//     if(a.length >= b.length){
//         return a;
//     }
//     else return b;
// }
// // console.log(func([5],[10]));


// function minimumLength<Type extends { length: number }>(
//     obj: Type,
//     minimum: number
//   ) {
//     if (obj.length >= minimum) {
//       return obj;
//     } else {
//       return { length: minimum };
//     }
// }

// // function combine<Type, U>(arr1: Type[], arr2: U[]){
// //     return arr1.concat(arr2);
// // }
// // const arr = combine<number| string, number | string>([1, 2, 3], ["hello"]);
// // console.log(arr);


// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//     return arr.filter(func);
// }
   
// function filter2<Type, Func extends (arg: Type) => boolean>
//     (arr: Type[], func: Func): Type[] {
//     return arr.filter(func);
// }



function addNum(a : number | string, b : number | string) : number | string {

    if(typeof a == 'number' && typeof b == 'number')
        return a + b;

    if(typeof a == 'string' && typeof b == 'string')
        return a.concat(b);

    if(typeof a == 'string' && typeof b == 'number')
        return a+b;

    if(typeof a == 'number' && typeof b == 'string')
        return a+b;

}

console.log(addNum(5, "21"));



function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
}

// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {

    console.log(mOrTimestamp);
    
    return new Date(y, mOrTimestamp, d);
  } else {
    console.log(mOrTimestamp);
    
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
console.log(d1);

const d2 = makeDate(5, 5, 5);
console.log(d2);

// const d3 = makeDate(1, 3);

// function fn() :void;
// function fn(x: string): void {
//   // ...
// }
// Expected to be able to call with zero arguments
// fn();


// function addData(data1 : string, data2 : string) : string; 

// function addData(data1 : number, data2 : number): number; 

// function addData(data1 : any, data2 : any){ 
// 	return data1+ data2; 
// } 

// console.log(addData("Hello ", "GeeksforGeeks")); 
// console.log(addData(20, 30));
// console.log(addData(20, "20"));

// let tup : [string, string, number] = ["1", "2", 3];
// tup.push("2");
// console.log(tup);




interface Person {
    name : string,
    age : number,
    email : string
}

type SingleStudent = {studentId : string, name : string, age : number, email : string}

class Student implements Person{
    studentId : string
    name : string
    age : number
    email:string

    constructor(std : SingleStudent){
        this.studentId = std.studentId;
        this.name = std.name;
        this.age = std.age;
        this.email = std.email
    }

}

const ss  = {
    studentId : "1033",
    name : "Dheeraj",
    age : 21,
    email : "dheeraj.gupta.codes@gmail.com",
}

const c = new Student(ss);
// console.log(c);

