

class Cat{

}

class Dog{

}
// 怎么描述这个类的类型? 用typeof

interface IClazz<T> {  // 使用接口的时候传递这个泛型
  new(...args:any[]): T
}


function getInstance<T>(Clazz: IClazz<T>) { 
  return new Clazz;
}

let r = getInstance(Cat);
r    // ts 采用的是鸭子类型 长得一样就行


interface ICreateArray { 
  <T>(times: number, val: T): T[] // 调用这个函数的时候这个泛型才传递
}


const createArray:ICreateArray = <T>(times:number, val: T) => {
  let arr = [];
  for(let i = 0; i < times; i += 1) {
    arr.push(val);
  }
  return arr;
}
let c = createArray(5, 'abc')


// 循环数组  这个泛型放在哪里的问题？

// type ICallback<T> = (item: T, index:number) => void

interface ICallback<T> {
  (item: T, index:number): void;
}

const forEach = <T>(arr: T[], callback: ICallback<T>) => {
  for(let i = 0; i < arr.length; i ++) {
    callback(arr[i], i);
  }
}

forEach([1, '2', 3], function (item) {

})


// 泛型可以定义多个 元组的交换

function swap(tuple: [number, string]): [string, number] {
  return [tuple[1], tuple[0]]
}

let s = swap([1, 'a']);

// 泛型就是在用的时候决定类型，而且泛型可以声明多个

// 泛型约束
// function sum(a: string, b: string):string
// function sum(a: number, b: number):number
function sum<T extends string>(a:T, b:T) {
  return a + b;  // 泛型做运行的时候返回值无法推断， 需要使用重载来解决
}
let s2 = sum('1', '2');


// 约束参数
function getPerson<T extends {say: string}>(obj:T) {

}

getPerson({say: '1'})

// keyof语法
type IKeys = keyof any  //string | number | symbol

// 可以拿到对象的属性值
// function getVfromK<T extends object, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }

type IGetVFromK = <T extends object, K extends keyof T>(obj: T, key: K) => T[K]

const getVfromK: IGetVFromK  = (obj, key) => {
  return obj[key];
}

getVfromK({name: 'xx'}, 'name')

// extends keyof typeof 

/* 
1. 构造函数怎么表示类型？什么是泛型？ 泛型就是在使用的时候确定的类型

*/





export {};