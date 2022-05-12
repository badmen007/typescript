
// 什么是接口？ 就是用来描述数据形状的
// 接口中的东西都是抽象的,没有具体实现

interface IFruit {
  color: string,
  size: number,
  drink: () => string,
}

let fruit: IFruit = {
  color: 'red',
  size: 1,
  drink() {return 'laala'}
}

// 可以用type定义：type和interface的区别？
// 1. type可以使用联合类型 interface不行
// 2.type 不能被继承和实现。 interface可以被继承、实现、扩展
// 3.interface 不能用in操作符, type可以
// 4.type不能重复定义和interface重复定义可以合并

// 赋值的操作具备兼容性的特点： 从安全的角度进行考量
// 通过同名接口可以合并的特点

//  接口可以添加可选属性 扩展一些属性
interface IVeg {
  color: string,
  size: number,
  drink: () => string,
  // taste?: string,
}

// interface IVeg {  // 同名的可以自动合并， 一般在写声明文件的时候 希望扩展
//   taste: string
// }

interface MyVeg extends IVeg { // 通常不建议自动合并的方式  可以使用继承 这的继承可以写多个
  // taste?: string
  [key: string]: any   // 这个就是人任意类型  
}

let veg:MyVeg = {
  color: 'red',
  size: 1,
  drink() {return 'slsl'},
  taste: 'sss',
}

// 1.借助兼容性问题 
// 2.断言的方式 
// 3.加问好 
// 4.extends扩展的方式


// ts中用接口描述的其他的类型  [key: sting]: any 可索引类型
interface IArr {
  [key: number]: any
}
let arr: IArr = { 1: 100, 2: 200} // 可索引接口定义数组 和 数字的映射表


interface ISum {
  (x: string, y: string): string
}

interface ICounter { // 混合接口  可以描述属性+函数
  (): number;
  count: number;
}

// 接口描述类

interface IEat{
  // eat(): void;  // 原型的
  eat: () => void; // 实例的    
}

class Dog implements IEat { 
  eat!: () => void
  constructor() {

  }
}

// 类可以被接口继承  就是把类当成类型
interface IPerson extends Dog {

}

let person: IPerson = {
  eat() {

  }
}

// -------------------------------------  抽象类 不能被new 

abstract class Animal { // 父类中定义抽象方法 子类中必须要实现
  abstract eat: () => void; //要求子类实现的
  // eat(): void
  drink() { // 真实存在的方法
    return 'drink'
  }
}

class Tom extends Animal {
  eat!: () => void;
  
}

export {}